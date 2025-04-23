import { FaEnvelope, FaPhone, FaExternalLinkAlt, FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaMapMarkerAlt } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-gray-800 text-gray-300">
      <div className="container mx-auto px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* About Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center">
                <span className="text-white text-lg font-bold">GIT</span>
              </div>
              <h2 className="text-xl font-bold text-white">GIT Study Material</h2>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Your one-stop platform for accessing study materials, notes, and resources for GIT students.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h2 className="text-lg font-bold text-white">Quick Links</h2>
            <ul className="space-y-2">
              <li>
                <NavLink to="/" className="text-gray-400 hover:text-white transition-colors flex items-center group">
                  <span className="w-1 h-1 bg-indigo-600 rounded-full mr-3 group-hover:w-2 transition-all"></span>
                  <span>Home</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/notes" className="text-gray-400 hover:text-white transition-colors flex items-center group">
                  <span className="w-1 h-1 bg-indigo-600 rounded-full mr-3 group-hover:w-2 transition-all"></span>
                  <span>Study Materials</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/upload" className="text-gray-400 hover:text-white transition-colors flex items-center group">
                  <span className="w-1 h-1 bg-indigo-600 rounded-full mr-3 group-hover:w-2 transition-all"></span>
                  <span>Upload Notes</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" className="text-gray-400 hover:text-white transition-colors flex items-center group">
                  <span className="w-1 h-1 bg-indigo-600 rounded-full mr-3 group-hover:w-2 transition-all"></span>
                  <span>About Us</span>
                </NavLink>
              </li>
            </ul>
            <div className="flex space-x-4 pt-2">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors transform hover:scale-110">
                <FaFacebook className="w-5 h-5" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors transform hover:scale-110">
                <FaTwitter className="w-5 h-5" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors transform hover:scale-110">
                <FaInstagram className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors transform hover:scale-110">
                <FaLinkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h2 className="text-lg font-bold text-white">Contact Us</h2>
            <div className="space-y-3">
              <div className="flex items-start">
                <FaMapMarkerAlt className="mt-1 mr-3 text-indigo-600" />
                <div>
                  <h3 className="text-white text-sm font-medium">Gharda Institute of Technology</h3>
                  <p className="text-gray-400 text-sm mt-1">
                    Lavel, Tal. Chiplun, Dist. Ratnagiri, Maharashtra - 415606
                  </p>
                </div>
              </div>
              <div className="flex items-center">
                <FaPhone className="mr-3 text-indigo-600" />
                <div>
                  <p className="text-gray-400 text-sm">+91 9422152788</p>
                  <p className="text-gray-500 text-xs">Registrar</p>
                </div>
              </div>
              <div className="flex items-center">
                <FaPhone className="mr-3 text-indigo-600" />
                <div>
                  <p className="text-gray-400 text-sm">+91 9822765402</p>
                  <p className="text-gray-500 text-xs">Academics</p>
                </div>
              </div>
              <div className="flex items-center">
                <FaEnvelope className="mr-3 text-indigo-600" />
                <a href="mailto:principal@git-india.edu.in" className="text-gray-400 hover:text-white text-sm transition-colors">
                  principal@git-india.edu.in
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-gray-700 mt-6 pt-4">
          <div className="flex justify-center items-center">
            <p className="text-gray-400 text-xs">
              © {new Date().getFullYear()} Gharda Institute of Technology. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
