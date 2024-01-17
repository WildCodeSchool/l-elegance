import { createContext, useContext, useMemo, useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";

const userContext = createContext();

export default function UserContextProvider({ children }) {
    const [user, setUser] = useState({ isConnected: false });
    const [messageUser, setMessageUser] = useState({ isConnected: false });

    async function checkCredentials(credentials) {
        try {
            const { data } = await axios.post(
                "http://localhost:3310/api/user",
                credentials
            );
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
        const { headers, userdb, message } = await checkCredentials(credentials);
        if (userdb) {
            localStorage.setItem("user", JSON.stringify(headers.token));
            setUser({
                isConnected: true,
                firstname: userdb.firstname,
                lastname: userdb.lastname,
                email: userdb.email,
            });
            axios.defaults.headers.common.Authorization = `Bearer ${headers.token}`;
            navigate("/Page1");
            setMessageUser(message);
        } else {
            axios.defaults.headers.common.Authorization = `Bearer ""`;
            setMessageUser(message);
        }
    }


    const contextData = useMemo(
        () => ({ user, setUser, messageUser, setMessageUser, login }), [user, setUser, messageUser, setMessageUser, login]
    );
    return (
        <userContext.Provider value={contextData}>{children}</userContext.Provider>
    );
}
UserContextProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export const useUserContext = () => useContext(userContext);