import React from 'react';
import { motion } from 'framer-motion';

function AboutUs(): React.ReactElement {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-5xl font-extrabold text-indigo-700 mb-6"
          >
            About Us
          </motion.h1>
          <motion.div 
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="w-24 h-1 bg-indigo-600 mx-auto rounded-full"
          ></motion.div>
        </motion.div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-3xl font-bold text-indigo-700"
            >
              Gharda Institute of Technology (GIT)
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-gray-700 text-lg leading-relaxed"
            >
              We are a leading engineering institution committed to fostering
              innovation, research, and excellence in education. Our mission is to
              prepare students for the challenges of the modern world through
              quality education and hands-on training.
            </motion.p>
            <motion.a
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 10px 25px -5px rgba(79, 70, 229, 0.4)"
              }}
              whileTap={{ scale: 0.95 }}
              href="https://www.youtube.com/@GFGITLAVEL"
              className="inline-flex items-center px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl font-semibold"
            >
              Explore GIT Programs
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <motion.div 
              whileHover={{ scale: 1.08 }}
              transition={{ duration: 0.3 }}
              className="aspect-w-16 aspect-h-9 rounded-xl overflow-hidden shadow-2xl"
            >
              <motion.img
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.5 }}
                src="src/assets/about.webp"
                alt="GIT Campus"
                className="object-cover w-full h-full transform transition-transform duration-500"
              />
            </motion.div>
            <motion.div 
              animate={{ 
                scale: [1, 1.1, 1],
                opacity: [0.2, 0.3, 0.2]
              }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute -bottom-4 -right-4 w-24 h-24 bg-indigo-600 rounded-full opacity-20"
            ></motion.div>
          </motion.div>
        </div>

        {/* Mission, Vision, and Why Choose Sections */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            whileHover={{ 
              y: -15,
              scale: 1.08,
              boxShadow: "0 30px 60px -12px rgba(0, 0, 0, 0.3)"
            }}
            className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <motion.div 
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
              className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4"
            >
              <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </motion.div>
            <motion.h2 
              whileHover={{ color: "#4F46E5" }}
              className="text-xl font-semibold text-indigo-600 mb-4"
            >
              Our Mission
            </motion.h2>
            <motion.p 
              whileHover={{ scale: 1.02 }}
              className="text-gray-600 leading-relaxed"
            >
              We provide high-quality education that empowers students to become
              leaders. We create an environment that encourages critical thinking,
              creativity, and ethical practices.
            </motion.p>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            whileHover={{ 
              y: -15,
              scale: 1.08,
              boxShadow: "0 30px 60px -12px rgba(0, 0, 0, 0.3)"
            }}
            className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <motion.div 
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
              className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4"
            >
              <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </motion.div>
            <motion.h2 
              whileHover={{ color: "#4F46E5" }}
              className="text-xl font-semibold text-indigo-600 mb-4"
            >
              Our Vision
            </motion.h2>
            <motion.p 
              whileHover={{ scale: 1.02 }}
              className="text-gray-600 leading-relaxed"
            >
              To be recognized as a leading engineering institution, known for our
              innovative curriculum, state-of-the-facilities, and commitment to
              student development.
            </motion.p>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            whileHover={{ 
              y: -15,
              scale: 1.08,
              boxShadow: "0 30px 60px -12px rgba(0, 0, 0, 0.3)"
            }}
            className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <motion.div 
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
              className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4"
            >
              <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </motion.div>
            <motion.h2 
              whileHover={{ color: "#4F46E5" }}
              className="text-xl font-semibold text-indigo-600 mb-4"
            >
              Why Choose GIT?
            </motion.h2>
            <motion.ul 
              whileHover={{ scale: 1.02 }}
              className="space-y-2 text-gray-600"
            >
              {[
                "Experienced Faculty",
                "Modern Infrastructure",
                "Industry Collaborations",
                "Comprehensive Curriculum",
                "Student-Centric Approach"
              ].map((item, index) => (
                <motion.li 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.7 + index * 0.1 }}
                  whileHover={{ x: 5 }}
                  className="flex items-center"
                >
                  <motion.span 
                    whileHover={{ scale: 1.2 }}
                    className="w-2 h-2 bg-indigo-600 rounded-full mr-2"
                  ></motion.span>
                  {item}
                </motion.li>
              ))}
            </motion.ul>
          </motion.section>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
