import React from 'react'

function QuestionFour() {
  return (
    <div>
      Question par rapport d'alopécie ?

      <div>
        <button type='button' onClick={() => setData({ ...data, alopecie: true })}>oui</button>
      </div>
      <div>
        <button type='button' onClick={() => setData({ ...data, alopecie: true })}>non</button>
      </div>
    </div>
  )
}

export default QuestionFour
