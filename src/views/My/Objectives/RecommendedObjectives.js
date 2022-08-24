import InputForm from "../../../components/InputForm";
import ButtonForm from "../../../components/ButtonForm";
import objectivesRecommended from "../../../assets/objectives";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import { loadUserData } from "../../../store/user/usersSlice";

export const RecommendedObjectives = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  const [objectivePackSelected, setObjectivePackSelected] = useState(undefined);
  const [objectivesPack, setObjectivesPack] = useState([]);

  useEffect(() => {
    setObjectivesPack(
      objectivesRecommended.filter((or) => {
        const validObj = or.require.reduce((pre, cur) => {
          const skillUser = user.progress.find((p) => p.name === cur.name);
          const skillUserProgress = skillUser ? skillUser.current : 0;
          const curCheck =
            skillUserProgress >= cur.min && skillUserProgress < cur.max;

          console.log(cur.name, skillUserProgress, cur.min, cur.max, curCheck);
          return pre && curCheck;
        }, true);
        console.log(validObj);
        return validObj;
      })
    );
  }, []);

  const loadObjective = () => {
    if (objectivePackSelected) {
      let dataToDispatch = { ...user };
      objectivePackSelected.skills.forEach((op) => {
        const hasObj = user.objectives.find((o) => o.name === op.name);
        const hasProg = user.progress.find((o) => o.name === op.name);

        if (!hasObj) {
          dataToDispatch = {
            ...dataToDispatch,
            objectives: dataToDispatch.objectives.concat({
              name: op.name,
              expected: parseInt(op.expected),
            }),
          };
        } else {
          dataToDispatch = {
            ...dataToDispatch,
            objectives: dataToDispatch.objectives.map((o) =>
              o.name === op.name
                ? {
                    ...o,
                    expected:
                      o.expected > parseInt(op.expected)
                        ? o.expected
                        : parseInt(op.expected),
                  }
                : o
            ),
          };
        }

        if (!hasProg) {
          dataToDispatch = {
            ...dataToDispatch,
            progress: dataToDispatch.progress.concat({
              name: op.name,
              current: parseInt(0),
            }),
          };
        }
      });

      dispatch(loadUserData(dataToDispatch));
      Swal.fire("Objetivo cargado!", "", "success");
    } else {
      Swal.fire("Error al cargar objetivos!", "", "error");
    }
  };

  return (
    <div className="flex space-between">
      <div className="w-2/6 h-96 p-4 m-auto mt-16 border-2 border-primary rounded-lg">
        <div className="w-full font-bold text-lg text-center">
          Pack recomendados
        </div>
        <div className="w-full pr-4 rounded-xl flex justify-around font-bold mt-4 mb-2 ">
          <span className="text-md">Nombre</span>
          <span className="text-md">Nivel</span>
        </div>
        <div className="h-4/5 pr-4 overflow-hidden overflow-y-scroll">
          {objectivesPack.map((or) => (
            <div
              className={`${
                objectivePackSelected &&
                objectivePackSelected.name === or.name &&
                objectivePackSelected.level === or.level
                  ? "bg-secondary"
                  : "bg-primary"
              } w-full border-2 border-primary hover:border-secondary rounded-xl  mb-4 flex justify-around`}
              onClick={() => setObjectivePackSelected(or)}
            >
              <span className="text-lg">{`${or.name}`}</span>
              <span className="text-lg">{`${or.level}`}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="w-3/6 h-96  m-auto mt-16">
        <div className="w-full font-bold text-lg text-center">
          Detalles Pack
        </div>
        <div className="w-full rounded-xl flex justify-around font-bold mt-4 mb-2 ">
          <span className="text-md">Skill</span>
          <span className="text-md">Pts. Actuales</span>
          <span className="text-md">Pts. Objetivo</span>
        </div>
        <div className="h-3/5 pr-4 overflow-hidden overflow-y-scroll">
          {objectivePackSelected &&
            objectivePackSelected.skills.map((or) => {
              const currentProgress = user.progress.find(
                (p) => p.name === or.name
              );
              const currentScore = currentProgress
                ? currentProgress.current
                : 0;
              return (
                <div className={"flex justify-between"}>
                  <span className="bg-primary w-1/5 border-2 border-primary rounded-xl mb-4 text-lg text-center">{`${or.name}`}</span>
                  <span className="bg-primary w-1/5 border-2 border-primary rounded-xl mb-4 text-lg text-center">{`${currentScore}`}</span>
                  <span className="bg-primary w-1/5 border-2 border-primary rounded-xl mb-4 text-lg text-center">{`${or.expected}`}</span>
                </div>
              );
            })}
        </div>
        <div className="h-1/3 p-4 flex justify-around">
          <ButtonForm
            text="Cargar objetivos"
            className={"h-10 text-lg pt-0 text-white"}
            onClick={() => loadObjective()}
          />
        </div>
      </div>
    </div>
  );
};
