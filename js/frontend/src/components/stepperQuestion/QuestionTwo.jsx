import React from 'react'
import { useQuestionContext } from '../../context/QuestionContext';

function QuestionTwo() {
  const { data, setData } = useQuestionContext();

  return (
    <div>
      Quels traitements contre le cancer suivez-vous actuellement ou avez-vous suivi récemment ?

      <div>
        <button type='button' onClick={() => setData({ ...data, chimio: !data.chimio })}>Chimiothérapie</button>
      </div>
      <div>
        <button type='button' onClick={() => setData({ ...data, radio: !data.radio })}>Radiothérapie</button>
      </div >
      <div>
        <button type='button' onClick={() => setData({ ...data, immuno: !data.immuno })}>Immunothérapie</button>
      </div >
    </div >
  )
}

export default QuestionTwo
