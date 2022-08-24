import React, { useState } from "react";
import { Link } from "react-router-dom";
import { PersonilizedObjectives } from "./PersonilizedObjectives";
import { RecommendedObjectives } from "./RecommendedObjectives";
import "../ObjView.css";
import iconObjectivePersonilized from "../../../assets/pictures/objetive-personilized.png";
import iconObjectiveRecommended from "../../../assets/pictures/objetive-recommended.png";

const Objectives = () => {
  const [view, setView] = useState(0);

  const getView = () => {
    switch (view) {
      case 1:
        return <PersonilizedObjectives />;
      case 2:
        return <RecommendedObjectives />;
    }
  };

  return (
    <div className="h-full w-full text-zinc-700 overflow-hidden relative">
      <h1 className="text-6xl font-thin text-center">
        Objetivos{" "}
        {(view === 1 && "Personalizados") || (view === 2 && "Recomendados")}
      </h1>
      {view ? (
        getView()
      ) : (
        <div className="w-full p-4 mt-16 flex items-center justify-around">
          <Card
            title={"Personalizados"}
            icon={iconObjectivePersonilized}
            text={"Setea tus propios objetivos a medida."}
            onClick={() => setView(1)}
          />
          <Card
            title={"Recomendados"}
            icon={iconObjectiveRecommended}
            text={"Objetivos calculados en base a tu perfil."}
            onClick={() => setView(2)}
          />
        </div>
      )}
    </div>
  );
};

const Card = ({ title, icon, text, onClick }) => {
  return (
    <div
      onClick={() => onClick()}
      className="w-1/3 p-8 h-80 hover:bg-primary border-4 border-primary hover:border-secondary rounded-xl "
    >
      <div className="text-center">
        <img className="w-40 h-40 m-auto" src={icon} />
        <h2 className="text-3xl text-center mt-4">{title}</h2>
      </div>
      <div className="text-center p-4">
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Objectives;
