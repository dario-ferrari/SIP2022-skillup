import React from "react";
import "./Objectives.css"

const Recommended = () => {
    
  const userData = [
    {
      project: "Backend billing process",
      leader: "Maria Aguirre",
      team: ["Diego Perez", "Ariel Shuatz", "Paula Rodriguez"],
    },
    {
      project: "Taxes engine",
      leader: "Gerardo Hurtado",
      team: ["Elena Martinez", "Julian Bach", "Pedro Alanz"],
    },
  ];

  const dataTitle = "text-3xl font-semibold text-secondary mt-3";

  return (
    <div className="h-full w-full text-zinc-700 overflow-hidden relative">
      <h1 className="text-5xl font-thin text-center">Objetivos Recomendados</h1>

      <div className="w-full flex justify-start items-center">
        <img
          src="https://cdn-icons-png.flaticon.com/512/456/456212.png"
          className="w-24 h-24 bg-zinc-300 border-2 border-zinc-400 rounded-full mr-5"
        ></img>
        <h3 className="text-4xl">Pepito Lopez</h3>
      </div>

      <div className="objectivesContainer">
        
      <div className="">
        <div className="">Como tienes conocimiento de PHP te recomendamos: </div>
        <div className="nameTarea">BootsTrap + CSS 3.0</div>
        <div className="barProgressRec">
          <div className="degradadoBlue flex justify-center">30 personas estan realizando este curso</div>
        </div>
        <div className="inscribirse"><button type='submit' className='buttonSave'>Inscribirse</button></div>
      </div>
      </div>

      <div className="objectivesContainer">
      <div className="">
        <div className="">Varios de tus amigos estan cursando: </div>
        <div className="nameTarea">React + Mysql</div>
        <div className="barProgressRec">
          <div className="degradadoBlue flex justify-center">18 personas estan realizando este curso</div>
        </div>
        <div className="inscribirse"><button type='submit' className='buttonSave'>Inscribirse</button></div>
      </div>
    </div>
    
  </div>
  );
};

export default Recommended;
