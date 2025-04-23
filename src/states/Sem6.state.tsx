import { atom, selectorFamily } from "recoil";

export const sem6State = atom({
  key: "sem6State",
  default:  {
    cse: [
      "System programming & complier instruction",
      "Artifical Intelligence",
      "Cryptography & System Security",
      "Data warehousing & mining",
      "DLOC : Internet of Things ",
      "DLOC : Quantitative Analysis",
      "Mini-project 2B ",
      "DLOC : Enterprise Resource planning",
      "DLOC : Machine learning",
    ],
    mech: [
      "Machine Design",
      "Turbo Machinery",
      "Heating, Ventilation, Air Conditioning and Refrigeration",
      "Automation and Artificial Intelligence",
      "DLOC - Press Tool Design",
    ],
    entc: [
      "Electromagnetics and Antena",
      "Computer Communication and Network",
      "Image processing and machine version",
      "Artificial Neural Network and Fuzzy Logic ",
      "DLOC : Radar Engineering",
      "DLOC : Computer Organization and Architecture",
      "Skill Lab: Linux and Networking",
    ],
    civil: [
      "Design and Drawing of Steel Structures",
      "Water Resource Engineering",
      "Geotechnical Engg. II",
      "Environmental Engg",
      "Advanced Construction Equipments  DLOC2",
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

export const dynamicSem6State = selectorFamily({
  key: "dynamicSem6State",
  get:
    (sub) =>
    ({}) => {
      // const queryParams = new URLSearchParams(location.search);
      // const sub = queryParams.get('sub');
      switch (sub) {
        case "cse":
          return [
            {
              name: "System programming & complier instruction",
              totalC: 0,
              questionC: 0,
              notesC: 0,
              onlineRefC: 0,
            },
            {
              name: "Artifical Intelligence",
              totalC: 21,
              questionC: 0,
              notesC: 0,
              onlineRefC: 0,
            },
            {
              name: "Cryptography & System Security",
              totalC: 8,
              questionC: 7,
              notesC: 0,
              onlineRefC: 0,
            },
            {
              name: "Data warehousing & mining",
              totalC: 0,
              questionC: 0,
              notesC: 0,
              onlineRefC: 0,
            },
            {
              name: "DLOC : Internet of Things ",
              totalC: 8,
              questionC: 0,
              notesC: 0,
              onlineRefC: 0,
            },
            {
              name: "DLOC : Quantitative Analysis",
              totalC: 8,
              questionC: 0,
              notesC: 0,
              onlineRefC: 0,
            },
            {
              name: "Mini-project 2B ",
              totalC: 8,
              questionC: 0,
              notesC: 0,
              onlineRefC: 0,
            },
            {
              name: "DLOC : Enterprise Resource planning",
              totalC: 9,
              questionC: 0,
              notesC: 0,
              onlineRefC: 0,
            },
            {
              name: "DLOC : Machine learning",
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
              name: "Machine Design",
              totalC: 0,
              questionC: 0,
              notesC: 0,
              onlineRefC: 0,
            },
            {
              name: "Turbo Machinery",
              totalC: 0,
              questionC: 0,
              notesC: 0,
              onlineRefC: 0,
            },
            {
              name: "Heating, Ventilation, Air Conditioning and Refrigeration",
              totalC: 0,
              questionC: 0,
              notesC: 0,
              onlineRefC: 0,
            },
            {
              name: "Automation and Artificial Intelligence",
              totalC: 0,
              questionC: 0,
              notesC: 0,
              onlineRefC: 0,
            },
            {
              name: "DLOC - Press Tool Design",
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
              name: "Electromagnetics and Antena",
              totalC: 0,
              questionC: 0,
              notesC: 0,
              onlineRefC: 0,
            },
            {
              name: "Computer Communication and Network",
              totalC: 21,
              questionC: 0,
              notesC: 0,
              onlineRefC: 0,
            },
            {
              name: "Image processing and machine version",
              totalC: 8,
              questionC: 7,
              notesC: 0,
              onlineRefC: 0,
            },
            {
              name: "Artificial Neural Network and Fuzzy Logic ",
              totalC: 0,
              questionC: 0,
              notesC: 0,
              onlineRefC: 0,
            },
            {
              name: "DLOC : Radar Engineering",
              totalC: 8,
              questionC: 0,
              notesC: 0,
              onlineRefC: 0,
            },
            {
              name: "DLOC : Computer Organization and Architecture",
              totalC: 8,
              questionC: 0,
              notesC: 0,
              onlineRefC: 0,
            },
            {
              name: "Skill Lab: Linux and Networking",
              totalC: 8,
              questionC: 0,
              notesC: 0,
              onlineRefC: 0,
            },
          ];
          break;
        case "civil":
          return [
            {
              name: "Design and Drawing of Steel Structures",
              totalC: 0,
              questionC: 0,
              notesC: 0,
              onlineRefC: 0,
            },
            {
              name: "Water Resource Engineering",
              totalC: 0,
              questionC: 0,
              notesC: 0,
              onlineRefC: 0,
            },
            {
              name: "Geotechnical Engg. II",
              totalC: 0,
              questionC: 0,
              notesC: 0,
              onlineRefC: 0,
            },
            {
              name: "Environmental Engg",
              totalC: 0,
              questionC: 0,
              notesC: 0,
              onlineRefC: 0,
            },
            {
              name: "Advanced Construction Equipments  DLOC2",
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
