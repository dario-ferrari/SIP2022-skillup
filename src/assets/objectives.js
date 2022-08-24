export default [
  {
    name: "Java Tester",
    levelPts: 1,
    level: "Básico 1",
    require: [
      {
        name: "Java",
        min: 10,
        max: 100,
      },
      {
        name: "JUnit",
        min: 0,
        max: 13.5,
      },
      {
        name: "Mockito",
        min: 0,
        max: 13.5,
      },
      {
        name: "TDD",
        min: 0,
        max: 100,
      },
    ],
    skills: [
      {
        name: "JUnit",
        expected: 13.5,
      },
      {
        name: "Mockito",
        expected: 13.5,
      },
      {
        name: "TDD",
        expected: 13.5,
      },
    ],
  },
  {
    name: "Java Tester",
    levelPts: 2,
    level: "Básico 2",
    require: [
      {
        name: "Java",
        min: 10,
        max: 100,
      },
      {
        name: "JUnit",
        min: 13.5,
        max: 37.5,
      },
      {
        name: "Mockito",
        min: 13.5,
        max: 37.5,
      },
      {
        name: "TDD",
        min: 13.5,
        max: 37.5,
      },
    ],
    skills: [
      {
        name: "JUnit",
        expected: 37.5,
      },
      {
        name: "Mockito",
        expected: 37.5,
      },
      {
        name: "TDD",
        expected: 37.5,
      },
    ],
  },
];
