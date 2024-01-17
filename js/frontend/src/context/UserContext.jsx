import { createContext, useContext, useMemo } from "react";
import PropTypes from "prop-types";

const userContext = createContext();

export default function UserContextProvider({ children }) {


    const contextData = useMemo(
        () => ({}), []
    );
    return (
        <userContext.Provider value={contextData}>{children}</userContext.Provider>
    );
}
UserContextProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export const useUserContext = () => useContext(userContext);