import React from "react";
import { useNavigate } from "react-router-dom";

const SummaryCard = ({ userAnswers, correctAnswers }) => {
    const navigate = useNavigate()
  let rightAnswersCounter = 0;
  for (let i = 0; i < correctAnswers.length; i++) {
    if (userAnswers[i] === correctAnswers[i]) {
      rightAnswersCounter++;
    }
  }

  return (
    <div className="h-auto w-[28rem] bg-gradient-to-br from-primary to-secondary p-6 text-white flex flex-col rounded-2xl items-center justify-center">
      <p>Hai risposto correttamente a</p>
      <p className="font-bold text-[50px]">{rightAnswersCounter}</p>
      <p>domande su 10.</p>
      <div className="flex items-center justify-evenly gap-4 mt-4">
        <button className="flex-1 h-14 w-44 rounded-3xl bg-gradient-to-br from-secondaryLight to-primaryLight text-white text-lg font-bold active:shadow-inner">Risposte</button>
        <button onClick={() => navigate("/quiz")} className="flex-1 h-14 w-44 rounded-3xl bg-gradient-to-br from-secondaryLight to-primaryLight text-white text-lg font-bold active:shadow-inner">Nuovo quiz</button>
      </div>
    </div>
  );
};

export default SummaryCard;
