import React, { useEffect, useRef, useState } from "react";
import { sem3State } from "../states/Sem3.state";
import { sem4State } from "../states/Sem4.state";
import { sem5State } from "../states/Sem5.state";
import { sem6State } from "../states/Sem6.state";
import { sem7State } from "../states/Sem7.state";
import { sem8State } from "../states/Sem8.state";
// import { dynamicSem2State } from "../states/Sem2.state";
// import { dynamicSem3State } from "../states/Sem3.state";
// import { dynamicSem4State } from "../states/Sem4.state";
// import { dynamicSem5State } from "../states/Sem5.state";
// import { dynamicSem6State } from "../states/Sem6.state";
// import { dynamicSem7State } from "../states/Sem7.state";
// import { dynamicSem8State } from "../states/Sem8.state";
import { storage } from "../config/firebase.config";
import { ref, uploadBytes } from "firebase/storage";
import { useRecoilState } from "recoil";
import { useNavigate } from "react-router-dom";
import { useUser } from "../context/UserContext";
import { motion } from "framer-motion";
// interface Subject {
//     name: string;
//     totalC: number;
//     questionC: number;
//     notesC: number;
//     onlineRefC: number;
// }
function UploadFile() {
  const btn = useRef<HTMLButtonElement>(null);
  const navigate = useNavigate();
  const { user, loading } = useUser();
  // let sub = "cse";

  const [file, setFile] = useState<File | null>();
  const [subjects, setSubjects] = useState<string[]>(["No Semester Selected"]);
  const [invalid, setInvalid] = useState<boolean>(false);
  const sem = useRef<HTMLSelectElement>(null);
  const dept = useRef<HTMLSelectElement>(null);
  const type = useRef<HTMLSelectElement>(null);
  const subname = useRef<HTMLSelectElement>(null);

  const sem3 = useRecoilState<any>(sem3State);
  const sem4 = useRecoilState<any>(sem4State);
  const sem5 = useRecoilState<any>(sem5State);
  const sem6 = useRecoilState<any>(sem6State);
  const sem7 = useRecoilState<any>(sem7State);
  const sem8 = useRecoilState<any>(sem8State);
  // const sem3 = useRecoilValue(dynamicSem3State(sub));
  // const sem4 = useRecoilValue(dynamicSem4State(sub));
  // const sem5 = useRecoilValue(dynamicSem5State(sub));
  // const sem6 = useRecoilValue(dynamicSem6State(sub));
  // const sem7 = useRecoilValue(dynamicSem7State(sub));
  // const sem8 = useRecoilValue(dynamicSem8State(sub));
  useEffect(() => {
    if (!loading && !user) {
      navigate("/login");
    }
  }, [loading, user, navigate]);
  if (loading) return <p>Loading...</p>;

  const handleFileChange = (e: any) => {
    setFile(e.target.files[0]);
  };

  const deptMap: any = {
    CSE: "cse",
    "E & TC": "entc",
    CIVIL: "civil",
    MECHANICAL: "mech",
  };

  const handleUpload = () => {
    btn.current?.setAttribute("disabled", "true");
    btn.current?.classList.add("bg-gray-200");
    btn.current?.classList.add("cursor-not-allowed");

    const semName = sem.current?.value;
    const deptName = dept.current?.value;
    const typeName = type.current?.value;
    const subName = subname.current?.value;
    if (
      semName === "default" ||
      deptName === "default" ||
      typeName === "default"
    ) {
      setTimeout(() => {
        setInvalid(false);
      }, 3000);
      setInvalid(true);
      return;
    }
    if (file) {
      const storageRef = ref(
        storage,
        `Department Notes/${deptName}/${semName}/${subName}/${typeName}/` +
          file.name
      );
      uploadBytes(storageRef, file)
        .then(() => {
          console.log("File uploaded successfully", file.name);
          btn.current?.classList.remove("bg-gray-200");
          btn.current?.classList.remove("cursor-not-allowed");
          btn.current?.removeAttribute("disabled");
          alert("File uploaded successfully");
        })
        .catch((err) => {
          console.log(err);
          btn.current?.classList.remove("bg-gray-200");
          btn.current?.classList.remove("cursor-not-allowed");
          btn.current?.removeAttribute("disabled");
          alert(err.message)
        });
    }
  };
  if (user?.role == "admin") {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100"
      >
        <motion.div
          initial={{ y: -20 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5 }}
          className="title w-full my-3 mt-24"
        >
          <p className="mx-auto w-fit text-4xl p-3 font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
            Upload Notes from here
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="main m-14 mt-16 bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-8 border border-white/50"
        >
          {invalid ? (
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-red-500 p-3 bg-red-50/80 rounded-lg border border-red-100 animate-pulse"
            >
              Please select department, semester and category correctly.
            </motion.p>
          ) : null}
          <div className="opt grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 p-2 gap-6 items-end">
            <motion.div
              whileHover={{ scale: 1.02, y: -5 }}
              className="dept bg-white/90 backdrop-blur-sm rounded-xl shadow-md p-4 border border-blue-100/50"
            >
              <label className="block text-sm font-medium text-gray-700 mb-2">Department</label>
              <select
                name="department"
                className="w-full bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent rounded-lg p-2 text-gray-700 border border-gray-200"
                ref={dept}
                onChange={async (e: React.ChangeEvent<HTMLSelectElement>) => {
                  const semVal: string | undefined | null = sem.current?.value;
                  if (semVal === "default") return;
                  
                  if (e.target?.value === "default") {
                    setSubjects(["No Semester Selected"]);
                    return
                  }
                  if (semVal === "Semester 3") {
                    setSubjects(sem3[0][deptMap[e.target?.value ?? ""]]);
                  } else if (semVal === "Semester 4") {
                    setSubjects(sem4[0][deptMap[e.target?.value ?? ""]]);
                  } else if (semVal === "Semester 5") {
                    setSubjects(sem5[0][deptMap[e.target?.value ?? ""]]);
                  } else if (semVal === "Semester 6") {
                    setSubjects(sem6[0][deptMap[e.target?.value ?? ""]]);
                  } else if (semVal === "Semester 7") {
                    setSubjects(sem7[0][deptMap[e.target?.value ?? ""]]);
                  } else if (semVal === "Semester 8") {
                    setSubjects(sem8[0][deptMap[e.target?.value ?? ""]]);
                  } else {
                    setSubjects(["No Semester Selected"]);
                  }
                }}
              >
                <option value="default">Select Department</option>
                <option value="CSE">CSE</option>
                <option value="E & TC">E & TC</option>
                <option value="CIVIL">Civil</option>
                <option value="MECHANICAL">Mechanical</option>
              </select>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02, y: -5 }}
              className="semester bg-white/90 backdrop-blur-sm rounded-xl shadow-md p-4 border border-purple-100/50"
            >
              <label className="block text-sm font-medium text-gray-700 mb-2">Semester</label>
              <select
                name="semester"
                className="w-full bg-transparent focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent rounded-lg p-2 text-gray-700 border border-gray-200"
                ref={sem}
                onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                  const deptVal: string | undefined | null = dept.current?.value;
                  if (deptVal === "default") return;
                  if (e.target?.value === "default") {
                    setSubjects(["No Semester Selected"]);
                  }
                  if (e.target?.value === "Semester 3") {
                    setSubjects(sem3[0][deptMap[deptVal ?? ""]]);
                  } else if (e.target?.value === "Semester 4") {
                    setSubjects(sem4[0][deptMap[deptVal ?? ""]]);
                  } else if (e.target?.value === "Semester 5") {
                    setSubjects(sem5[0][deptMap[deptVal ?? ""]]);
                  } else if (e.target?.value === "Semester 6") {
                    setSubjects(sem6[0][deptMap[deptVal ?? ""]]);
                  } else if (e.target?.value === "Semester 7") {
                    setSubjects(sem7[0][deptMap[deptVal ?? ""]]);
                  } else if (e.target?.value === "Semester 8") {
                    setSubjects(sem8[0][deptMap[deptVal ?? ""]]);
                  } else {
                    setSubjects(["No Semester Selected"]);
                  }
                }}
              >
                <option value="default">Select Semester</option>
                <option value="Semester 3">Semester 3</option>
                <option value="Semester 4">Semester 4</option>
                <option value="Semester 5">Semester 5</option>
                <option value="Semester 6">Semester 6</option>
                <option value="Semester 7">Semester 7</option>
                <option value="Semester 8">Semester 8</option>
              </select>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02, y: -5 }}
              className="Subject bg-white/90 backdrop-blur-sm rounded-xl shadow-md p-4 border border-pink-100/50"
            >
              <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
              <select
                name="type"
                className="w-full bg-transparent focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent rounded-lg p-2 text-gray-700 border border-gray-200"
                ref={subname}
              >
                {subjects.map((subject: any, index: number) => {
                  return (
                    <option key={index} value={subject}>
                      {subject}
                    </option>
                  );
                })}
              </select>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02, y: -5 }}
              className="types col-span-1 bg-white/90 backdrop-blur-sm rounded-xl shadow-md p-4 border border-indigo-100/50"
            >
              <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
              <select
                name="type"
                className="w-full bg-transparent focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent rounded-lg p-2 text-gray-700 border border-gray-200"
                ref={type}
              >
                <option value="default">Select Category</option>
                <option value="Documents Notes">Documents Notes</option>
                <option value="Question Banks">Question Banks</option>
                <option value="Recommended Books">Recommended Books</option>
                <option value="Reference Books">Reference Books</option>
                <option value="Syllabus">Syllabus</option>
              </select>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="controls m-2 flex flex-col sm:flex-row items-start sm:items-end space-y-4 sm:space-x-8 pb-8 mt-8"
          >
            <motion.div
              whileHover={{ scale: 1.02, y: -5 }}
              className="grid w-full max-w-xs items-center gap-2 bg-white/90 backdrop-blur-sm rounded-xl shadow-md p-5 border border-blue-100/50"
            >
              <label className="block text-sm font-medium text-gray-700 mb-2">File Upload</label>
              <div className="relative">
                <input
                  type="file"
                  onChange={handleFileChange}
                  className="flex h-14 w-full rounded-lg border border-gray-200 bg-transparent px-3 py-4 text-sm text-gray-600 file:border-0 file:bg-gradient-to-r file:from-blue-500 file:to-purple-500 file:text-white file:rounded-lg file:px-6 file:py-3 file:mr-4 file:cursor-pointer hover:file:from-blue-600 hover:file:to-purple-600 transition-colors"
                />
              </div>
            </motion.div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleUpload}
              ref={btn}
              className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white p-3 rounded-lg px-6 h-fit shadow-lg hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 transition-all duration-300"
            >
              Upload
            </motion.button>
          </motion.div>
        </motion.div>
      </motion.div>
    );
  } else {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-gray-600 font-medium">Access not granted</p>
      </div>
    );
  }
}

export default UploadFile;
