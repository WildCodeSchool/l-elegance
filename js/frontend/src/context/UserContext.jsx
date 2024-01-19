import { createContext, useContext, useEffect, useMemo, useState } from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import axios from "axios";
// import.meta.env.VITE_BACKEND_URL
// const {VITE_BACKEND_URL, VITE_DATA_FLASK} = process.env;

const userContext = createContext();

export default function UserContextProvider({ children }) {
    const navigate = useNavigate();
    const [user, setUser] = useState({ isConnected: false });
    const [messageUser, setMessageUser] = useState({ isConnected: false });
    const [suggestions, setSuggestions] = useState([]);

    function onLoad() {
        try {
            const userLS = JSON.parse(localStorage.getItem("user"));
            if (userLS) {
                setUser({ ...userLS, Age: Math.floor(Math.random() * 40 + 20), isConnected: true });
                navigate("/home");
            }
            console.log({ ...userLS, Age: Math.floor(Math.random() * 40 + 20) });
        } catch (error) {

        }
    }

    async function checkCredentials(credentials) {
        try {
            const { data } = await axios.post(
                `${import.meta.env.VITE_BACKEND_URL}/api/user`,
                credentials
            );
            console.log("energistré ", data.token);

            console.log("energistré ", data.user);
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
        const { userdb, message, token } = await checkCredentials(credentials);
        if (userdb) {
            localStorage.setItem("token", JSON.stringify(token));
            localStorage.setItem("user", JSON.stringify(userdb));

            setUser({
                isConnected: true,
                firstname: userdb.firstname,
                lastname: userdb.lastname,
                email: userdb.email,
                city: userdb.city,
                profession: userdb.profession,

            });
            // localStorage.setItem("user",JSON.stringify(user));
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
                `${import.meta.env.VITE_BACKEND_URL}/api/users`,
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


    async function getProposition(newUser) {
        console.log("new user", newUser);
        // const newUser = { Age: , profession: user.profession, ville: user.city };
        try {
            const res = await axios.post(`${import.meta.env.VITE_DATA_FLASK}/ml`, newUser);
            console.log(res.data);
            setSuggestions([...res.data]);
        } catch (error) {
            console.log(error.message)
        }

    }

    // function called to logout use, it empty the localstorage as well
    function logout() {
        setUser({ isConnected: false });
        localStorage.removeItem("token");
        localStorage.removeItem("user");

    }

    const contextData = useMemo(
        () => ({ logout, user, setUser, messageUser, setMessageUser, login, register, calculateAge, getProposition, suggestions }),
        [logout, user, setUser, messageUser, setMessageUser, login, register, calculateAge, getProposition, suggestions]
    );
    useEffect(() => {
        onLoad();
    }, []);
    return (
        <userContext.Provider value={contextData}>{children}</userContext.Provider>
    );
}
UserContextProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export const useUserContext = () => useContext(userContext);