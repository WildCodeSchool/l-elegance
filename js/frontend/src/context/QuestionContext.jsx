import { createContext, useContext, useMemo, useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";

const questionContext = createContext();

export default function QuestionContextProvider({ children }) {
  const [products, setProducts] = useState([]);
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
  });

  async function sendSurvey() {
    const res = await axios.post("http://localhost:5000/api/1", data);
    console.log("result", res.data);
    setProducts([...res.data]);
  }

  const contextData = useMemo(
    () => ({ data, setData, sendSurvey, products }),
    [data, setData, sendSurvey, products]
  );

  return (
    <questionContext.Provider value={contextData}>
      {children}
    </questionContext.Provider>
  );
}
QuestionContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useQuestionContext = () => useContext(questionContext);
