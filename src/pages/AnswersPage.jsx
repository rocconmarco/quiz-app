import React from "react";
import useStore from "../store/store.ts";
import UserAnswers from "../components/UserAnswers.jsx";
import InfoButton from "../components/InfoButton.jsx";

const AnswersPage = () => {
  const userAnswers = useStore((state) => state.userAnswers);
  const correctAnswers = useStore((state) => state.correctAnswers);
  return (
    <div className="h-auto w-screen bg-slate-100 flex flex-col items-center justify-center p-6">
        <InfoButton />
      <UserAnswers userAnswers={userAnswers} correctAnswers={correctAnswers}/>
    </div>
  );
};

export default AnswersPage;
