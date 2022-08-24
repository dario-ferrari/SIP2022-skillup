export default (sprintsData) => {
  let finalData = {
    skills: [],
    levels: [
      { name: "Básico", data: [] },
      { name: "Intermedio", data: [] },
      { name: "Avanzado", data: [] },
    ],
  };

  let series = [
    {
      name: "Básico",
      data: [],
    },
    {
      name: "Intermedio",
      data: [],
    },
    {
      name: "Avanzado",
      data: [],
    },
  ];

  sprintsData.forEach((sprint, idx) => {
    series[0].data[idx] = 0;
    series[1].data[idx] = 0;
    series[2].data[idx] = 0;

    sprint.tasks.forEach((task) => {
      task.skills.forEach((skill) => {
        if (skill.level === "Básico") {
          series[0].data[idx] += 1;
        } else if (skill.level === "Intermedio") {
          series[1].data[idx] += 1;
        } else {
          series[2].data[idx] += 1;
        }
      });
    });

    return series;
  });

  // sprintsData.forEach((sprint, sprintIdx) => {
  //   sprint.tasks.forEach((task) => {
  //     task.skills.forEach((skill) => {
  //       let skillIdx;
  //       if (skill.level === "Básico") {
  //         skillIdx = 0;
  //       } else if (skill.level === "Intermedio") {
  //         skillIdx = 1;
  //       } else {
  //         skillIdx = 2;
  //       }

  //       series[skillIdx].data[sprintIdx] =
  //         series[skillIdx].data[sprintIdx] ?? 0;
  //       series[skillIdx].data[sprintIdx] += 1;
  //     });
  //   });
  // });

  // console.log("series", series);
  return series;
};
