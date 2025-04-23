import { atom,  selectorFamily } from "recoil";

export const sem2State = atom({
    key: "sem2State",
    default: [
        { name: "Maths Ultra", totalC: 0, questionC: 11, notesC: 6, onlineRefC: 0 },
        { name: "C", totalC: 0, questionC: 11, notesC: 6, onlineRefC: 0 },
        { name: "C++", totalC: 0, questionC: 11, notesC: 6, onlineRefC: 0 },
        { name: "Electronics", totalC: 0, questionC: 11, notesC: 6, onlineRefC: 0 },
        { name: "Mechanics", totalC: 0, questionC: 11, notesC: 6, onlineRefC: 0 },
        { name: "Yeahhh boiii", totalC: 0, questionC: 11, notesC: 6, onlineRefC: 0 }
    ],
});




export const dynamicSem2State = selectorFamily({
    key: "dynamicSem2State",
    get: (sub) => ({  }) => {
        // const queryParams = new URLSearchParams(location.search);
        // const sub = queryParams.get('sub');
        switch (sub) {
            case 'cse':
                return [
                    { name: "Maths Ultra", totalC: 0, questionC: 11, notesC: 6, onlineRefC: 0 },
                    { name: "C", totalC: 0, questionC: 11, notesC: 6, onlineRefC: 0 },
                    { name: "C++", totalC: 0, questionC: 11, notesC: 6, onlineRefC: 0 },
                    { name: "Electronics", totalC: 0, questionC: 11, notesC: 6, onlineRefC: 0 },
                    { name: "Mechanics", totalC: 0, questionC: 11, notesC: 6, onlineRefC: 0 },
                    { name: "Yeahhh boiii", totalC: 0, questionC: 11, notesC: 6, onlineRefC: 0 }
                ]
                break;
            case 'mech':
                return [
                    { name: "Engineering Maths 3", totalC: 0, questionC: 11, notesC: 6, onlineRefC: 0 },
                    { name: "Science", totalC: 0, questionC: 11, notesC: 6, onlineRefC: 0 },
                    { name: "Computer Pheripherals", totalC: 0, questionC: 11, notesC: 6, onlineRefC: 0 },
                    { name: "Chemistry", totalC: 0, questionC: 11, notesC: 6, onlineRefC: 0 },
                    { name: "Physics", totalC: 0, questionC: 11, notesC: 6, onlineRefC: 0 },
                    { name: "", totalC: 0, questionC: 11, notesC: 6, onlineRefC: 0 }
                ]
                break;
            case 'entc':
                return [
                    { name: "Engineering Maths 3", totalC: 0, questionC: 11, notesC: 6, onlineRefC: 0 },
                    { name: "Electronic Devices Circuits", totalC: 0, questionC: 11, notesC: 6, onlineRefC: 0 },
                    { name: "Digital System Design", totalC: 0, questionC: 11, notesC: 6, onlineRefC: 0 },
                    { name: "Network Theory", totalC: 0, questionC: 11, notesC: 6, onlineRefC: 0 },
                    { name: "Electronic Instrumentation and Control System", totalC: 0, questionC: 11, notesC: 6, onlineRefC: 0 },
                    { name: "Skill Lab: Java & Cpp", totalC: 0, questionC: 11, notesC: 6, onlineRefC: 0 }
                ]
                break;
            case 'civil':
                return [
                    { name: "Maths", totalC: 0, questionC: 11, notesC: 6, onlineRefC: 0 },
                    { name: "Science", totalC: 0, questionC: 11, notesC: 6, onlineRefC: 0 },
                    { name: "Computer Pheripherals", totalC: 0, questionC: 11, notesC: 6, onlineRefC: 0 },
                    { name: "Chemistry", totalC: 0, questionC: 11, notesC: 6, onlineRefC: 0 },
                    { name: "Physics", totalC: 0, questionC: 11, notesC: 6, onlineRefC: 0 },
                    { name: "", totalC: 0, questionC: 11, notesC: 6, onlineRefC: 0 }
                ]
                break;
            default:
                return [
                    { name: "Maths", totalC: 0, questionC: 11, notesC: 6, onlineRefC: 0 },
                    { name: "Science", totalC: 0, questionC: 11, notesC: 6, onlineRefC: 0 },
                    { name: "Computer Pheripherals", totalC: 0, questionC: 11, notesC: 6, onlineRefC: 0 },
                    { name: "Chemistry", totalC: 0, questionC: 11, notesC: 6, onlineRefC: 0 },
                    { name: "Physics", totalC: 0, questionC: 11, notesC: 6, onlineRefC: 0 },
                    { name: "", totalC: 0, questionC: 11, notesC: 6, onlineRefC: 0 }
                ]
                break;
        }

    }
});


