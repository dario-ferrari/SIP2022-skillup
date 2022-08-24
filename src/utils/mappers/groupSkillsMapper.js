export default (sprintsData) => {
  let finalData = {
    skills: [],
    levels: [
      { name: "Básico", data: [] },
      { name: "Intermedio", data: [] },
      { name: "Avanzado", data: [] },
    ],
  };

  let skillData = {};

  sprintsData.forEach((sprint) => {
    sprint.tasks.forEach((task) => {
      task.skills.forEach((skill) => {
        if (!skillData[skill.name]) skillData[skill.name] = [0, 0, 0];

        if (skill.level === "Básico") {
          skillData[skill.name][0] += 1;
        } else if (skill.level === "Intermedio") {
          skillData[skill.name][1] += 1;
        } else {
          skillData[skill.name][2] += 1;
        }
      });
    });
  });

  Object.values(skillData).forEach((arr) => {
    finalData["levels"][0].data.push(arr[0]);
    finalData["levels"][1].data.push(arr[1]);
    finalData["levels"][2].data.push(arr[2]);
  });

  Object.keys(skillData).forEach((key) => {
    finalData["skills"].push(key);
  });

  return finalData;
};
