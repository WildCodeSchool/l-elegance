import React from 'react'
import { useQuestionContext } from '../../context/QuestionContext';

function QuestionFour() {
  const { data, setData } = useQuestionContext();

  return (
    <div>
      <h4 className='answer-title'>Êtes-vous atteint d'alopécie ?</h4>
      <div className="answer">
        <div>
          <button type='button' className={`answer-btn ${data.alopecie ? "active" : ''}`} onClick={() => setData({ ...data, alopecie: true })}>Oui</button>
        </div>
        <div>
          <button type='button' className={`answer-btn ${data.alopecie === false ? "active" : ''}`} onClick={() => setData({ ...data, alopecie: false })}>Non</button>
        </div>
      </div>
    </div>
  )
}

export default QuestionFour
