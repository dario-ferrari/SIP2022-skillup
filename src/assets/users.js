export default [
  {
    id: 0,
    email: "a",
    name: "Maximo",
    surname: "Suarez",
    position: "Trainee",
    admisionDate: "20/7/2022",
    projects: [
      {
        id: 0,
        name: "Backend billing process",
        leader: "Maria Aguirre",
        teammates: ["Diego Perez", "Ariel Shuatz", "Paula Rodriguez"],
      },
    ],
    progress: [
      { name: "Java", current: 15 },
      { name: "Grails", current: 5 },
      { name: "JUnit", current: 24 },
    ],
    objectives: [{ name: "Java", expected: 30 }],
    tasks: [
      {
        name: "Sprint 1",
        tasks: [
          {
            name: "Task1",
            skills: [
              {
                name: "React",
                level: "Avanzado",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 1,
    email: "b",
    name: "Paula",
    surname: "Rodriguez",
    position: "SSR. Developer",
    admisionDate: "12/3/2020",
    projects: [
      {
        id: 0,
        name: "Backend billing process",
        leader: "Maria Aguirre",
        teammates: ["Diego Perez", "Ariel Shuatz", "Maximo Suarez"],
      },
      {
        id: 1,
        name: "Taxes engine",
        leader: "Gerardo Hurtado",
        teammates: ["Elena Martinez", "Julian Bach", "Pedro Alanz"],
      },
    ],
    progress: [
      { name: "Java", current: 15 },
      { name: "Grails", current: 5 },
      { name: "JUnit", current: 24 },
      { name: "HTML", current: 49 },
      { name: "React", current: 65 },
      { name: "Maven", current: 0 },
      { name: "MongoDB", current: 20 },
    ],
    objectives: [
      { name: "Java", expected: 30 },
      { name: "Grails", expected: 5 },
      { name: "JUnit", expected: 26 },
      { name: "HTML", expected: 43 },
      { name: "React", expected: 65 },
      { name: "Maven", expected: 0 },
      { name: "MongoDB", expected: 20 },
    ],
    tasks: [
      {
        name: "Sprint 1",
        tasks: [
          {
            name: "Task1",
            skills: [
              {
                name: "React",
                level: "Avanzado",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 2,
    email: "c",
    name: "admin",
  },
];
