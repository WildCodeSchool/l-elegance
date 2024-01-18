import React from 'react'
import { useQuestionContext } from '../../context/QuestionContext'
import QuestionTreeA from './QuestionTreeA';
import QuestionTreeB from './QuestionTreeB';
import QuestionTreeC from './QuestionTreeC';

function QuestionTree() {
  const { data } = useQuestionContext();
  return (
    <>
      <div>
        <h4 className='answer-title'>Avez-vous actuellement des problèmes cutanés liés à votre traitement contre le cancer ? </h4>
      </div>
      <div>
        {data.chimio === true && <QuestionTreeA />}
        {data.radio === true && <QuestionTreeB />}
        {data.immuno === true && <QuestionTreeC />}
      </div>
    </>
  )
}

export default QuestionTree
