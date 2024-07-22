import React from "react";
import SummaryCard from "../components/SummaryCard";
import useStore from "../store/store.ts";

const SummaryPage = () => {
  const userAnswers = useStore((state) => state.userAnswers);
  const correctAnswers = useStore((state) => state.correctAnswers);

  return (
    <div className="h-screen w-screen bg-slate-100 flex flex-col items-center justify-center">
      <SummaryCard userAnswers={userAnswers} correctAnswers={correctAnswers} />
    </div>
  );
};

export default SummaryPage;
