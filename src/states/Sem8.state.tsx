import { atom, selectorFamily } from "recoil";

export const sem8State = atom({
  key: "sem8State",
  default: {
    cse: [
      "Human machine Interaction",
      "Distributed Computing.",
      "DLOC : Natural Language  Processing",
      "Cloud Computing Lab",
      "IOLC : Social media Analytics ",
      "IOLC : Human Resource Management",
      "IOLC : Applied Data  Science",
    ],
    mech: [
      "Operations Planning and Control",
      "Department Level Optional Course-5",
      "Department Level Optional Course - 0",
      "Institute Level Optional Course - II",
      "Product Design and Development",
    ],
    entc: [
      "RF Designs",
      "Wireless Network",
      "DLOC: Satellite Communication",
      "ILOC: Enviroment Management",
      "DLOC: Network Management in Telecommunication",
    ],
    civil: [
      "Design and Drawing of Reinforced Concrete Structures",
      "Construction Management",
      "Industrial Waste Treatment IWT",
      "Environment Management",
      "Project Management",
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

export const dynamicSem8State = selectorFamily({
  key: "dynamicSem8State",
  get:
    (sub) =>
    ({}) => {
      // const queryParams = new URLSearchParams(location.search);
      // const sub = queryParams.get('sub');
      switch (sub) {
        case "cse":
          return [
            {
              name: "Human machine Interaction",
              totalC: 12,
              questionC: 0,
              notesC: 0,
              onlineRefC: 0,
            },
            {
              name: "Distributed Computing.",
              totalC: 21,
              questionC: 0,
              notesC: 0,
              onlineRefC: 0,
            },
            {
              name: "DLOC : Natural Language  Processing",
              totalC: 8,
              questionC: 0,
              notesC: 0,
              onlineRefC: 0,
            },
            {
              name: "Cloud Computing Lab",
              totalC: 0,
              questionC: 0,
              notesC: 0,
              onlineRefC: 0,
            },
            {
              name: "IOLC : Social media Analytics ",
              totalC: 8,
              questionC: 0,
              notesC: 0,
              onlineRefC: 0,
            },
            {
              name: "IOLC : Human Resource Management",
              totalC: 9,
              questionC: 0,
              notesC: 0,
              onlineRefC: 0,
            },
            {
              name: "IOLC : Applied Data  Science",
              totalC: 21,
              questionC: 0,
              notesC: 0,
              onlineRefC: 0,
            },
          ];
          break;
        case "mech":
          return [
            {
              name: "Operations Planning and Control",
              totalC: 0,
              questionC: 0,
              notesC: 0,
              onlineRefC: 0,
            },
            {
              name: "Department Level Optional Course-5",
              totalC: 0,
              questionC: 0,
              notesC: 0,
              onlineRefC: 0,
            },
            {
              name: "Department Level Optional Course - 0",
              totalC: 0,
              questionC: 0,
              notesC: 0,
              onlineRefC: 0,
            },
            {
              name: "Institute Level Optional Course - II",
              totalC: 0,
              questionC: 0,
              notesC: 0,
              onlineRefC: 0,
            },
            {
              name: "Product Design and Development",
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
              name: "RF Designs",
              totalC: 0,
              questionC: 0,
              notesC: 0,
              onlineRefC: 0,
            },
            {
              name: "Wireless Network",
              totalC: 0,
              questionC: 0,
              notesC: 0,
              onlineRefC: 0,
            },
            {
              name: "DLOC: Satellite Communication",
              totalC: 0,
              questionC: 0,
              notesC: 0,
              onlineRefC: 0,
            },
            {
              name: "ILOC: Enviroment Management",
              totalC: 0,
              questionC: 0,
              notesC: 0,
              onlineRefC: 0,
            },
            {
              name: "DLOC: Network Management in Telecommunication",
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
              name: "Design and Drawing of Reinforced Concrete Structures",
              totalC: 0,
              questionC: 0,
              notesC: 0,
              onlineRefC: 0,
            },
            {
              name: "Construction Management",
              totalC: 0,
              questionC: 0,
              notesC: 0,
              onlineRefC: 0,
            },
            {
              name: "Industrial Waste Treatment IWT",
              totalC: 0,
              questionC: 0,
              notesC: 0,
              onlineRefC: 0,
            },
            {
              name: "Environment Management",
              totalC: 0,
              questionC: 0,
              notesC: 0,
              onlineRefC: 0,
            },
            {
              name: "Project Management",
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
          ];
          break;
      }
    },
});
