import React, { useEffect, useRef, useState } from "react";
import ReactApexChart from "react-apexcharts";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { loadUserData } from "../../store/user/usersSlice";
import ButtonForm from "../../components/ButtonForm";
import ReactModal from "react-modal";
import levels from "../../assets/levels";

const Progress = () => {
  const dispatch = useDispatch();
  let user = useSelector((state) => state.user);

  const [showModal, setShowModal] = useState(false);
  const [progressData, setProgressData] = useState({
    series: [
      {
        name: "Actual",
        data: user.progress.map((p) => {
          const o = user.objectives.find((o) => o.name === p.name);
          return {
            x: p.name,
            y: p.current,
            goals: o
              ? [
                  {
                    name: "Expected",
                    value: o.expected,
                    strokeWidth: 5,
                    strokeColor: "#775DD0",
                  },
                ]
              : [],
          };
        }),
      },
    ],
    options: {
      annotations: {
        xaxis: [
          {
            x: 12.5,
            borderColor: "#775DD0",
            label: {
              text: "Básico 1",
              style: {
                background: "#fff",
                color: "#000",
                fontSize: "18px",
                fontWeight: 300,
                fontFamily: undefined,
              },
            },
          },
          {
            x: 37.5,
            borderColor: "#775DD0",
            label: {
              text: "Básico 2",
              style: {
                background: "#fff",
                color: "#000",
                fontSize: "18px",
                fontWeight: 300,
                fontFamily: undefined,
              },
            },
          },
          {
            x: 62.5,
            borderColor: "#775DD0",
            label: {
              text: "Intermedio 1",
              style: {
                background: "#fff",
                color: "#000",
                fontSize: "18px",
                fontWeight: 300,
                fontFamily: undefined,
              },
            },
          },
          {
            x: 87.5,
            borderColor: "#775DD0",
            label: {
              text: "Intermedio 2",
              style: {
                background: "#fff",
                color: "#000",
                fontSize: "18px",
                fontWeight: 300,
                fontFamily: undefined,
              },
            },
          },
        ],
      },
      xaxis: {
        max: 100,
      },
      yaxis: {
        labels: {
          style: {
            colors: [],
            fontSize: "16px",
            fontFamily: "Helvetica, Arial, sans-serif",
            fontWeight: 300,
          },
        },
      },
      chart: {
        height: 350,
        type: "bar",
      },
      plotOptions: {
        bar: {
          horizontal: true,
        },
      },
      fill: {
        type: "gradient",
        gradient: {
          colorStops: [
            {
              offset: 0,
              color: "#FF8E8E",
              opacity: 1,
            },
            {
              offset: 100,
              color: "#FFD28E",
              opacity: 1,
            },
          ],
        },
      },
      colors: ["#00E396"],
      dataLabels: {
        formatter: function (val, opt) {
          return "";
        },
      },
    },
  });

  useEffect(() => {
    setProgressData({
      series: [
        {
          name: "Actual",
          data: user.progress.map((p) => {
            const o = user.objectives.find((o) => o.name === p.name);
            return {
              x: p.name,
              y: p.current,
              goals: o
                ? [
                    {
                      name: "Expected",
                      value: o.expected,
                      strokeWidth: 5,
                      strokeColor: "#775DD0",
                    },
                  ]
                : [],
            };
          }),
        },
      ],
      options: {
        annotations: {
          xaxis: levels.map((l) => ({
            x: l.points,
            borderColor: "#775DD0",
            label: {
              text: l.text,
              style: {
                background: "#fff",
                color: "#000",
                fontSize: "18px",
                fontWeight: 300,
                fontFamily: undefined,
              },
            },
          })),
        },
        xaxis: {
          max: 100,
        },
        yaxis: {
          labels: {
            style: {
              colors: [],
              fontSize: "16px",
              fontFamily: "Helvetica, Arial, sans-serif",
              fontWeight: 300,
            },
          },
        },
        chart: {
          height: 350,
          type: "bar",
        },
        plotOptions: {
          bar: {
            horizontal: true,
          },
        },
        fill: {
          type: "gradient",
          gradient: {
            colorStops: [
              {
                offset: 0,
                color: "#FF8E8E",
                opacity: 1,
              },
              {
                offset: 100,
                color: "#FFD28E",
                opacity: 1,
              },
            ],
          },
        },
        colors: ["#00E396"],
        dataLabels: {
          formatter: function (val, opt) {
            return "";
          },
        },
      },
    });
  }, [showModal]);

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleSimulate = (simulation) => {
    dispatch(
      loadUserData({
        ...user,
        progress: user.progress.map((p) => {
          if (p.name === simulation.name) {
            return { ...p, current: p.current + simulation.value };
          }
          return p;
        }),
      })
    );
  };

  return (
    <>
      {showModal && (
        <Modal
          onClose={handleCloseModal}
          progressData={user.progress}
          onSimulate={handleSimulate}
        />
      )}
      <div className="h-full w-full text-zinc-700 overflow-hidden relative">
        <h1 className="text-5xl font-thin text-center">Progreso</h1>
        <hr />

        <div className="containerProgress">
          {user.progress.length === 0 ? (
            <div className="w-full p-3 mt-6 text-center">
              <h3 className="text-xl font-bold text-center">
                No tienes skills cargadas!
              </h3>
              <p>Carga objetivos para empezar a ver tu progreso.</p>
            </div>
          ) : (
            <>
              <div className="pt-5 px-20 flex justify-between">
                <span>Básico</span>
                <span>Intermedio</span>
                <span>Avanzado</span>
              </div>
              <ReactApexChart
                options={progressData.options}
                series={progressData.series}
                type="bar"
                height={350}
              />
              <div>
                <ButtonForm
                  text={"Simular Tarea"}
                  className={"bg-secondary"}
                  onClick={() => setShowModal(true)}
                />
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

const Modal = ({ onClose, progressData, onSimulate }) => {
  const [skillSelected, setSkillSelected] = useState(undefined);
  const [levelSelected, setLevelSelected] = useState(undefined);

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

  const handleSimulate = () => {
    console.log(skillSelected.name, levelSelected.points);
    onSimulate({
      name: skillSelected.name,
      value: levelSelected.points,
    });
    onClose();
  };

  return (
    <div className="absolute left-1/2 top-60 w-96 h-40 bg-white border-4 border-primary z-10">
      <div className="h-2/3 p-4">
        <div className="w-full flex items-center justify-between mb-2">
          <span className="text-xl font-bold pr-5">Skill</span>
          <select
            className="py-2 px-4 border-2 border-secondary rounded-lg"
            onChange={(e) => {
              setSkillSelected(progressData[e.target.value]);
            }}
          >
            <option disabled selected>
              Seleccionar
            </option>
            {progressData.map((p, idx) => (
              <option
                className="appearance-none hover:bg-red-600 focus:bg-red-600"
                value={idx}
                selected={progressData && p === progressData.name}
              >
                {p.name}
              </option>
            ))}
          </select>
        </div>
        <div className="w-full flex items-center justify-between mb-2">
          <span className="text-xl font-bold pr-5">Nivel</span>
          <select
            className="py-2 px-4 border-2 border-secondary rounded-lg"
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

export default Progress;
