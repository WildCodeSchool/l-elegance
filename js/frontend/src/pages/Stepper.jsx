import React, { useRef, useState } from "react";
import { MDBBtn, MDBStepper, MDBStepperStep } from "mdb-react-ui-kit";
import "./stepper.css";
import QuestionOne from "../components/stepperQuestion/QuestionOne";
import QuestionTwo from "../components/stepperQuestion/QuestionTwo";
import QuestionTree from "../components/stepperQuestion/QuestionTree";
import QuestionFour from "../components/stepperQuestion/QuestionFour";
import QuestionFive from "../components/stepperQuestion/QuestionFive";
import QuestionSix from "../components/stepperQuestion/QuestionSix";
import QuestionSeven from "../components/stepperQuestion/QuestionSeven";
import { useQuestionContext } from "../context/QuestionContext";
import QuestionTreeA from "../components/stepperQuestion/QuestionTreeA";
import QuestionTreeB from "../components/stepperQuestion/QuestionTreeB";
import QuestionTreeC from "../components/stepperQuestion/QuestionTreeC";

function Stepper() {
  const { data } = useQuestionContext();
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const nextRef = useRef(null);
  const prevRef = useRef(null);

  const nextQuestion = () => {
    if (currentQuestion < 7) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const prevQuestion = () => {
    if (currentQuestion > 1) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  return (
    <>
      <div id="inscription">
        <div className="hero">
          <div className="step">
            <MDBStepper
              disableHeadSteps
              externalNext={nextRef}
              externalPrev={prevRef}
              type="vertical"
            >
              <MDBStepperStep
                headIcon={1}
                headText="step 1"
                itemId={1}
              ></MDBStepperStep>
              <MDBStepperStep
                headIcon={2}
                headText="step 2"
                itemId={2}
              ></MDBStepperStep>
              <MDBStepperStep
                headIcon={3}
                headText="step 3"
                itemId={3}
              ></MDBStepperStep>
              <MDBStepperStep
                headIcon={4}
                headText="step 4"
                itemId={4}
              ></MDBStepperStep>
              <MDBStepperStep
                headIcon={5}
                headText="step 5"
                itemId={5}
              ></MDBStepperStep>
              <MDBStepperStep
                headIcon={6}
                headText="step 6"
                itemId={6}
              ></MDBStepperStep>
            </MDBStepper>
          </div>
          <div className="logo">
            <img src="../src/assets/logo.png" alt="" />
          </div>
        </div>
        <div className="formulaire">
          <div className="formulaire-interieur">
            <h5 className="vous">EN SAVOIR PLUS SUR VOUS</h5>
            <h3 className="questio-title">
              Prenez quelques minutes pour repondre à notre questionnaire
            </h3>
            <div className="question">
              {currentQuestion === 1 && <QuestionOne />}
              {currentQuestion === 2 && <QuestionTwo />}
              {currentQuestion === 3 && <QuestionTree />}
              {currentQuestion === 4 && <QuestionFour />}
              {currentQuestion === 5 && <QuestionFive />}
              {currentQuestion === 6 && <QuestionSix />}
            </div>
            <div className="mb-3 btn-container">
              <MDBBtn
                className="question-btn"
                onClick={prevQuestion}
                ref={prevRef}
              >
                précédent
              </MDBBtn>
              {currentQuestion === 6 ? (
                <MDBBtn
                  className="question-btn next"
                  type="button"
                  onClick={console.log(data)}
                >
                  envoyer
                </MDBBtn>
              ) : (
                <MDBBtn
                  className="question-btn next"
                  onClick={nextQuestion}
                  ref={nextRef}
                >
                  suivant
                </MDBBtn>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Stepper;
