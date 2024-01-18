import React from 'react'
import { useQuestionContext } from '../../context/QuestionContext'

function QuestionOne() {
  const { data, setData } = useQuestionContext();
  return (
    <div>
      <h4> Avez-vous un Cancer de la peau?</h4>

      <div >
        <div>
          <button type='button' onClick={() => setData({ ...data, cancer: true })}>oui</button>
        </div>
        <div>
          <button type='button' onClick={() => setData({ ...data, cancer: false })}>non</button>
        </div>
      </div >
    </div>
  )
}

export default QuestionOne
