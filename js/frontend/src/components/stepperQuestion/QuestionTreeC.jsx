import React from 'react'
import { useQuestionContext } from '../../context/QuestionContext'

function QuestionTreeC() {
  const { data, setData } = useQuestionContext();
  return (
    <div className="answer">
      <div>
        <button type='button' className={`answer-btn ${data.eczema ? "active" : ''}`} onClick={() => setData({ ...data, eczema: !data.eczema })}>Eczéma</button>
      </div>
      <div>
        <button type='button' className={`answer-btn ${data.psoriasis ? "active" : ''}`} onClick={() => setData({ ...data, psoriasis: !data.psoriasis })}>Psoriasis</button>
      </div>
      <div>
        <button type='button' className={`answer-btn ${data.herpes ? "active" : ''}`} onClick={() => setData({ ...data, herpes: !data.herpes })}>Herpès</button>
      </div>
    </div>
  )
}

export default QuestionTreeC
