import React, { useEffect, useRef } from "react";
import * as d3 from "d3";
import { useSelector } from "react-redux";
import "./admin.css";
import InputForm from "../../components/InputForm";
import { Link } from "react-router-dom";
import ButtonForm from "../../components/ButtonForm";
import TextField from "@mui/material/TextField";

import Button from "@mui/material/Button";
import { color } from "d3";

const NewTech = () => {
  return (
    <div className="h-full w-full text-zinc-700 overflow-hidden relative">
      <h1 className="text-4xl 2xl:text-6xl font-thin text-center">
        Nueva skill
      </h1>
      <div>
        <p className="text-center text-2xl px-6 my-10">
          Technology
          <InputForm type="text" placeholder="Tech. name" />
        </p>
        <p className="text-center text-2xl px-6 my-10">
          Category
          <select className="py-2 px-4 border-2 border-secondary rounded-lg">
            <option value={10}>Programming language</option>
            <option value={20}>Testing</option>
            <option value={30}>Cloud architecture</option>
          </select>
        </p>
      </div>
      <div className="text-center text-2xl px-6 my-10">Dificulty</div>

      <box className="dificultad1 float-left">
        <strong class="center">Basic</strong>
        <h1 class="center">Las tareas básicas implican...</h1>
        <TextField
          id="standard-textarea"
          class="center"
          multiline
          variant="standard"
        />
      </box>

      <box className="dificultad2 float-right">
        <strong class="center">Intermedio</strong>
        <h1 class="center">Las tareas básicas implican...</h1>
        <TextField
          id="standard-textarea"
          class="center"
          multiline
          variant="standard"
        />
      </box>
      <box className="dificultad3 float-right">
        <strong class="center">Avanzado</strong>
        <h1 class="center">Las tareas básicas implican...</h1>
        <TextField
          id="standard-textarea"
          class="center"
          multiline
          variant="standard"
        />
      </box>

      <box className="continue margin-top-create">
        <p className="text-center text-2xl px-6 my-10">
          <Link to="/admin/techcreated">
            <ButtonForm text={"Create"} />
          </Link>
        </p>
      </box>
    </div>
  );
};

export default NewTech;
