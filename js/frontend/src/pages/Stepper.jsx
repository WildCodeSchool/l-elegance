import React, { useRef, useState } from "react";
import { MDBBtn, MDBStepper, MDBStepperStep } from "mdb-react-ui-kit";
import "./stepper.css"
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
      setCurrentQuestion(currentQuestion + 1)
    }
  }

  const prevQuestion = () => {
    if (currentQuestion > 1) {

      setCurrentQuestion(currentQuestion - 1)
    }
  }

  return (

    <div className="w-100">

      <div className="grid">
        <div>
          <MDBStepper disableHeadSteps externalNext={nextRef} externalPrev={prevRef} type="vertical">
            <MDBStepperStep headIcon={1} headText="step 1" itemId={1}>

            </MDBStepperStep>
            <MDBStepperStep headIcon={2} headText="step 2" itemId={2}>

            </MDBStepperStep>
            <MDBStepperStep headIcon={3} headText="step 3" itemId={3}>

            </MDBStepperStep>
            <MDBStepperStep headIcon={4} headText="step 4" itemId={4}>

            </MDBStepperStep>
            <MDBStepperStep headIcon={5} headText="step 5" itemId={5}>

            </MDBStepperStep>
            <MDBStepperStep headIcon={6} headText="step 6" itemId={6}>

            </MDBStepperStep>

          </MDBStepper>
        </div>
        <div className="question">
          {currentQuestion === 1 && <QuestionOne />}
          {currentQuestion === 2 && <QuestionTwo />}
          {currentQuestion === 3 && <QuestionTree />}
          {currentQuestion === 4 && <QuestionFour />}
          {currentQuestion === 5 && <QuestionFive />}
          {currentQuestion === 6 && <QuestionSix />}

          <div className="mb-3">
            <MDBBtn onClick={prevQuestion} ref={prevRef}>PREV</MDBBtn>
            {currentQuestion === 6 ? <MDBBtn type="button" onClick={console.log(data)}>envoyer</MDBBtn> : <MDBBtn onClick={nextQuestion} ref={nextRef}>NEXT</MDBBtn>}
          </div>
        </div>
      </div>
    </div >

  );
}

export default Stepper;
