import { useState } from "react";
import Question from "./Question";
import PossibleAnswer from "./PossibleAnswer";
import { useNavigate } from "react-router-dom";
import useStore from "../store/store.ts";

const QuestionCard = ({ questions }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const navigate = useNavigate();
  const addUserAnswer = useStore((state) => state.addUserAnswer);

  const currentQuestion = questions[currentQuestionIndex];

  const handleNextQuestion = () => {
    if (selectedAnswer !== null) {
      addUserAnswer(selectedAnswer);
      setSelectedAnswer(null);

      if (currentQuestionIndex < questions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
      } else {
        navigate("/summary");
      }
    }
  };

  const handleAnswerSelect = (answer) => {
    setSelectedAnswer(answer);
  };

  return (
    <div className="h-auto mx-4 md:mx-0 md:w-[28rem] bg-gradient-to-br from-primary to-secondary p-6 text-white flex flex-col gap-4 rounded-2xl items-start justify-center">
      <Question
        questionNumber={currentQuestionIndex + 1}
        questionText={currentQuestion.question}
      />
      {currentQuestion.possibleAnswers.map((answer, index) => (
        <PossibleAnswer
          key={index}
          answer={answer}
          isSelected={selectedAnswer === answer}
          onSelect={() => handleAnswerSelect(answer)}
        />
      ))}

      <button onClick={handleNextQuestion} className={!selectedAnswer ? "cursor-not-allowed text-gray-200 self-center font-bold" :  "self-center font-bold"} >
        {currentQuestionIndex < questions.length - 1
          ? "Prossima domanda"
          : "Termina il quiz"}
      </button>
    </div>
  );
};

export default QuestionCard;
