import React from 'react'

function QuestionTreeB() {
  return (
    <div>
      <div>
        <button type='button' onClick={() => setData({ ...data, irrit: !data.irrit })}>Irritation</button>
      </div>
      <div>
        <button type='button' onClick={() => setData({ ...data, seche: !data.seche })}>Sèche</button>
      </div>
      <div>
        <button type='button' onClick={() => setData({ ...data, decolor: !data.decolor })}>Décoloré</button>
      </div>
      <div>
        <button type='button' onClick={() => setData({ ...data, pele: !data.pele })}>Pèle</button>
      </div>
      <div>
        <button type='button' onClick={() => setData({ ...data, desquema: !data.desquema })}>Desquamer</button>
      </div>
    </div>
  )
}

export default QuestionTreeB
