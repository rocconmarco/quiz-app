import React from 'react'

const Question = ({questionNumber, questionText}) => {
  return (
    <p className="font-bold text-lg">{questionNumber}. {questionText}</p>
  )
}

export default Question
