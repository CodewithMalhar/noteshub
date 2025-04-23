import { atom, selectorFamily } from "recoil";

export const sem3State = atom({
  key: "sem3State",
  default:  {
    cse: [
      "Applied Mathematics 3",
      "Discrete structure and graph theory",
      "Data Structure",
      "Digital logic And Computer Architecture",
      "Computer Graphics",
      "OOP With Java",
    ],
    mech: [
      "Engineering Mathematics-III (Mechanical)",
      "Strength of Materials",
      "Production Processes",
      "Materials and Metallurgy",
      "Thermodynamics",
      "Cad Modeling",
      "Machine shop Practice",
    ],
    entc: [
      "Engineering Maths 3",
      "Electronic Devices Circuits",
      "Digital System Design",
      "Network Theory",
      "Electronic Instrumentation and Control System",
      "Skill Lab: Java & Cpp",
    ],
    civil: [
      "Engineering Mathematics-III (Civil)",
      "Building Design & Drawing",
      "Engineering Geology",
      "Fluid Mechanics-I",
      "Mechanics of Structures",
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

export const dynamicSem3State = selectorFamily({
  key: "dynamicSem3State",
  get:
    (sub) =>
    ({}) => {
      // const queryParams = new URLSearchParams(location.search);
      // const sub = queryParams.get('sub');
      switch (sub) {
        case "cse":
          return [
            {
              name: "Applied Mathematics 3",
              totalC: 12,
              questionC: 0,
              notesC: 0,
              onlineRefC: 0,
            },
            {
              name: "Discrete structure and graph theory",
              totalC: 21,
              questionC: 0,
              notesC: 0,
              onlineRefC: 0,
            },
            {
              name: "Data Structure",
              totalC: 8,
              questionC: 7,
              notesC: 0,
              onlineRefC: 0,
            },
            {
              name: "Digital logic And Computer Architecture",
              totalC: 0,
              questionC: 0,
              notesC: 0,
              onlineRefC: 0,
            },
            {
              name: "Computer Graphics",
              totalC: 8,
              questionC: 0,
              notesC: 0,
              onlineRefC: 0,
            },
            {
              name: "OOP With Java",
              totalC: 9,
              questionC: 0,
              notesC: 0,
              onlineRefC: 0,
            },
          ];
          break;
        case "mech":
          return [
            {
              name: "Engineering Mathematics-III (Mechanical)",
              totalC: 0,
              questionC: 0,
              notesC: 0,
              onlineRefC: 0,
            },
            {
              name: "Strength of Materials",
              totalC: 0,
              questionC: 0,
              notesC: 0,
              onlineRefC: 0,
            },
            {
              name: "Production Processes",
              totalC: 0,
              questionC: 0,
              notesC: 0,
              onlineRefC: 0,
            },
            {
              name: "Materials and Metallurgy",
              totalC: 0,
              questionC: 0,
              notesC: 0,
              onlineRefC: 0,
            },
            {
              name: "Thermodynamics",
              totalC: 0,
              questionC: 0,
              notesC: 0,
              onlineRefC: 0,
            },
            {
              name: "Cad Modeling",
              totalC: 0,
              questionC: 0,
              notesC: 0,
              onlineRefC: 0,
            },
            {
              name: "Machine shop Practice",
              totalC: 0,
              questionC: 0,
              notesC: 0,
              onlineRefC: 0,
            },
          ];
          break;
        case "entc":
          return [
            {
              name: "Engineering Maths 3",
              totalC: 0,
              questionC: 0,
              notesC: 0,
              onlineRefC: 0,
            },
            {
              name: "Electronic Devices Circuits",
              totalC: 0,
              questionC: 0,
              notesC: 0,
              onlineRefC: 0,
            },
            {
              name: "Digital System Design",
              totalC: 0,
              questionC: 0,
              notesC: 0,
              onlineRefC: 0,
            },
            {
              name: "Network Theory",
              totalC: 0,
              questionC: 0,
              notesC: 0,
              onlineRefC: 0,
            },
            {
              name: "Electronic Instrumentation and Control System",
              totalC: 0,
              questionC: 0,
              notesC: 0,
              onlineRefC: 0,
            },
            {
              name: "Skill Lab: Java & Cpp",
              totalC: 0,
              questionC: 0,
              notesC: 0,
              onlineRefC: 0,
            },
          ];
          break;
        case "civil":
          return [
            {
              name: "Engineering Mathematics-III (Civil)",
              totalC: 0,
              questionC: 0,
              notesC: 0,
              onlineRefC: 0,
            },
            {
              name: "Building Design & Drawing",
              totalC: 0,
              questionC: 0,
              notesC: 0,
              onlineRefC: 0,
            },
            {
              name: "Engineering Geology",
              totalC: 0,
              questionC: 0,
              notesC: 0,
              onlineRefC: 0,
            },
            {
              name: "Fluid Mechanics-I",
              totalC: 0,
              questionC: 0,
              notesC: 0,
              onlineRefC: 0,
            },
            {
              name: "Mechanics of Structures",
              totalC: 0,
              questionC: 0,
              notesC: 0,
              onlineRefC: 0,
            },
          ];
          break;
        default:
          return [
            {
              name: "Maths",
              totalC: 0,
              questionC: 0,
              notesC: 0,
              onlineRefC: 0,
            },
            {
              name: "Science",
              totalC: 0,
              questionC: 0,
              notesC: 0,
              onlineRefC: 0,
            },
            {
              name: "Computer Pheripherals",
              totalC: 0,
              questionC: 0,
              notesC: 0,
              onlineRefC: 0,
            },
            {
              name: "Chemistry",
              totalC: 0,
              questionC: 0,
              notesC: 0,
              onlineRefC: 0,
            },
            {
              name: "Physics",
              totalC: 0,
              questionC: 0,
              notesC: 0,
              onlineRefC: 0,
            },
            { name: "", totalC: 0, questionC: 0, notesC: 0, onlineRefC: 0 },
          ];
          break;
      }
    },
});
