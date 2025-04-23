import "./NoresArea.css";

import SemisterArea from "../components/SemisterArea";
import { useUser } from "../context/UserContext";

import { useNavigate } from "react-router-dom";

function NotesArea() {
  const { user } = useUser();
  const queryParams = new URLSearchParams(location.search);
  let sub = queryParams.get("sub");
  // console.log(sub);
  if (!sub) sub = "cse";
  const map: any = {
    cse: "Computer Science",
    mech: "Mechanical",
    entc: "E&TC",
    civil: "Civil",
  };

  return (
    <div>
      <div className="coolbg  relative w-full p-10 -z-10 flex items-center">
        <div className="title container w-full flex flex-col justify-center sm:items-center my-4  bg-white p-4 rounded-xl border-[8px] opacity-80 shadow-2xl">
          <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-mono font-bold ">
            Browse All {map[sub]} Department Notes
          </div>

          <div className="text-2xl md:text-3xl lg:text-4xl font-bold  font-mono">
            Right Here...
          </div>
        </div>
      </div>
      {user ? <SemisterArea /> : <LockedArea />}
    </div>
  );
}

function LockedArea() {
  return (
    <div className="bg-[#1e2a45] w-full h-[100vh] p-0 sm:p-8 md:p-16 flex items-center justify-center flex-col">
      <div className="bg-[#295270] w-full h-full md:p-2">
        <div className="bg-[#C6D1DD] rounded-lg w-full h-full md:p-2 flex flex-col items-center justify-center">
          <h1 className="font-semibold text-4xl text-[#43556A]">
            The content is locked!
          </h1>
          <h1 className="font-normal text-xl text-[#43556A] mb-3">
            Login to get access.
          </h1>
          <NewButton />
        </div>
      </div>
    </div>
  );
}
function NewButton() {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => navigate("/login")}
      className="inline-block rounded-md bg-[#3d405b] text-white text-[17px] py-4 w-[130px] transition-all duration-500 cursor-pointer m-1 group border-none"
    >
      <span className="inline-block relative transition-all duration-500 group-hover:pr-4">
        Login
        <span className="absolute opacity-0 top-0 right-[-15px] transition-all duration-500 group-hover:opacity-100 group-hover:right-0">
          »
        </span>
      </span>
    </button>
  );
}
export default NotesArea;
