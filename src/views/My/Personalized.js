import React from "react";
import "./Objectives.css";
import "./Calendario.css";
import "./ObjButton.css";
import "./Dificultades.css";

const Personalized = () => {
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
      <h1 className="text-5xl font-thin text-center">
        Objetivos Personalizados
      </h1>
      {/**<div className="personalObjectives">
            <div className="text-3xl font-thin">Objetivos Personalizados</div>**/}
      <div className="titleObjectives justify-between"></div>
      <div className="mt-5 flex flex-row justify-center">
        <div className="w-2/3 flex flex-row justify-between">
          <span className="mt-12 flex text-xl font-bold">SKILL:</span>
          <span className="w-1/3 mt-12 flex text-xl font-bold">DEADLINE:</span>
        </div>
      </div>
      <span className="mt-12 flex text-xl font-bold">DIFFICULTY:</span>
      <html lang="en">
        <head>
          <title>Calendario</title>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@500&display=swap"
            rel="stylesheet"
          />
          <link rel="stylesheet" href="Calendario.css" />
        </head>
        <body>
          <input type="date" />
        </body>
      </html>
      <div className="filtroSkills">
        <head>
          <title>Selector de Skills</title>
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap"
            rel="stylesheet"
          />
          <link rel="stylesheet" href="Objectives.css" />
        </head>
        <div>
          <select className="bg-blue-500 h-full w-full">
            <option selected class="selected">
              Choose the Skill
            </option>
            <option>Java</option>
            <option>Python</option>
            <option>JavaScript</option>
            <option>CSS</option>
            <option>MySQL</option>
            <option>React</option>
          </select>
        </div>
      </div>

      {/**
                    <html lang="en">
                        <div class="slider">
                        <input type="range" min="0" max="100" value="10" oninput="rangeValue.innerText = this.value" />
                        <p id="rangeValue">Basico</p>
                        <script src="Objectives.js"></script>
                        </div>
                    </html>
                    */}

      <div className="objButton">
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="ObjButton.css" />
        <div className="text overflow-hidden relative">CREATE</div>
      </div>

      <html>
        <head>
          <title>Cards</title>
          {/**<!--Google Font-->**/}
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap"
            rel="stylesheet"
          />
          {/**<!--Linking Stylesheet-->**/}
          <link rel="stylesheet" href="Dificultades.css" />
        </head>
        <div className="dificultades">
          <div class="tarjeta">
            <input type="radio" name="pricing" id="tarjeta" />
            <div className="etiqueta">
              <div className="h5">
                <h5>BASIC</h5>
              </div>
              <div className="h2">
                <span></span>I to III
                <span></span>
              </div>
            </div>
          </div>
          <div class="tarjeta">
            <input type="radio" name="pricing" id="tarjeta2" checked />
            <div className="etiqueta">
              <div className="h5">
                <h5>INTERMEDIO</h5>
              </div>
              <div className="h2">
                <span></span>I to III
                <span></span>
              </div>
            </div>
          </div>
          <div class="tarjeta">
            <input type="radio" name="pricing" id="tarjeta3" />
            <div className="etiqueta">
              <div className="h5">
                <h5>ADVANCED</h5>
              </div>
              <div className="h2">
                <span></span>I to III
                <span></span>
              </div>
            </div>
          </div>
        </div>
      </html>
      {/**</div>**/}
    </div>
  );
};

export default Personalized;
