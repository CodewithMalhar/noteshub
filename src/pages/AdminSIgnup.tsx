// SignupForm.tsx
import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { collection, doc, getDocs, setDoc } from "firebase/firestore";
import { db, auth } from "../config/firebase.config";
import { NavLink } from "react-router-dom";
// import './signinForm.css'

import { createUserWithEmailAndPassword } from "firebase/auth";
const AdminSignupForm: React.FC = () => {
  // const [formData, setFormData] = useState({
  //     firstName: "",
  //     lastName: "",
  //     email: "",
  //     password: "",
  // });

  const Errors = {
    empty: "Please fill all fields.",
    // "wrong": "Please fill all fields.",
    invalid: "Email is used by someone else.",
  };
  const [username, setUsername] = useState("");
  const navigate = useNavigate();
  // email s username....
  const [fname, setFname] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [lname, setLname] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [invalid, setInvalid] = useState<string>("");
  useEffect(() => {
    document.title = "SignUp for GIT Notes";
  }, []);

  const handleSignUp = async () => {
    setLoading(true);
    let validUser = [];
    const email = username.trim();

    username.trim();
    fname.trim();
    lname.trim();
    password.trim();
    confirmPassword.trim();
    console.table({ username, fname, lname, password, confirmPassword });
    if (password !== confirmPassword) {
      console.log("password mismatch");
      setInvalid("Passwords do not match!");
      setTimeout(() => setInvalid(""), 3000);
      setLoading(false);

      return;
    }
    console.log("check 1 done");
    if (password.length < 6) {
      console.log("password length issue");
      setInvalid("Passwords Should be more than 6 characters!");
      setTimeout(() => setInvalid(""), 3000);
      setLoading(false);

      return;
    }
    console.log("check 2 done");

    if (
      username.length == 0 ||
      password.length == 0 ||
      confirmPassword.length == 0 ||
      fname.length == 0
    ) {
      setInvalid("Fill all fields!");
      setTimeout(() => setInvalid(""), 3000);
      setLoading(false);

      // usr.current?.classList.add("")
    } else {
      console.log("check 3 done");

      console.log("all validation check done");
      try {
        const users = collection(db, "admins");
        // const departmentNamesArray: any[] = [];

        // querySnapshot.forEach((doc) => {
        //   console.log(doc.data());
        //   if (doc.data().email === username) {
        //     setInvalid("Error saving data");
        //     setTimeout(() => setInvalid(""), 3000);
        //     return;
        //   }
        // });

        createUserWithEmailAndPassword(auth, username, password)
          .then((userCredentials) => {
            const user = userCredentials.user;
            console.log(user);
            const docRef: any = doc(db, "admins", user.uid);
            const data: {
              firstName: string;
              lastName: string;
              email: string;
            } = {
              firstName: fname,
              lastName: lname,
              email: username,
            };
            // console.log(data);
            console.log("start data save");
            setDoc(docRef, data)
              .then((userCreds) => {
                console.log("data save done");
                // console.log(userCreds);
                alert("Registration success");
                navigate("/");
                setInvalid("");
                setLoading(false);
              })
              .catch((err) => {
                console.log("error", err);
                setInvalid(err.message);
                setTimeout(() => setInvalid(""), 3000);
                setLoading(false);
              });
            return;
          })
          .catch((err) => {
            console.table("Error", err);
            setInvalid(err.message);
            setTimeout(() => setInvalid(""), 3000);
            setLoading(false);

            return;
          });

        // const expiryDate = new Date();
        // expiryDate.setHours(expiryDate.getHours() + 1);

        // const newtoken = `${username}_${expiryDate.getTime()}`;

        // localStorage.setItem("user", newtoken);
        // localStorage.setItem("email", username);
      } catch (error) {
        console.log(error);
        setInvalid(error.message);
        setTimeout(() => setInvalid(""), 3000);
        setLoading(false);
      }
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col my-10 gap-4 max-w-md w-full mx-auto p-6 rounded-2xl bg-white text-gray-800 shadow-lg border border-gray-200"
    >
      <p className="text-3xl font-semibold tracking-tight relative flex items-center pl-7 text-blue-600 before:content-[''] before:absolute before:left-0 before:w-4 before:h-4 before:rounded-full before:bg-blue-600 after:content-[''] after:absolute after:left-0 after:w-4 after:h-4 after:rounded-full after:bg-blue-400 after:animate-pulse">
        Register for admin
      </p>
      <p className="text-sm text-gray-500">
        Signup now and get actual full access to our app.
      </p>
      {invalid.length > 0 ? (
        <p className="text-red-500 p-2">{invalid}</p>
      ) : null}

      <div className="flex gap-3">
        <label className="relative w-full">
          <input
            type="text"
            required
            placeholder=" "
            onChange={(e) => setFname(e.target.value)}
            className="peer w-full bg-white text-gray-800 px-3 pt-6 pb-2 border border-gray-300 rounded-lg outline-none focus:border-blue-500"
          />
          <span className="absolute left-3 top-1 text-gray-500 text-sm transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:top-1 peer-focus:text-sm peer-focus:text-blue-600">
            Firstname
          </span>
        </label>

        <label className="relative w-full">
          <input
            type="text"
            required
            onChange={(e) => setLname(e.target.value)}
            placeholder=" "
            className="peer w-full bg-white text-gray-800 px-3 pt-6 pb-2 border border-gray-300 rounded-lg outline-none focus:border-blue-500"
          />
          <span className="absolute left-3 top-1 text-gray-500 text-sm transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:top-1 peer-focus:text-sm peer-focus:text-blue-600">
            Lastname
          </span>
        </label>
      </div>

      <label className="relative w-full">
        <input
          type="email"
          required
          placeholder=" "
          onChange={(e) => setUsername(e.target.value)}
          className="peer w-full bg-white text-gray-800 px-3 pt-6 pb-2 border border-gray-300 rounded-lg outline-none focus:border-blue-500"
        />
        <span className="absolute left-3 top-1 text-gray-500 text-sm transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:top-1 peer-focus:text-sm peer-focus:text-blue-600">
          Email
        </span>
      </label>

      <label className="relative w-full">
        <input
          type="password"
          required
          onChange={(e) => setPassword(e.target.value)}
          placeholder=" "
          className="peer w-full bg-white text-gray-800 px-3 pt-6 pb-2 border border-gray-300 rounded-lg outline-none focus:border-blue-500"
        />
        <span className="absolute left-3 top-1 text-gray-500 text-sm transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:top-1 peer-focus:text-sm peer-focus:text-blue-600">
          Password
        </span>
      </label>

      <label className="relative w-full">
        <input
          type="password"
          required
          onChange={(e) => setConfirmPassword(e.target.value)}
          placeholder=" "
          className="peer w-full bg-white text-gray-800 px-3 pt-6 pb-2 border border-gray-300 rounded-lg outline-none focus:border-blue-500"
        />
        <span className="absolute left-3 top-1 text-gray-500 text-sm transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:top-1 peer-focus:text-sm peer-focus:text-blue-600">
          Confirm Password
        </span>
      </label>
      {!loading ? (
        <button
          onClick={handleSignUp}
          className="w-full py-3 px-4 rounded-lg text-white text-base bg-blue-600 hover:bg-blue-700 transition"
        >
          Submit
        </button>
      ) : (
        <button
        disabled
        className="w-full cursor-not-allowed py-3 px-4 rounded-lg text-white text-base bg-blue-800 "
        >
          Submitting...
        </button>
      )}

      <p className="text-center text-sm text-gray-600">
        Already have an account?{" "}
        <a href="#" className="text-blue-600 hover:underline">
          Signin
        </a>
      </p>
    </motion.div>
  );
};

export default AdminSignupForm;
