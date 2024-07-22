import React, { useState, useEffect } from "react";
import QuestionCard from "../components/QuestionCard";
import questionsList from "../questions/questions.ts";
import logo from "../logo.png";

interface Question {
  readonly id: number;
  readonly question: string;
  readonly possibleAnswers: [string, string, string, string];
  readonly correctAnswer: string;
}

const QuizPage = () => {
  const [randomQuestions, setRandomQuestions] = useState([] as Question[]);
  const [isLoading, setIsLoading] = useState(true);

  const generateRandomQuestions = (quantity: 10): Question[] => {
    const shuffled = [...questionsList].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, quantity);
  };

  useEffect(() => {
    const questions = generateRandomQuestions(10);
    setRandomQuestions(questions);
    setIsLoading(false)
  }, []);

  if (isLoading) {
    return (
      <div className="h-screen w-screen bg-slate-100 flex flex-col items-center justify-center">
        <img
        src={logo}
        className="h-32 sm:h-40 animate-ruotaLentamente -mt-12 mb-8"
      />
      </div>
    )
    
  }


  return (
    <div className="h-screen w-screen bg-slate-100 flex flex-col items-center justify-center">
      <QuestionCard questions={randomQuestions} />
    </div>
  );
};

export default QuizPage;
