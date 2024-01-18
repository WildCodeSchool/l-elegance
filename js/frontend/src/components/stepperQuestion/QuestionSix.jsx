import React from 'react'
import { useQuestionContext } from '../../context/QuestionContext';

function QuestionSix() {
  const { data, setData } = useQuestionContext();

  return (
    <div>
      <h4 className='answer-title'>Éprouvez-vous une sensibilité aux odeurs ?</h4>
      <div className='answer'>
        <div>
          <button type='button' className={`answer-btn ${data.odora ? "active" : ''}`} onClick={() => setData({ ...data, odora: true })}>Oui</button>
        </div>
        <div>
          <button type='button' className={`answer-btn ${data.odora === false ? "active" : ''}`} onClick={() => setData({ ...data, odora: false })}>Non</button>
        </div>
      </div>
    </div>
  )
}

export default QuestionSix
