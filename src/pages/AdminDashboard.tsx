import { useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOut, faUser } from "@fortawesome/free-solid-svg-icons";
import { faBook } from "@fortawesome/free-solid-svg-icons/faBook";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { auth } from "../config/firebase.config";
import { signOut } from "firebase/auth";
import { useUser } from "../context/UserContext";

interface AdminDashboardProps {}

const AdminDashboard: React.FC<AdminDashboardProps> = () => {
  const navigate = useNavigate();
  const { user, loading } = useUser();
  useEffect(() => {
    if (!loading && !user) {
      navigate("/login");
    }
  }, [loading, user, navigate]);

  if (loading)
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );

  if (!user) navigate("/login");
  if (user.role != "admin")
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-gray-600 font-medium">Access not granted</p>
      </div>
    );

  const handleLogout = () => {
    signOut(auth);
    navigate("/login");
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="relative min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50"
    >
      <motion.div
        initial={{ y: -20 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="title w-full my-3 mt-24"
      >
        <p className="mx-auto w-fit text-4xl p-3 font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
          Admin Dashboard
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="main m-14 mt-16 bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-8 border border-white/50"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <motion.div
            whileHover={{ scale: 1.02, y: -5 }}
            className="bg-white/90 backdrop-blur-sm rounded-xl shadow-md p-6 border border-blue-100/50"
          >
            <h2 className="text-xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Admin Management
            </h2>
            <div className="flex items-center">
              <span className="text-3xl text-blue-500 mr-2">
                <FontAwesomeIcon icon={faUser} className="h-6 w-6" />
              </span>
              <p className="text-lg text-gray-700">Manage users, roles, and permissions.</p>
            </div>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.02, y: -5 }}
            className="bg-white/90 backdrop-blur-sm rounded-xl shadow-md p-6 border border-purple-100/50"
          >
            <h2 className="text-xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
              Notes Control
            </h2>
            <div className="flex items-center">
              <span className="text-3xl text-purple-500 mr-2">
                <FontAwesomeIcon icon={faBook} className="h-6 w-6" />
              </span>
              <p className="text-lg text-gray-700">View detailed analytics and reports.</p>
            </div>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.02, y: -5 }}
            onClick={() => navigate("/contact-messages")}
            className="bg-white/90 backdrop-blur-sm rounded-xl shadow-md p-6 border border-indigo-100/50 cursor-pointer hover:shadow-lg transition-all duration-300"
          >
            <h2 className="text-xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-600">
              Contact Messages
            </h2>
            <div className="flex items-center">
              <span className="text-3xl text-indigo-500 mr-2">
                <FontAwesomeIcon icon={faEnvelope} className="h-6 w-6" />
              </span>
              <p className="text-lg text-gray-700">View and manage contact submissions.</p>
            </div>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.02, y: -5 }}
            className="bg-white/90 backdrop-blur-sm rounded-xl shadow-md p-6 border border-pink-100/50"
          >
            <h2 className="text-xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-blue-600">
              Settings
            </h2>
            <div className="flex items-center">
              <span className="text-3xl text-pink-500 mr-2">
                <FontAwesomeIcon icon={faSignOut} className="h-6 w-6" />
              </span>
              <p className="text-lg text-gray-700">Customize your dashboard settings.</p>
            </div>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-col items-center justify-center mt-8"
        >
          <motion.div
            whileHover={{ scale: 1.02, y: -5 }}
            className="bg-white/90 backdrop-blur-sm rounded-xl shadow-md p-6 border border-blue-100/50 w-full max-w-md"
          >
            <h3 className="text-lg font-semibold text-center mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Add New Admin
            </h3>
            <p className="text-center text-gray-700 mb-4">
              Want to add another administrator to help manage the system?
            </p>
            <motion.div className="flex justify-center">
              <NavLink 
                to={"/admin-account"} 
                className="inline-flex items-center px-6 py-3 rounded-lg bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white font-medium hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 transition-all duration-300 shadow-lg"
              >
                <span>Add New Admin</span>
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                </svg>
              </NavLink>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex justify-center items-center mt-8"
        >
          <motion.div 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative"
          >
            <button 
              onClick={handleLogout}
              className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white font-medium hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <FontAwesomeIcon icon={faSignOut} className="h-5 w-5" />
              <span>Logout</span>
            </button>
            <div
              className="absolute -top-12 left-[50%] -translate-x-[50%] 
                        z-20 origin-center scale-0 px-4 py-2 rounded-lg 
                        bg-white/90 backdrop-blur-sm border border-gray-200
                        shadow-lg transition-all duration-300 ease-in-out 
                        group-hover:scale-100 whitespace-nowrap"
            >
              <span className="text-sm font-medium text-gray-700">Click to logout</span>
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 rotate-45 w-2 h-2 bg-white/90 border-r border-b border-gray-200"></div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default AdminDashboard;
