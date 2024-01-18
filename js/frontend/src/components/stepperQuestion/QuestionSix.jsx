import React from 'react'

function QuestionSix() {
  return (
    <div>
      odora ?

      <div>
        <button type='button' onClick={() => setData({ ...data, odora: true })}>oui</button>
      </div>
      <div>
        <button type='button' onClick={() => setData({ ...data, odora: false })}>non</button>
      </div>
    </div>
  )
}

export default QuestionSix
