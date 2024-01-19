import React from 'react'
import { useQuestionContext } from '../../context/QuestionContext'

function QuestionTreeA() {
  const { data, setData } = useQuestionContext();
  return (
    <div className='answer'>
      <div >
        <button type='button' className={`answer-btn ${data.demange ? "active" : ''}`} onClick={() => setData({ ...data, demange: !data.demange })}>Démangeaisons </button>
      </div>
      <div>
        <button type='button' className={`answer-btn ${data.rougeur ? "active" : ''}`} onClick={() => setData({ ...data, rougeur: !data.rougeur })}>Rougeurs</button>
      </div >
      <div>
        <button type='button' className={`answer-btn ${data.seche ? "active" : ''}`} onClick={() => setData({ ...data, seche: !data.seche })}>Peau sèche</button>
      </div >
      <div>
        <button type='button' className={`answer-btn ${data.cutanee ? "active" : ''}`} onClick={() => setData({ ...data, cutanee: !data.cutanee })}>Éruption cutanée</button>
      </div >
      <div>
        <button type='button' className={`answer-btn ${data.pigment ? "active" : ''}`} onClick={() => setData({ ...data, pigment: !data.pigment })}>Pigmentation</button>
      </div >
    </div >
  )
}

export default QuestionTreeA
