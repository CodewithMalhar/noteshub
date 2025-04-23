import { atom, selectorFamily } from "recoil";

export const sem5State = atom({
  key: "sem5State",
  default:  {
    cse: [
      "Data Warehousing and mining",
      "Computer Network",
      "Theory of computer science",
      "Software Engineering",
      "Internet Programming",
      "Prof. Comm. & Ethics",
    ],
    mech: [
      "Mechanical Measurements and Control",
      "Thermal Engineering",
      "Dynamics of Machinery",
      "Finite Element Analysis",
      "Optimization Techniques",
      "Professional Communication and Ethics II (Mechanical)",
    ],
    entc: [
      "Digital Communication",
      "Descrete Time Signal Processing",
      "Digital VLSI",
      "Random Signal Analysis",
      "DLOC: Data Compression and Cryptography",
      "DLOC: IT Infra and Security",
      "Professional Communication and Ethics",
    ],
    civil: [
      "Theory of Reinforced Concrete Structures",
      "Applied Hydraulics",
      "Geotechnical Engineering - I",
      "Transportation Engineering",
      "Advanced Concrete Technology",
      "Professional Communication & Ethics II (CIVIL)",
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

export const dynamicSem5State = selectorFamily({
  key: "dynamicSem5State",
  get:
    (sub) =>
    ({}) => {
      // const queryParams = new URLSearchParams(location.search);
      // const sub = queryParams.get('sub');
      switch (sub) {
        case "cse":
          return [
            {
              name: "Data Warehousing and mining",
              totalC: 12,
              questionC: 0,
              notesC: 0,
              onlineRefC: 0,
            },
            {
              name: "Computer Network",
              totalC: 21,
              questionC: 0,
              notesC: 0,
              onlineRefC: 0,
            },
            {
              name: "Theory of computer science",
              totalC: 8,
              questionC: 7,
              notesC: 0,
              onlineRefC: 0,
            },
            {
              name: "Software Engineering",
              totalC: 0,
              questionC: 0,
              notesC: 0,
              onlineRefC: 0,
            },
            {
              name: "Internet Programming",
              totalC: 8,
              questionC: 0,
              notesC: 0,
              onlineRefC: 0,
            },
            {
              name: "Prof. Comm. & Ethics",
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
              name: "Mechanical Measurements and Control",
              totalC: 0,
              questionC: 0,
              notesC: 0,
              onlineRefC: 0,
            },
            {
              name: "Thermal Engineering",
              totalC: 0,
              questionC: 0,
              notesC: 0,
              onlineRefC: 0,
            },
            {
              name: "Dynamics of Machinery",
              totalC: 0,
              questionC: 0,
              notesC: 0,
              onlineRefC: 0,
            },
            {
              name: "Finite Element Analysis",
              totalC: 0,
              questionC: 0,
              notesC: 0,
              onlineRefC: 0,
            },
            {
              name: "Optimization Techniques",
              totalC: 0,
              questionC: 0,
              notesC: 0,
              onlineRefC: 0,
            },
            { name: "Professional Communication and Ethics II (Mechanical)", totalC: 0, questionC: 0, notesC: 0, onlineRefC: 0 },
          ];
          break;
        case "entc":
          return [
            {
              name: "Digital Communication",
              totalC: 0,
              questionC: 0,
              notesC: 0,
              onlineRefC: 0,
            },
            {
              name: "Descrete Time Signal Processing",
              totalC: 0,
              questionC: 0,
              notesC: 0,
              onlineRefC: 0,
            },
            {
              name: "Digital VLSI",
              totalC: 0,
              questionC: 0,
              notesC: 0,
              onlineRefC: 0,
            },
            {
              name: "Random Signal Analysis",
              totalC: 0,
              questionC: 0,
              notesC: 0,
              onlineRefC: 0,
            },
            {
              name: "DLOC: Data Compression and Cryptography",
              totalC: 0,
              questionC: 0,
              notesC: 0,
              onlineRefC: 0,
            },
            {
              name: "DLOC: IT Infra and Security",
              totalC: 0,
              questionC: 0,
              notesC: 0,
              onlineRefC: 0,
            },
            {
              name: "Professional Communication and Ethics",
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
              name: "Theory of Reinforced Concrete Structures",
              totalC: 0,
              questionC: 0,
              notesC: 0,
              onlineRefC: 0,
            },
            {
              name: "Applied Hydraulics",
              totalC: 0,
              questionC: 0,
              notesC: 0,
              onlineRefC: 0,
            },
            {
              name: "Geotechnical Engineering - I",
              totalC: 0,
              questionC: 0,
              notesC: 0,
              onlineRefC: 0,
            },
            {
              name: "Transportation Engineering",
              totalC: 0,
              questionC: 0,
              notesC: 0,
              onlineRefC: 0,
            },
            {
              name: "Advanced Concrete Technology",
              totalC: 0,
              questionC: 0,
              notesC: 0,
              onlineRefC: 0,
            },
            {
              name: "Professional Communication & Ethics II (CIVIL)",
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
