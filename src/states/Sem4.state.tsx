import { atom, selectorFamily } from "recoil";

export const sem4State = atom({
  key: "sem4State",
  default: {
    cse: [
      "Engineering Mathematics 4",
      "Analysis Of Algorithm",
      "Database System",
      "Operating System",
      "Microprocessor",
      "Python programming",
    ],
    mech: [
      "Engineering Mathematics-IV",
      "Fluid Mechanics",
      "Kinematics of Machinery",
      "CAD/CAM",
      "Industrial Electronics",
      "Python Programming",
    ],
    entc: [
      "M4",
      "Linear Regression Circuits",
      "Signals and System",
      "Principles of Communication Engineering",
      "Microcontroller",
      "Skill Lab: Python",
    ],
    civil: [
      "Engineering Mathematics-IV",
      "Structural Analysis",
      "Surveying",
      "Building Material & Concrete Technology",
      "Fluid Mechanics-II",
    ],
    default: [
      "Maths",
      "Science",
      "Computer Pheripherals",
      "Chemistry",
      "Physics",
    ],
  },
});

export const dynamicSem4State = selectorFamily({
  key: "dynamicSem4State",
  get:
    (sub) =>
    ({}) => {
      // const queryParams = new URLSearchParams(location.search);
      // const sub = queryParams.get('sub');
      switch (sub) {
        case "cse":
          return [
            {
              name: "Engineering Mathematics 4",
              totalC: 12,
              questionC: 11,
              notesC: 6,
              onlineRefC: 0,
            },
            {
              name: "Analysis Of Algorithm",
              totalC: 21,
              questionC: 11,
              notesC: 6,
              onlineRefC: 0,
            },
            {
              name: "Database System",
              totalC: 8,
              questionC: 7,
              notesC: 6,
              onlineRefC: 0,
            },
            {
              name: "Operating System",
              totalC: 0,
              questionC: 11,
              notesC: 6,
              onlineRefC: 0,
            },
            {
              name: "Microprocessor",
              totalC: 8,
              questionC: 11,
              notesC: 6,
              onlineRefC: 0,
            },
            {
              name: "Python programming",
              totalC: 9,
              questionC: 11,
              notesC: 6,
              onlineRefC: 0,
            },
          ];
          break;
        case "mech":
          return [
            {
              name: "Engineering Mathematics-IV",
              totalC: 0,
              questionC: 11,
              notesC: 6,
              onlineRefC: 0,
            },
            {
              name: "Fluid Mechanics",
              totalC: 0,
              questionC: 11,
              notesC: 6,
              onlineRefC: 0,
            },
            {
              name: "Kinematics of Machinery",
              totalC: 0,
              questionC: 11,
              notesC: 6,
              onlineRefC: 0,
            },
            {
              name: "CAD/CAM",
              totalC: 0,
              questionC: 11,
              notesC: 6,
              onlineRefC: 0,
            },
            {
              name: "Industrial Electronics",
              totalC: 0,
              questionC: 11,
              notesC: 6,
              onlineRefC: 0,
            },
            {
              name: "Python Programming",
              totalC: 0,
              questionC: 11,
              notesC: 6,
              onlineRefC: 0,
            },
          ];
          break;
        case "entc":
          return [
            { name: "M4", totalC: 0, questionC: 11, notesC: 6, onlineRefC: 0 },
            {
              name: "Linear Regression Circuits",
              totalC: 0,
              questionC: 11,
              notesC: 6,
              onlineRefC: 0,
            },
            {
              name: "Signals and System",
              totalC: 0,
              questionC: 11,
              notesC: 6,
              onlineRefC: 0,
            },
            {
              name: "Principles of Communication Engineering",
              totalC: 0,
              questionC: 11,
              notesC: 6,
              onlineRefC: 0,
            },
            {
              name: "Microcontroller",
              totalC: 0,
              questionC: 11,
              notesC: 6,
              onlineRefC: 0,
            },
            {
              name: "Skill Lab: Python",
              totalC: 0,
              questionC: 11,
              notesC: 6,
              onlineRefC: 0,
            },
          ];
          break;
        case "civil":
          return [
            {
              name: "Engineering Mathematics-IV",
              totalC: 0,
              questionC: 11,
              notesC: 6,
              onlineRefC: 0,
            },
            {
              name: "Structural Analysis",
              totalC: 0,
              questionC: 11,
              notesC: 6,
              onlineRefC: 0,
            },
            {
              name: "Surveying",
              totalC: 0,
              questionC: 11,
              notesC: 6,
              onlineRefC: 0,
            },
            {
              name: "Building Material & Concrete Technology",
              totalC: 0,
              questionC: 11,
              notesC: 6,
              onlineRefC: 0,
            },
            {
              name: "Fluid Mechanics-II",
              totalC: 0,
              questionC: 11,
              notesC: 6,
              onlineRefC: 0,
            },
          ];
          break;
        default:
          return [
            {
              name: "Maths",
              totalC: 0,
              questionC: 11,
              notesC: 6,
              onlineRefC: 0,
            },
            {
              name: "Science",
              totalC: 0,
              questionC: 11,
              notesC: 6,
              onlineRefC: 0,
            },
            {
              name: "Computer Pheripherals",
              totalC: 0,
              questionC: 11,
              notesC: 6,
              onlineRefC: 0,
            },
            {
              name: "Chemistry",
              totalC: 0,
              questionC: 11,
              notesC: 6,
              onlineRefC: 0,
            },
            {
              name: "Physics",
              totalC: 0,
              questionC: 11,
              notesC: 6,
              onlineRefC: 0,
            },
            { name: "", totalC: 0, questionC: 11, notesC: 6, onlineRefC: 0 },
          ];
          break;
      }
    },
});
