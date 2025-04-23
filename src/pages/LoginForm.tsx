import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { faLock, faUser, faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "../config/firebase.config";
import { useNavigate } from "react-router-dom";

const LoginForm: React.FC = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [invalid, setInvalid] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [verificationSuccess, setVerificationSuccess] = useState<boolean>(false);

  useEffect(() => {
    document.title = "Login to GIT Notes";
  }, []);

  const handleLogin = async () => {
    console.log("init login");
    const email = username.trim();
    const passwd = password.trim();
    if (email.length == 0 || passwd.length == 0) {
      setInvalid("Fill all fields!!!");
      setTimeout(() => setInvalid(""), 2000);
    } else {
      try {
        setLoading(true);
        console.log("Password check done");
        signInWithEmailAndPassword(auth, email, passwd)
          .then(() => {
            console.log("all done");
            setVerificationSuccess(true);
            setTimeout(() => {
              navigate("/");
            }, 1500); 
            setInvalid("");
            setLoading(false);
          })
          .catch((error) => {
            console.log(error);
            setInvalid(error.message);
            setTimeout(() => setInvalid(""), 2000);
            setLoading(false);
          });
      } catch (error: any) {
        console.log(error);
        setInvalid(error.message);
        setTimeout(() => setInvalid(""), 2000);
        setLoading(false);
      }
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      setLoading(true);
      await signInWithPopup(auth, googleProvider);
      console.log("Google sign-in successful");
      setVerificationSuccess(true);
      setTimeout(() => {
        navigate("/");
      }, 1500); 
      setLoading(false);
    } catch (error: any) {
      console.error("Google sign-in error:", error);
      const errorMessage = error.message || "Google sign-in failed";
      setInvalid(errorMessage);
      setTimeout(() => setInvalid(""), 2000);
      setLoading(false);
    }
  };

  return (
    <>
      {/* Success Verification Message as Toast Notification */}
      {verificationSuccess && (
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          transition={{ 
            type: "spring", 
            stiffness: 400, 
            damping: 25 
          }}
          className="fixed top-6 right-6 text-green-600 font-medium bg-white p-4 rounded-lg border-l-4 border-green-500 shadow-xl z-[9999] w-80 flex flex-col"
        >
          <div className="flex items-center">
            <div className="flex-shrink-0 bg-green-100 rounded-full p-2 mr-3">
              <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
              </svg>
            </div>
            <div>
              <p className="font-bold">Verification successful!</p>
              <p className="text-sm text-green-500">Redirecting to home page...</p>
            </div>
          </div>
          <div className="w-full bg-gray-200 h-1 mt-3 rounded-full overflow-hidden">
            <motion.div 
              className="bg-green-500 h-full"
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 1.5, ease: "linear" }}
            />
          </div>
        </motion.div>
      )}
      <div className="min-h-screen bg-blue-50/50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Decorative background elements */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 overflow-hidden"
      >
        <div className="absolute -left-10 top-20 w-40 h-40 bg-blue-200/20 rounded-full blur-3xl"></div>
        <div className="absolute right-0 bottom-0 w-80 h-80 bg-blue-100/20 rounded-full blur-3xl"></div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md relative"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-white/95 backdrop-blur-sm rounded-xl shadow-lg p-8 border border-blue-100"
          whileHover={{ boxShadow: '0 8px 30px rgba(0, 0, 0, 0.12)' }}
        >
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ 
              type: "spring",
              stiffness: 260,
              damping: 20,
              delay: 0.1 
            }}
            whileHover={{ scale: 1.05, rotate: 5 }}
            className="flex justify-center -mt-16 mb-6"
          >
            <div className="bg-blue-400/90 p-4 rounded-full shadow-lg border-4 border-white relative">
              <FontAwesomeIcon 
                icon={faGraduationCap} 
                className="h-10 w-10 text-white"
              />
              <motion.div
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 0.8, 0.5]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute inset-0 bg-blue-400/30 rounded-full"
              ></motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-center mb-2"
          >
            <div className="flex items-center justify-center gap-2 mb-1">
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: "2.5rem" }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="h-1 rounded-full bg-blue-200"
              ></motion.div>
              <motion.h3 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="text-blue-400 font-medium"
              >
                GIT NOTES
              </motion.h3>
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: "2.5rem" }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="h-1 rounded-full bg-blue-200"
              ></motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ y: -20 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-8"
          >
            <h2 className="text-3xl font-bold text-blue-500">
              Welcome Back
            </h2>
            <p className="mt-2 text-gray-600">Sign in to your account</p>
          </motion.div>

          {invalid && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="text-red-500 text-sm font-medium mt-2 bg-red-50 p-2 rounded-md border border-red-100"
            >
              {invalid}
            </motion.div>
          )}

          {/* Success verification message has been moved outside the main component */}

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="space-y-6"
          >
            {/* Email input with staggered animation */}
            <motion.div
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              whileHover={{ scale: 1.01 }}
            >
              <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-1">
                Email Address
              </label>
              <div className="relative group">
                <input
                  id="username"
                  type="text"
                  className="w-full px-4 py-3 pl-12 rounded-lg border border-blue-100 focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300 bg-white/50 group-hover:border-blue-200"
                  placeholder="Enter your email"
                  onChange={(e) => setUsername(e.target.value)}
                />
                <motion.span 
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-400"
                  whileHover={{ scale: 1.1 }}
                >
                  <FontAwesomeIcon icon={faUser} className="h-5 w-5" />
                </motion.span>
              </div>
            </motion.div>

            {/* Password input with staggered animation */}
            <motion.div
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              whileHover={{ scale: 1.01 }}
            >
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <div className="relative group">
                <input
                  id="password"
                  type="password"
                  className="w-full px-4 py-3 pl-12 rounded-lg border border-blue-100 focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300 bg-white/50 group-hover:border-blue-200"
                  placeholder="Enter your password"
                  onChange={(e) => setPassword(e.target.value)}
                />
                <motion.span 
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-400"
                  whileHover={{ scale: 1.1 }}
                >
                  <FontAwesomeIcon icon={faLock} className="h-5 w-5" />
                </motion.span>
              </div>
            </motion.div>

            {/* Login button with enhanced animation */}
            <motion.button
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleLogin}
              disabled={loading}
              className={`w-full py-3 px-4 rounded-lg bg-blue-500 text-white font-medium hover:bg-blue-600 transition-all duration-300 shadow-md hover:shadow-lg ${
                loading ? 'opacity-70 cursor-not-allowed' : ''
              }`}
            >
              {loading ? (
                <div className="flex items-center justify-center">
                  <motion.div 
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    className="rounded-full h-5 w-5 border-t-2 border-b-2 border-white mr-2"
                  ></motion.div>
                  <span>Logging in...</span>
                </div>
              ) : (
                'Log in'
              )}
            </motion.button>

            <div className="relative flex items-center justify-center text-sm my-8">
              <div className="flex-grow h-px bg-blue-100"></div>
              <span className="mx-4 text-gray-500 bg-white px-3 rounded-full">OR</span>
              <div className="flex-grow h-px bg-blue-100"></div>
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleGoogleSignIn}
              disabled={loading}
              className={`w-full py-3 px-4 rounded-lg bg-white border border-blue-100 text-gray-700 font-medium hover:bg-blue-50 transition-all duration-300 shadow-md flex items-center justify-center space-x-2 ${
                loading ? 'opacity-70 cursor-not-allowed' : ''
              }`}
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                />
              </svg>
              <span>Sign in with Google</span>
            </motion.button>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
    </>
  );
};

export default LoginForm;
