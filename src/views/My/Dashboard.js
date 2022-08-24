import React, { useEffect, useState } from "react";
import StackBar from "../../components/dashboard/StackBar";
import sprintsDataRAW from "../../assets/sprintsData";
import tasksByLevelXSprintMapper from "../../utils/mappers/tasksByLevelXSprintMapper";
import skillsAmountTotal from "../../utils/mappers/skillsAmountTotal";
import PieChart from "../../components/dashboard/PieChart";
import GroupBar from "../../components/dashboard/GroupBar";
import groupSkillsMapper from "../../utils/mappers/groupSkillsMapper";
import ButtonForm from "../../components/ButtonForm";
import { useDispatch, useSelector } from "react-redux";
import InputForm from "../../components/InputForm";
import skills from "../../assets/skills";
import { loadUserData } from "../../store/user/usersSlice";

const Dashboard = () => {
  const dispatch = useDispatch();
  let user = useSelector((state) => state.user);

  const [showModal, setShowModal] = useState(false);
  const handleCloseModal = () => setShowModal(false);
  const handleSimulate = (skillsToSimulate) => {
    let dataToDispatch = {
      ...user,
      tasks: user.tasks.map((sprint) => {
        if (sprint.name === skillsToSimulate.sprint) {
          return {
            ...sprint,
            tasks: sprint.tasks.concat({
              name: "Random Task",
              skills: skillsToSimulate.skills,
            }),
          };
        } else {
          return sprint;
        }
      }),
    };

    dispatch(loadUserData(dataToDispatch));
  };

  const [sprintFrom, setSprintFrom] = useState({
    value: undefined,
    name: undefined,
  });
  const [sprintTo, setSprintTo] = useState({
    value: undefined,
    name: undefined,
  });
  const [sprintsData, setSprintsData] = useState([]);

  useEffect(() => {
    setSprintsData(user.tasks);
    setSprintFrom({ value: 0, name: user.tasks[0].name });
    setSprintTo({
      value: user.tasks.length - 1,
      name: user.tasks[user.tasks.length - 1].name,
    });
  }, [showModal]);

  return (
    <>
      {showModal && (
        <Modal
          onClose={handleCloseModal}
          skills={skills}
          sprints={user.tasks.map((t) => t.name)}
          onSimulate={handleSimulate}
        />
      )}
      <div className="h-full w-full text-zinc-700 overflow-hidden relative">
        <div className="float-left">
          <ButtonForm text={"Simular"} onClick={() => setShowModal(true)} />
        </div>
        <h1 className="text-6xl font-thin text-center pr-28">Dashboard</h1>
        <SprintSelector
          user={user}
          sprintFrom={sprintFrom}
          setSprintFrom={setSprintFrom}
          sprintTo={sprintTo}
          setSprintTo={setSprintTo}
          sprintsData={sprintsData}
          setSprintsData={setSprintsData}
        />
        <div className="h-4/5 mt-10 overflow-y-scroll">
          <div className="mt-10 flex flex-row justify-between">
            <div className="w-1/2">
              <StackBar
                categories={sprintsData.map((sprint) => sprint.name)}
                series={tasksByLevelXSprintMapper(sprintsData)}
              />
            </div>
            <div className="w-2/5">
              <PieChart
                categories={Object.keys(skillsAmountTotal(sprintsData))}
                series={Object.values(skillsAmountTotal(sprintsData))}
              />
            </div>
          </div>
          <GroupBar
            series={groupSkillsMapper(sprintsData).levels}
            categories={groupSkillsMapper(sprintsData).skills}
          />
        </div>
      </div>
    </>
  );
};

