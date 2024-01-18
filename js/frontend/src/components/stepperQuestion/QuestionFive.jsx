import React from 'react'

function QuestionFive() {
  return (
    <div>
      Avez-vous des allergies connues à des ingrédients spécifiques dans les produits de soins de la peau ?

      <div>
        <button type='button' onClick={() => setData({ ...data, allergie: true })}>oui</button>
      </div>
      <div>
        <button type='button' onClick={() => setData({ ...data, allergie: false })}>non</button>
      </div>
    </div>
  )
}

export default QuestionFive
