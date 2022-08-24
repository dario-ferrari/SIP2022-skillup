import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { createSkill } from "../../store/skills/skillSlice";
import ButtonForm from "../../components/ButtonForm";
import InputForm from "../../components/InputForm";
import Textarea from "../../components/Textarea";

const Profile = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [skillName, setSkillName] = useState(undefined);
  const [categorySelected, setCategorySelected] = useState(undefined);
  const [levelBasic, setLevelBasic] = useState(undefined);
  const [levelMiddle, setLevelMiddle] = useState(undefined);
  const [levelAdvance, setLevelAdvance] = useState(undefined);

  const loadSkill = () => {
    dispatch(
      createSkill({
        name: skillName,
        category: categorySelected,
        levels: [
          {
            id: 0,
            desc: levelBasic,
          },
          {
            id: 1,
            desc: levelMiddle,
          },
          {
            id: 2,
            desc: levelAdvance,
          },
        ],
      })
    );
  };

  const categories = [
    { name: "Backend", idx: 0 },
    { name: "Frontend", idx: 1 },
    { name: "Testing", idx: 2 },
    { name: "Analytics", idx: 3 },
  ];

  return (
    <div className="h-full w-full text-zinc-700 overflow-hidden relative">
      <h1 className="text-4xl 2xl:text-6xl font-thin text-center">
        Nueva Skill
      </h1>

      <div className="w-full h-3/5 pr-20 mt-10">
        <div className="w-2/5 m-auto mt-4 flex justify-between  items-center">
          <span className="text-xl font-bold pr-5">Nombre skill</span>
          <div className="w-2/5">
            <InputForm
              type="text"
              placeholder="Ej. Java / NodeJS / ..."
              className={"w-full"}
              onChange={(e) => setSkillName(e.target.value)}
            />
          </div>
        </div>
        <div className="w-2/5 m-auto mt-4 flex justify-between items-center">
          <span className="text-xl font-bold pr-5">Categoria</span>
          <div className="w-2/5">
            <select
              className="w-full py-2 px-4 border-2 border-secondary rounded-lg"
              onChange={(e) => {
                setCategorySelected(
                  categories.find((c) => c.idx === parseInt(e.target.value))
                );
              }}
            >
              <option disabled selected>
                Seleccionar
              </option>
              {categories.map((category, idx) => (
                <option
                  className="appearance-none hover:bg-red-600 focus:bg-red-600"
                  value={idx}
                  selected={categorySelected && idx === categorySelected.idx}
                >
                  {category.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="w-full h-full m-auto mt-4">
          <div className="text-xl font-bold pr-5 text-center mt-10">
            Descripcion niveles
          </div>
          <div className="w-full flex justify-between mt-8">
            <div className="w-1/3 mr-2 ml-2">
              <div className="text-xl font-bold pr-5 text-center">Básico</div>
              <div>
                <Textarea
                  className={"w-full h-60"}
                  onChange={(e) => setLevelBasic(e.target.value)}
                />
              </div>
            </div>
            <div className="w-1/3 mr-2 ml-2">
              <div className="text-xl font-bold pr-5 text-center">
                Intermedio
              </div>
              <div>
                <Textarea
                  className={"w-full h-60"}
                  onChange={(e) => setLevelMiddle(e.target.value)}
                />
              </div>
            </div>
            <div className="w-1/3 mr-2 ml-2">
              <div className="text-xl font-bold pr-5 text-center">Avanzado</div>
              <div>
                <Textarea
                  className={"w-full h-60"}
                  onChange={(e) => setLevelAdvance(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="w-full text-center">
          <ButtonForm onClick={() => loadSkill()} />
        </div>
      </div>
    </div>
  );
};

export default Profile;
