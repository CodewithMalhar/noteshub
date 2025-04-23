import { NavLink } from "react-router-dom";
type SubjectProps = {
    name: string;
    totalC: number;
    questionC:number;
    notesC:number;
    onlineRefC:number; 
    semId:string|undefined;
}

function Subject({name,totalC, questionC, notesC, onlineRefC, semId}: SubjectProps) :React.JSX.Element{
    const queryParams=new URLSearchParams(location.search);
    let sub = queryParams.get('sub');
    if(!sub)sub='cse';
    return (
        <div className="card bg-white p-2 rounded-lg shadow-2xl ">
            <div className="title text-2xl font-bold">{name}</div>
            <div className="h-1 w-full bg-slate-400 "></div>
            <div className="list-none flex flex-col my-2 p-2 shadow-inner rounded-md bg-slate-200">
                <div className="text-sm">Total Files: {totalC}</div>
                <div className="text-sm">Question Sets: {questionC}</div>
                <div className="text-sm">Notes: {notesC}</div>
                <div className="text-sm">Available Notes: {onlineRefC}</div>
            </div>
            <NavLink to={`/notes/${semId}/${name}?sub=${sub}`}>  

            <div className="content text-lg cursor-pointer text-center">View Notes</div>
            </NavLink>
        </div>
    )
}
export default Subject;