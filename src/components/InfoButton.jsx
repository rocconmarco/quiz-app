import React from "react";
import { LuInfo } from "react-icons/lu";
import { useNavigate } from "react-router-dom";

const InfoButton = () => {
    const navigate = useNavigate()

  return (
    <div onClick={() => navigate("/info")} className="absolute top-5 right-5 cursor-pointer">
      <LuInfo fontSize={25} />
    </div>
  );
};

export default InfoButton;
