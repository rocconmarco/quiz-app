import React, {useState} from "react";
import Question from "./Question";
import PossibleAnswer from "./PossibleAnswer";
import SummaryCard from "./SummaryCard";
import { useNavigate } from "react-router-dom";
import useStore from "../store/store.ts";


const QuestionCard = ({questions}) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState(null)
  const navigate = useNavigate()
  const addUserAnswer = useStore((state) => state.addUserAnswer)
  const userAnswers = useStore((state) => state.userAnswers)
  const correctAnswers = useStore((state) => state.correctAnswers)

  const currentQuestion = questions[currentQuestionIndex]

  const handleNextQuestion = () => {
    if (selectedAnswer !== null) {
      addUserAnswer(selectedAnswer)
      setSelectedAnswer(null)

      if(currentQuestionIndex < questions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1)
      } else {
        navigate("/summary")
      } 
    }
    else {
      console.log("Seleziona una risposta prima di continuare.")
    }

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
