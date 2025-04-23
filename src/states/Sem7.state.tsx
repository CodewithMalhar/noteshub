import { atom, selectorFamily } from "recoil";

export const sem7State = atom({
  key: "sem7State",
  default: {
    cse: [
      "Aritifical Intelligence and Soft Computing ",
      "Mobile Communication & Computing",
      "Digital Signal  & image processing",
      "Big data & analytics",
      "Advanced System Security & digital forensic",
      "Cyber security and laws(ILOC)",
      "Project 1(Computer)",
    ],
    mech: [
      "Design of Mechanical System",
      "Logistics and Supply Chain Management",
      "Vehicle Systems",
      "Advanced Vibration",
      "Operation Research",
    ],
    entc: [
      "Microwave Engineering",
      "Mobile Communication System",
      "DLOC3: Deep Learning",
      "DLOC4: Internet Communication Engineering",
      "ILOC: Cyber Security and Laws",
    ],
    civil: [
      "Design and Drawing of Reinforced Concrete Structures",
      "Theory of Reinforced Concrete Structures",
      "Quantity Survey Estimation and Valuation",
      "Water Resource Engineering - II",
      "Solid Waste Management (DLOC4)",
      "Disaster Management and Mitigation Measures (ILOC)",
    ],
    default: [
      "Maths",
      "Science",
      "Computer Pheripherals",
      "Chemistry",
      "Physics",
    ],
  }
});

export const dynamicSem7State = selectorFamily({
  key: "dynamicSem7State",
  get:
    (sub) =>
    ({}) => {
      // const queryParams = new URLSearchParams(location.search);
      // const sub = queryParams.get('sub');
      switch (sub) {
        case "cse":
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
        case "mech":
          return [
            {
              name: "Design of Mechanical System",
              totalC: 0,
              questionC: 0,
              notesC: 0,
              onlineRefC: 0,
            },
            {
              name: "Logistics and Supply Chain Management",
              totalC: 0,
              questionC: 0,
              notesC: 0,
              onlineRefC: 0,
            },
            {
              name: "Vehicle Systems",
              totalC: 0,
              questionC: 0,
              notesC: 0,
              onlineRefC: 0,
            },
            {
              name: "Advanced Vibration",
              totalC: 0,
              questionC: 0,
              notesC: 0,
              onlineRefC: 0,
            },
            {
              name: "Operation Research",
              totalC: 0,
              questionC: 0,
              notesC: 0,
              onlineRefC: 0,
            },
            { name: "", totalC: 0, questionC: 0, notesC: 0, onlineRefC: 0 },
          ];
          break;
        case "entc":
          return [
            {
              name: "Microwave Engineering",
              totalC: 0,
              questionC: 0,
              notesC: 0,
              onlineRefC: 0,
            },
            {
              name: "Mobile Communication System",
              totalC: 0,
              questionC: 0,
              notesC: 0,
              onlineRefC: 0,
            },
            {
              name: "DLOC3: Deep Learning",
              totalC: 0,
              questionC: 0,
              notesC: 0,
              onlineRefC: 0,
            },
            {
              name: "DLOC4: Internet Communication Engineering",
              totalC: 0,
              questionC: 0,
              notesC: 0,
              onlineRefC: 0,
            },
            {
              name: "ILOC: Cyber Security and Laws",
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
              name: "Theory of Reinforced Concrete Structures",
              totalC: 0,
              questionC: 0,
              notesC: 0,
              onlineRefC: 0,
            },
            {
              name: "Quantity Survey Estimation and Valuation",
              totalC: 0,
              questionC: 0,
              notesC: 0,
              onlineRefC: 0,
            },
            {
              name: "Water Resource Engineering - II",
              totalC: 0,
              questionC: 0,
              notesC: 0,
              onlineRefC: 0,
            },
            {
              name: "Solid Waste Management (DLOC4)",
              totalC: 0,
              questionC: 0,
              notesC: 0,
              onlineRefC: 0,
            },
            {
              name: "Disaster Management and Mitigation Measures (ILOC)",
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
