import React from 'react'
import { useQuestionContext } from '../../context/QuestionContext'

function QuestionTreeA() {
  const { data, setData } = useQuestionContext();
  return (
    <div>
      <div>
        <button type='button' onClick={() => setData({ ...data, demange: !data.demange })}>Démangeaisons </button>
      </div>
      <div>
        <button type='button' onClick={() => setData({ ...data, rougeur: !data.rougeur })}>Rougeure</button>
      </div >
      <div>
        <button type='button' onClick={() => setData({ ...data, seche: !data.seche })}>Sèche</button>
      </div >
      <div>
        <button type='button' onClick={() => setData({ ...data, cutanee: !data.cutanee })}>Éruption cutanée</button>
      </div >
      <div>
        <button type='button' onClick={() => setData({ ...data, pigment: !data.pigment })}>Pigmentation</button>
      </div >
    </div >
  )
}

export default QuestionTreeA
