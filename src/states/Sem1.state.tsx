import { atom, selector } from "recoil";

export const sem1State = atom({
    key: "sem1State",
    default: [
        { name: "Maths" , totalC: 0,  questionC:11, notesC:6, onlineRefC:0 },
        { name: "Science" , totalC: 0, questionC:11, notesC:6, onlineRefC:0 },
        { name: "Computer Pheripherals" , totalC: 0, questionC:11, notesC:6, onlineRefC:0 },
        { name: "Chemistry" , totalC: 0, questionC:11, notesC:6, onlineRefC:0 },
        { name: "Physics" , totalC: 0, questionC:11, notesC:6, onlineRefC:0 },
        { name: "" , totalC: 0, questionC:11, notesC:6, onlineRefC:0 }
    ],
});
export const semester1SubjectsState = atom({
    key: 'semester1SubjectsState',
    default: ['Mathematics', 'Physics', 'Chemistry'],
  });

export const semCount= atom({
    key:'countForSem',
    default:0
})

export interface Subject {
  name: string;
  totalC: number;
  questionC: number;
  notesC: number;
  onlineRefC: number;
}

export const getSubjectSem1 = selector<string | undefined|any>({
  key: "getSubject",
  get: ({ get }) => (index:number) => {
    const subjects: string[] = get(semester1SubjectsState);
    return subjects[index];
  },
}) 

