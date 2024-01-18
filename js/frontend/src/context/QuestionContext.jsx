import { createContext, useContext, useMemo, useState } from "react";
import PropTypes from "prop-types";

const questionContext = createContext();

export default function QuestionContextProvider({ children }) {
  const [data, setData] = useState({
    cancer: null,

    chimio: false,
    radio: false,
    immuno: false,

    demange: false,
    rougeur: false,
    seche: false,
    cutanee: false,
    pigment: false,
    irrit: false,
    decolor: false,
    pele: false,
    desquema: false,
    eczema: false,
    psoriasis: false,
    herpes: false,

    alopecie: null,

    allergie: null,

    odora: null,
  })



  const contextData = useMemo(
    () => ({ data, setData }), [data, setData]
  );
  return (
    <questionContext.Provider value={contextData}>{children}</questionContext.Provider>
  );
}
QuestionContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useQuestionContext = () => useContext(questionContext);