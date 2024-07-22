import React, {useState} from "react";
import Question from "./Question";
import PossibleAnswer from "./PossibleAnswer";

const QuestionCard = ({questions}) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState(null)

  const currentQuestion = questions[currentQuestionIndex]

  const handleNextQuestion = () => {
    setCurrentQuestionIndex(currentQuestionIndex + 1)
  }

  const handleAnswerSelect = (answer) => {
    setSelectedAnswer(answer)
  }

  return (
    <div className="h-auto w-[28rem] bg-gradient-to-br from-primary to-secondary p-6 text-white flex flex-col gap-4 rounded-2xl items-start justify-center">
      <Question questionNumber={currentQuestionIndex + 1} questionText={currentQuestion.question} />
      {currentQuestion.possibleAnswers.map((answer, index) => (
        <PossibleAnswer
          key={index}
          answer={answer}
          isSelected ={selectedAnswer === answer}
          onSelect={() => handleAnswerSelect(answer)}
        />
      ))}

      <button onClick={handleNextQuestion} className="self-center font-bold">{currentQuestionIndex < questions.length - 1 ? "Prossima domanda" : "Termina il quiz"}</button>
    </div>
  );
};

export default QuestionCard;
