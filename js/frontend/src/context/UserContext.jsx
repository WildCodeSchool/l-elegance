import { createContext, useContext, useMemo, useState } from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const userContext = createContext();

export default function UserContextProvider({ children }) {
    const navigate = useNavigate();
    const [user, setUser] = useState({ isConnected: false });
    const [messageUser, setMessageUser] = useState({ isConnected: false });
    const [suggestions, setSuggestions] = useState([]);

    async function checkCredentials(credentials) {
        try {
            const { data } = await axios.post(
                "http://localhost:3310/api/user",
                credentials
            );
            console.log("energistré ", data.token);

            console.log("energistré ");
            return {
                token: data.token,
                userdb: data.user,
                message: data.message,
            };
        } catch (err) {
            console.error(err);
            return { userdb: null, message: err.response.data.message };
        }
    }


    async function login(credentials) {
        const { userdb, message } = await checkCredentials(credentials);
        if (userdb) {
            localStorage.setItem("token", JSON.stringify(userdb.token));
            setUser({
                isConnected: true,
                firstname: userdb.firstname,
                lastname: userdb.lastname,
                email: userdb.email,
            });
            axios.defaults.headers.common.Authorization = `Bearer ${userdb.token}`;
            navigate("/page1");
            setMessageUser(message);
        } else {
            axios.defaults.headers.common.Authorization = `Bearer ""`;
            setMessageUser(message);
        }
    }

    function calculateAge(dateOfBirth) {
        const now = new Date();
        const diff = Math.abs(now - dateOfBirth);
        const age = Math.floor(diff / (1000 * 60 * 60 * 24 * 365));
        return age;
    }

    async function register(newUser) {
        try {
            const { message, insertId } = await axios.post(
                "http://localhost:3310/api/users",
                newUser
            );
            if (+insertId === 0) {
                // à corriger
                setMessageUser(message);
                return false;
            }

            setMessageUser(message);
            return true;
        } catch (err) {
            setMessageUser(err.response.data.message);
            return false;
        }
    }


    async function getProposition(user) {
        const newUser = { Age: calculateAge(user.birthday), profession: user.profession, ville: user.city };
        try {
            const res = await axios.post("http://localhost:5000/ml", newUser);
            console.log(res.data);
            setSuggestions([...res.data]);
        } catch (error) {
            console.log(err.message)
        }

    }

    // function called to logout use, it empty the localstorage as well
    function logout() {
        setUser({ isConnected: false });
        localStorage.removeItem("token");
    }

    const contextData = useMemo(
        () => ({ user, setUser, messageUser, setMessageUser, login, register, calculateAge, getProposition, suggestions }),
        [user, setUser, messageUser, setMessageUser, login, register, calculateAge, getProposition, suggestions]
    );
    return (
        <userContext.Provider value={contextData}>{children}</userContext.Provider>
    );
}
UserContextProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export const useUserContext = () => useContext(userContext);