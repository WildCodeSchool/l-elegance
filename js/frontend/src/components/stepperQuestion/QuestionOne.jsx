import React from 'react'
import { useQuestionContext } from '../../context/QuestionContext'

function QuestionOne() {
  const { data, setData } = useQuestionContext();
  return (
    <div>
      <h4 className='answer-title'> Avez-vous un Cancer de la peau?</h4>

      <div className='answer'>
        <div>
          <button type='button' className={`answer-btn ${data.cancer ? "active" : ''}`} onClick={() => setData({ ...data, cancer: true })}>Oui</button>
        </div>
        <div>
          <button type='button' className={`answer-btn ${data.cancer === false ? "active" : ''}`} onClick={() => setData({ ...data, cancer: false })}>Non</button>
        </div>
      </div >
    </div>
  )
}

export default QuestionOne
