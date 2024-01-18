import React from 'react'
import { useQuestionContext } from '../../context/QuestionContext'

function QuestionTreeC() {
  const { data, setData } = useQuestionContext();
  return (
    <div>
      <div>
        <button type='button' onClick={() => setData({ ...data, eczema: !data.eczema })}>Eczéma</button>
      </div>
      <div>
        <button type='button' onClick={() => setData({ ...data, psoriasis: !data.psoriasis })}>Psoriasis</button>
      </div>
      <div>
        <button type='button' onClick={() => setData({ ...data, herpes: !data.herpes })}>Herpès</button>
      </div>
    </div>
  )
}

export default QuestionTreeC
