import React from 'react'
import { useQuestionContext } from '../../context/QuestionContext';

function QuestionFive() {
  const { data, setData } = useQuestionContext();

  return (
    <div>
      <h4 className='answer-title'>Avez-vous des allergies connues à des ingrédients spécifiques dans les produits de soins de la peau ?</h4>
      <div className='answer'>
        <div >
          <button type='button' className={`answer-btn ${data.allergie ? "active" : ''}`} onClick={() => setData({ ...data, allergie: true })}>Oui</button>
        </div>
        <div>
          <button type='button' className={`answer-btn ${data.allergie === false ? "active" : ''}`} onClick={() => setData({ ...data, allergie: false })}>Non</button>
        </div>
      </div>
    </div>
  )
}

export default QuestionFive
