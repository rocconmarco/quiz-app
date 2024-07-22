import React from 'react'

const SummaryCard = ({userAnswers, correctAnswers}) => {
    let rightAnswersCounter = 0;
    for (let i = 0; i < correctAnswers.length; i++) {
        if(userAnswers[i] === correctAnswers[i]) {
            rightAnswersCounter++
        }
    }

  return (
    <div className="h-auto w-[28rem] bg-gradient-to-br from-primary to-secondary p-6 text-white flex flex-col gap-4 rounded-2xl items-start justify-center">
      <p>Complimenti, hai risposto correttamente a {rightAnswersCounter} domande su 10!</p>
    </div>
  )
}

export default SummaryCard
