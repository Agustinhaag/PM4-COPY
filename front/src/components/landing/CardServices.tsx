import React from "react";

interface CardServiceProps {
  icon: React.ReactNode; //para pasar un icono
  text: string;
}

const CardServices: React.FC<CardServiceProps> = ({ icon, text }) => {
  return (
    <div className="flex flex-col items-center text-center">
      <p className="sm:text-6xl text-5xl">{icon}</p>
      <p className="sm:text-sm text-xs">{text}</p>
    </div>
  );
};

export default CardServices;
