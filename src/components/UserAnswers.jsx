import React from "react";
import { FaCheck } from "react-icons/fa";
import { ImCross } from "react-icons/im";

const UserAnswers = ({ userAnswers, correctAnswers }) => {
  return (
    <div className="h-auto w-[24rem] md:w-[28rem] bg-gradient-to-br from-primary to-secondary p-6 text-white flex flex-col rounded-2xl items-start justify-center gap-3">
      {userAnswers.map((answer, index) => (
        <>
          <p>{index + 1}. Ababa</p>
          <div className="h-auto w-[100%] border-2 border-white rounded p-2 bg-green-200 text-black">
            {correctAnswers[index]}
          </div>
          <div
            key={index}
            className={`h-auto w-[100%] border-2 border-white ${
              userAnswers[index] === correctAnswers[index]
                ? `bg-green-300`
                : `bg-red-300`
            }  rounded p-2`}
          >
            <div className="flex flex-row items-center justify-start gap-2">
                {userAnswers[index] === correctAnswers[index]
                ? <div className="flex-2"><FaCheck /></div>
                : <div className="flex-2"><ImCross /></div>}
              <p className="text-black flex-1">{answer}</p>
            </div>
          </div>
        </>
      ))}
    </div>
  );
};

export default UserAnswers;
