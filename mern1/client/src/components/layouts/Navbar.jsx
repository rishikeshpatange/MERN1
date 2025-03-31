import { useState } from "react";
import { Menu, X } from "lucide-react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../../store/auth";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { isLoggedIn } = useAuth();

  return (
    <nav className="bg-white shadow-md w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <NavLink to="/" className="text-gray-600 hover:text-black">
            <div className="text-2xl font-bold text-gray-800">LEGIONEVS</div>
          </NavLink>

          <div className="hidden md:flex space-x-8 items-center">
            <NavLink to="/services" className="text-gray-600 hover:text-black">
              Services
            </NavLink>

            <NavLink to="/contact" className="text-gray-600 hover:text-black">
              Contact
            </NavLink>

            <div className="flex gap-4">
              {isLoggedIn ? (
                <NavLink
                  to="/logout"
                  className="px-6 py-2 bg-blue-700 text-white font-medium rounded-lg shadow-lg hover:bg-blue-600 transition duration-300"
                >
                  Logout
                </NavLink>
              ) : (
                <>
                  <NavLink
                    to="/register"
                    className="px-6 py-2 bg-blue-500 text-white font-medium rounded-lg shadow-lg hover:bg-blue-600 transition duration-300"
                  >
                    Register
                  </NavLink>
                  <NavLink
                    to="/login"
                    className="px-6 py-2 bg-blue-700 text-white font-medium rounded-lg shadow-lg hover:bg-blue-600 transition duration-300"
                  >
                    Login
                  </NavLink>
                </>
              )}
            </div>
          </div>

          {/* Hamburger */}
          <button
            className="md:hidden text-gray-600 hover:text-black"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-white flex flex-col items-center justify-center space-y-8 transition-transform duration-700 z-50 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden`}
      >
        <button
          className="absolute top-6 right-6 text-gray-600 hover:text-black"
          onClick={() => setIsOpen(false)}
        >
          <X size={36} />
        </button>

        <NavLink
          to="/services"
          className="text-4xl font-semibold text-gray-800 hover:text-black"
          onClick={() => setIsOpen(false)}
        >
          Services
        </NavLink>

        <NavLink
          to="/contact"
          className="text-4xl font-semibold text-gray-800 hover:text-black"
          onClick={() => setIsOpen(false)}
        >
          Contact
        </NavLink>

        <div className="flex flex-col gap-6">
          {isLoggedIn ? (
            <NavLink
              to="/logout"
              className="text-4xl font-semibold text-gray-800 hover:text-black"
              onClick={() => setIsOpen(false)}
            >
              Logout
            </NavLink>
          ) : (
            <>
              <NavLink
                to="/register"
                className="text-4xl font-semibold text-gray-800 hover:text-black"
                onClick={() => setIsOpen(false)}
              >
                Register
              </NavLink>
              <NavLink
                to="/login"
                className="text-4xl font-semibold text-gray-800 hover:text-black"
                onClick={() => setIsOpen(false)}
              >
                Login
              </NavLink>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
