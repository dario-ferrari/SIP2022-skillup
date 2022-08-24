export default (sprintsData) => {
  let skillMap = {};
  sprintsData.forEach((sprint) => {
    sprint.tasks.forEach((task) => {
      task.skills.forEach((skill) => {
        if (!skillMap[skill.name]) skillMap[skill.name] = 1;
        else skillMap[skill.name] += 1;
      });
    });
  });
  return skillMap;
};
