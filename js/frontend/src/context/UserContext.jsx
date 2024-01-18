import { createContext, useContext, useMemo, useState } from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const userContext = createContext();

export default function UserContextProvider({ children }) {
  const navigate = useNavigate();
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

  // function called to logout use, it empty the localstorage as well
  function logout() {
    setUser({ isConnected: false });
    localStorage.removeItem("token");
  }

  const contextData = useMemo(
    () => ({ user, setUser, messageUser, setMessageUser, login, register }),
    [user, setUser, messageUser, setMessageUser, login, register]
  );
  return (
    <userContext.Provider value={contextData}>{children}</userContext.Provider>
  );
}
UserContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useUserContext = () => useContext(userContext);
