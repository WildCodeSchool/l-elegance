import React, { useRef, useState } from "react";
import { MDBBtn, MDBSpinner, MDBStepper, MDBStepperStep } from "mdb-react-ui-kit";
import "./stepper.css"
import QuestionOne from "../components/stepperQuestion/QuestionOne";
import QuestionTwo from "../components/stepperQuestion/QuestionTwo";
import QuestionTree from "../components/stepperQuestion/QuestionTree";
import QuestionFour from "../components/stepperQuestion/QuestionFour";
import QuestionFive from "../components/stepperQuestion/QuestionFive";
import QuestionSix from "../components/stepperQuestion/QuestionSix";
import { useQuestionContext } from "../context/QuestionContext";
import { useNavigate } from "react-router-dom";

function Stepper() {
  const [wait, setWait] = useState(false);
  const { sendSurvey } = useQuestionContext();
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const nextRef = useRef(null);
  const prevRef = useRef(null);
  const navigate = useNavigate();

  const nextQuestion = () => {
    if (currentQuestion < 7) {
      setCurrentQuestion(currentQuestion + 1)
    }
  }

  const prevQuestion = () => {
    if (currentQuestion > 1) {

      setCurrentQuestion(currentQuestion - 1)
    }
  }

  async function handleSubmit() {
    await sendSurvey();
    setWait(true);
    await new Promise(e => setTimeout(e, 3000));
    navigate("/results");
  }

  const loading = <MDBSpinner role="status" size="sml">
    <span className="visually-hidden">loading...</span>
  </MDBSpinner>
  return (
    <>


      <div id="inscription">
        <div className="hero">
          <div className="step">
            <MDBStepper disableHeadSteps externalNext={nextRef} externalPrev={prevRef} type="vertical">
              <MDBStepperStep headText="VOTRE PROFIL" itemId={1} customValidation="none">

              </MDBStepperStep>
              <MDBStepperStep headText="VOS TRAITEMENTS" itemId={2}>

              </MDBStepperStep>
              <MDBStepperStep headText="EFFETS SECONDAIRES" itemId={3}>
              </MDBStepperStep>
              <MDBStepperStep headText="ALOPÉCIE" itemId={4}>

              </MDBStepperStep>
              <MDBStepperStep headText="ALLERGIES " itemId={5}>

              </MDBStepperStep>
              <MDBStepperStep headText="HYPEROSMIEs" itemId={6}>

              </MDBStepperStep>

            </MDBStepper>
          </div>
          <div className="logo">
            <img src="../src/assets/logo.png" alt="" />
          </div>
        </div>
        <div className="formulaire">
          <div className="formulaire-interieur">
            <h5 className="vous">EN SAVOIR PLUS SUR VOUS</h5>
            <h3 className="questio-title">Prenez quelques minutes pour repondre à notre questionnaire</h3>
            <div className="question">
              {currentQuestion === 1 && <QuestionOne />}
              {currentQuestion === 2 && <QuestionTwo />}
              {currentQuestion === 3 && <QuestionTree />}
              {currentQuestion === 4 && <QuestionFour />}
              {currentQuestion === 5 && <QuestionFive />}
              {currentQuestion === 6 && <QuestionSix />}

            </div>
            <div className="mb-3 btn-container">
              {currentQuestion === 1 ? "" : <MDBBtn className="question-btn" onClick={prevQuestion} ref={prevRef}>précédent</MDBBtn>}
              {currentQuestion === 6 ? <MDBBtn className="question-btn next" type="button" onClick={handleSubmit}>{wait ? loading : "envoyer"}</MDBBtn> : <MDBBtn className="question-btn next" onClick={nextQuestion} ref={nextRef}>suivant</MDBBtn>}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Stepper;
