import React from 'react'
import { useQuestionContext } from '../../context/QuestionContext';

function QuestionTwo() {
  const { data, setData } = useQuestionContext();

  return (
    <div>
      <h4 className='answer-title'> Quels traitements contre le cancer suivez-vous actuellement ou avez-vous suivi récemment ?</h4>

      <div className="answer">
        <div>
          <button type='button' className={`answer-btn ${data.chimio ? "active" : ''}`} onClick={() => setData({ ...data, chimio: !data.chimio })}>Chimiothérapie</button>
        </div>
        <div>
          <button type='button' className={`answer-btn ${data.radio ? "active" : ''}`} onClick={() => setData({ ...data, radio: !data.radio })}>Radiothérapie</button>
        </div >
        <div>
          <button type='button' className={`answer-btn ${data.immuno ? "active" : ''}`} onClick={() => setData({ ...data, immuno: !data.immuno })}>Immunothérapie</button>
        </div >
      </div >
    </div>
  )
}

export default QuestionTwo