const SprintSelector = ({
  user,
  sprintFrom,
  setSprintFrom,
  sprintTo,
  setSprintTo,
  setSprintsData,
}) => {
  return (
    <>
      <div className="mt-5 flex flex-row justify-center">
        <div className="w-1/3 flex flex-row justify-between">
          <div>
            <span className="text-xl font-bold pr-5">FROM</span>
            <select
              className="py-2 px-4 border-2 border-secondary rounded-lg"
              onChange={(e) => {
                const valueSelected = parseInt(e.target.value);
                if (valueSelected <= sprintTo.value) {
                  setSprintFrom({
                    value: valueSelected,
                    name: user.tasks[valueSelected].name,
                  });

                  setSprintsData(
                    user.tasks.slice(valueSelected, sprintTo.value + 1)
                  );
                }
              }}
              value={sprintFrom.value}
            >
              {user.tasks.map((sprint, idx) => (
                <option
                  className="appearance-none hover:bg-red-600 focus:bg-red-600"
                  value={idx}
                  selected={idx === sprintFrom.value}
                >
                  {sprint.name}
                </option>
              ))}
            </select>
          </div>

          <div>
            <span className="text-xl font-bold pr-5">TO</span>
            <select
              className="py-2 px-4 border-2 border-secondary rounded-lg"
              onChange={(e) => {
                const valueSelected = parseInt(e.target.value);
                if (valueSelected >= sprintFrom.value) {
                  setSprintTo({
                    value: valueSelected,
                    name: user.tasks[valueSelected].name,
                  });

                  setSprintsData(
                    user.tasks.slice(sprintFrom.value, valueSelected + 1)
                  );
                }
              }}
              value={sprintTo.value}
            >
              {user.tasks.map((sprint, idx) => (
                <option value={idx} selected={idx === sprintTo.value}>
                  {sprint.name}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </>
  );
};

const Modal = ({ onClose, skills, sprints, onSimulate }) => {
  const [skillSelected, setSkillSelected] = useState(undefined);
  const [levelSelected, setLevelSelected] = useState(undefined);
  const [sprintSelected, setSprintSelected] = useState(undefined);

  const [skillsToSimulate, setSkillsToSimulate] = useState([]);

  const levels = [
    {
      name: "Básico",
      points: 1,
    },
    {
      name: "Intermedio",
      points: 2,
    },
    {
      name: "Avanzado",
      points: 4,
    },
  ];

  const handleAddTask = () => {
    setSkillsToSimulate((prev) =>
      prev.concat({ name: skillSelected.name, level: levelSelected.name })
    );
  };

  const handleSimulate = () => {
    onSimulate({ sprint: sprintSelected, skills: skillsToSimulate });
    onClose();
  };

  return (
    <div className="absolute left-1/2 top-96 w-96 bg-white border-4 border-primary z-10">
      <div className="p-4">
        <div className="w-2/3 flex items-center justify-between mb-2 m-auto">
          <span className="text-lg font-bold pr-5">Sprint</span>
          <select
            className="px-4 border-2 border-secondary rounded-lg"
            onChange={(e) => {
              setSprintSelected(e.target.value);
            }}
          >
            <option disabled selected>
              Seleccionar
            </option>
            {sprints.map((s, idx) => (
              <option
                className="appearance-none hover:bg-red-600 focus:bg-red-600"
                value={s}
                selected={s === sprintSelected}
              >
                {s}
              </option>
            ))}
          </select>
        </div>

        <div className="p-4 border-2 border-primary rounded-xl">
          <div className="w-full flex items-center justify-between mb-2">
            <span className="text-md font-bold pr-5">Skill</span>
            <select
              className="px-4 border-2 border-secondary rounded-lg"
              onChange={(e) => {
                setSkillSelected(skills.find((s) => s.name === e.target.value));
              }}
            >
              <option disabled selected>
                Seleccionar
              </option>
              {skills.map((s, idx) => (
                <option
                  className="appearance-none hover:bg-red-600 focus:bg-red-600"
                  value={s.name}
                  selected={skillSelected && s.name === skillSelected.name}
                >
                  {s.name}
                </option>
              ))}
            </select>
          </div>
          <div className="w-full flex items-center justify-between mb-2">
            <span className="text-md font-bold pr-5">Nivel</span>
            <select
              className="px-4 border-2 border-secondary rounded-lg"
              onChange={(e) => {
                setLevelSelected(levels[e.target.value]);
              }}
            >
              <option disabled selected>
                Seleccionar
              </option>
              {levels.map((l, idx) => (
                <option
                  className="appearance-none hover:bg-red-600 focus:bg-red-600"
                  value={idx}
                  selected={levels && l === levels.name}
                >
                  {l.name}
                </option>
              ))}
            </select>
          </div>
          <div className="w-full text-center">
            <ButtonForm
              text={"Agregar"}
              className={"h-8 text-lg pt-0"}
              onClick={() => handleAddTask()}
            />
          </div>
        </div>
      </div>
      <div className="w-full h-40 p-4 overflow-hidden overflow-y-scroll">
        {skillsToSimulate.map((ss) => (
          <SkillItem
            key={`${ss.name}${ss.level}`}
            ss={ss}
            onClick={() => {
              skillsToSimulate.filter((s) => {
                return s.name !== ss.name && s.level !== ss.level;
              });
              setSkillsToSimulate((prev) =>
                prev.filter((s) => s.name !== ss.name || s.level !== ss.level)
              );
            }}
          />
        ))}
      </div>
      <div className="h-1/3 p-4 flex justify-around">
        <ButtonForm
          text={"Cerrar"}
          className={"h-8 text-lg pt-0"}
          onClick={() => onClose()}
        />
        <ButtonForm
          text={"Simular"}
          className={"h-8 text-lg pt-0"}
          onClick={() => handleSimulate()}
        />
      </div>
    </div>
  );
};

const SkillItem = ({ ss, onClick }) => {
  return (
    <div
      className={
        "bg-primary w-full px-2 border-2 border-primary rounded-xl  mb-2 flex justify-around"
      }
      onClick={() => onClick()}
    >
      <span className="text-md">{`${ss.name}`}</span>
      <span className="text-md">{`${ss.level}`}</span>
    </div>
  );
};

export default Dashboard;
