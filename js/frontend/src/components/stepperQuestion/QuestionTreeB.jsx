import React from 'react'
import { useQuestionContext } from '../../context/QuestionContext'

function QuestionTreeB() {
  const { data, setData } = useQuestionContext();
  return (
    <div className="answer">
      <div>
        <button type='button' className={`answer-btn ${data.irrit ? "active" : ''}`} onClick={() => setData({ ...data, irrit: !data.irrit })}>Irritations</button>
      </div>
      <div>
        <button type='button' className={`answer-btn ${data.seche ? "active" : ''}`} onClick={() => setData({ ...data, seche: !data.seche })}>Peau sèche</button>
      </div>
      <div>
        <button type='button' className={`answer-btn ${data.decolor ? "active" : ''}`} onClick={() => setData({ ...data, decolor: !data.decolor })}>Dépigmentation</button>
      </div>
      <div>
        <button type='button' className={`answer-btn ${data.pele ? "active" : ''}`} onClick={() => setData({ ...data, pele: !data.pele })}>Peau qui pèle</button>
      </div>
      <div>
        <button type='button' className={`answer-btn ${data.desquema ? "active" : ''}`} onClick={() => setData({ ...data, desquema: !data.desquema })}>Desquamer</button>
      </div>
    </div>
  )
}

export default QuestionTreeB
