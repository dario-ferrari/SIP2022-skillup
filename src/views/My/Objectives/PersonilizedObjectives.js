import { useDeferredValue, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadUserData } from "../../../store/user/usersSlice";
import categories from "../../../assets/categories";
import skills from "../../../assets/skills";
import ButtonForm from "../../../components/ButtonForm";
import InputForm from "../../../components/InputForm";
import Swal from "sweetalert2";

export const PersonilizedObjectives = () => {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.user);

  const [categorySelected, setCategorySelected] = useState(undefined);
  const [skillSelected, setSkillSelected] = useState(undefined);
  const [currentObjective, setCurrentObjective] = useState(undefined);
  const [points, setPoints] = useState(0);

  const loadObjective = () => {
    if (!skillSelected) {
      Swal.fire("Error al crear objetivo!", "", "error");
    } else {
      const hasObj = user.objectives.find((o) => o.name === skillSelected.name);

      const hasProg = user.progress.find((o) => o.name === skillSelected.name);

      let dataToDispatch = { ...user };

      if (!hasObj) {
        dataToDispatch = {
          ...dataToDispatch,
          objectives: dataToDispatch.objectives.concat({
            name: skillSelected.name,
            expected: parseInt(points),
          }),
        };
      } else {
        dataToDispatch = {
          ...dataToDispatch,
          objectives: dataToDispatch.objectives.map((o) =>
            o.name === skillSelected.name
              ? { ...o, expected: parseInt(points) }
              : o
          ),
        };
      }

      if (!hasProg) {
        dataToDispatch = {
          ...dataToDispatch,
          progress: dataToDispatch.progress.concat({
            name: skillSelected.name,
            current: parseInt(0),
          }),
        };
      }

      dispatch(loadUserData(dataToDispatch));
      Swal.fire("Objetivo cargado!", "", "success");
    }
  };

  const handleSkillSelected = (skillName) => {
    setSkillSelected(skills.find((s) => s.name === skillName));

    setPoints(
      user.progress.find(
        (p) => p.name === skills.find((s) => s.name === skillName)
      )
        ? user.progress.find(
            (p) => p.name === skills.find((s) => s.name === skillName)
          ).current
        : 0
    );
  };

  return (
    <div className="flex space-between">
      <div className="w-3/6 h-96 p-4 m-auto mt-16 border-2 border-primary rounded-lg">
        <div className="w-full py-2 pr-4 rounded-xl flex justify-around font-bold mb-4 ">
          <span className="text-lg">Skill</span>
          <span className="text-lg">Current</span>
          <span className="text-lg">Expected</span>
        </div>
        <div className="h-4/5 pr-4 overflow-hidden overflow-y-scroll">
          {user.objectives.map((o) => {
            const progressData = user.progress.find((p) => p.name === o.name);
            return (
              <ObjectiveBar
                key={o.name}
                skill={o.name}
                current={progressData.current}
                expected={o.expected}
              />
            );
          })}
        </div>
      </div>
      <div className="w-1/3 h-72 m-auto mt-16 ">
        <div className="w-full flex items-center justify-between mb-2">
          <span className="text-xl font-bold pr-5">Categoria</span>
          <select
            className="py-2 px-4 border-2 border-secondary rounded-lg"
            onChange={(e) => {
              setCategorySelected(
                categories.find((c) => c.name === e.target.value)
              );
              setSkillSelected(undefined);
              setPoints(0);
            }}
          >
            <option disabled selected>
              Seleccionar
            </option>
            {categories.map((p, idx) => (
              <option
                className="appearance-none hover:bg-red-600 focus:bg-red-600"
                value={p.name}
                selected={categorySelected && p === categorySelected.name}
              >
                {p.name}
              </option>
            ))}
          </select>
        </div>
        <div className="w-full flex items-center justify-between mb-2">
          <span className="text-xl font-bold pr-5">Skill</span>
          <select
            className="py-2 px-4 border-2 border-secondary rounded-lg"
            onChange={(e) => handleSkillSelected(e.target.value)}
          >
            <option disabled selected>
              Seleccionar
            </option>
            {categorySelected &&
              skills
                .filter((s) => s.category === categorySelected.name)
                .map((s, idx) => (
                  <option
                    className="appearance-none hover:bg-red-600 focus:bg-red-600"
                    value={s.name}
                    selected={skillSelected && s === skillSelected.name}
                  >
                    {s.name}
                  </option>
                ))}
          </select>
        </div>
        <div className="w-full flex items-center justify-between mb-2">
          <span className="text-xl font-bold">Puntos actuales</span>
          <span className="text-xl pr-5">
            {skillSelected
              ? user.progress.find((p) => p.name === skillSelected.name)
                ? user.progress.find((p) => p.name === skillSelected.name)
                    .current
                : "~"
              : "~"}
          </span>
        </div>
        <div className="w-full flex items-center justify-between mb-2">
          <span className="text-xl font-bold">Objetivo actual</span>
          <span className="text-xl pr-5">
            {skillSelected
              ? user.objectives.find((o) => o.name === skillSelected.name)
                ? user.objectives.find((o) => o.name === skillSelected.name)
                    .expected
                : "~"
              : "~"}
          </span>
        </div>
        <div className="w-full flex items-center justify-between mb-2">
          <span className="text-xl font-bold pr-5">Puntos objetivo</span>
          <InputForm
            type="text"
            value={points}
            className={"w-1/5 border-secondary text-right pr-2"}
            onChange={(e) => setPoints(e.target.value)}
          />
        </div>
        <div className="h-1/3 p-4 flex justify-around">
          <ButtonForm
            text="Crear objetivo"
            className={"h-10 text-lg pt-0 text-white"}
            onClick={() => loadObjective()}
          />
        </div>
      </div>
    </div>
  );
};

const ObjectiveBar = ({ skill, current, expected }) => {
  let style;
  if (current >= expected) {
    style = `bg-green-400 w-full px-2 border-2 border-green-400 rounded-xl  mb-4 flex justify-around`;
  } else {
    style = `bg-primary w-full px-2 border-2 border-primary rounded-xl  mb-4 flex justify-around`;
  }
  return (
    <>
      <div className={style}>
        <span className="text-lg">{`${skill}`}</span>
        <span className="text-lg">{`${current}`}</span>
        <span>{`${expected}`}</span>
      </div>
    </>
  );
};
