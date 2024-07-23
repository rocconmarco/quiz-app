import React from "react";
import { useNavigate } from "react-router-dom";
import trophiesList from "../trophies/trophies.ts";

const SummaryCard = ({ userAnswers, correctAnswers }) => {
  const navigate = useNavigate();
  const trophies = trophiesList;
  let rightAnswersCounter = 0;
  for (let i = 0; i < correctAnswers.length; i++) {
    if (userAnswers[i] === correctAnswers[i]) {
      rightAnswersCounter++;
    }
  }

  const getTrophyTitle = () => {
    const trophy = trophies.find((t) =>
      Array.isArray(t.range)
        ? t.range.includes(rightAnswersCounter)
        : t.range === rightAnswersCounter
    );
    return trophy ? `${trophy.title}` : "";
  };

  const getTrophyImage = () => {
    const trophyImage = trophies.find((i) =>
      Array.isArray(i.range)
        ? i.range.includes(rightAnswersCounter)
        : i.range === rightAnswersCounter
    );
    return trophyImage ? `${trophyImage.image}` : "Image not found";
  };

  return (
    <div className="h-auto w-[24rem] md:w-[28rem] bg-gradient-to-br from-primary to-secondary p-6 text-white flex flex-col rounded-2xl items-center justify-center">
      <div className="flex flex-col items-center justify-center h-14 -translate-y-14">
        <img src={getTrophyImage()} className="h-48 "></img>
      </div>
      <p className="text-[50px] md:text-[60px] font-bold">
          {getTrophyTitle()}
        </p>
      <p>Hai risposto correttamente a</p>
      <p className="font-bold text-[50px]">{rightAnswersCounter}</p>
      <p>domande su 10.</p>
      <div className="flex items-center justify-evenly gap-4 mt-4">
        <button className="flex-1 h-14 w-44 rounded-3xl bg-gradient-to-br from-secondaryLight to-primaryLight text-white text-lg font-bold active:shadow-inner">
          Risposte
        </button>
        <button
          onClick={() => navigate("/quiz")}
          className="flex-1 h-14 w-44 rounded-3xl bg-gradient-to-br from-secondaryLight to-primaryLight text-white text-lg font-bold active:shadow-inner"
        >
          Nuovo quiz
        </button>
      </div>
    </div>
  );
};

export default SummaryCard;
