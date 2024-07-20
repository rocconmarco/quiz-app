import React, {useState, useEffect} from "react";
import Question from "./Question";
import PossibleAnswer from "./PossibleAnswer";

const QuestionCard = () => {
  const [questionNumber, setQuestionNumber] = useState(1)

  const handleIncreaseCounter = () => {
    setQuestionNumber(questionNumber + 1)
  }

  //useEffect per creare un array casuale di 10 domande al caricamento

  return (
    <div className="h-auto w-[28rem] bg-gradient-to-br from-primary to-secondary p-6 text-white flex flex-col gap-4 rounded-2xl items-start justify-center">
      <Question questionNumber={questionNumber} />
      <PossibleAnswer answer={"2 tonnellate"} />
      <PossibleAnswer answer={"8 tonnellate"} />
      <PossibleAnswer answer={"14 tonnellate"} />
      <PossibleAnswer answer={"20 tonnellate"} />
      <button onClick={handleIncreaseCounter} className="self-center font-bold">Prossima domanda</button>
    </div>
  );
};

export default QuestionCard;
