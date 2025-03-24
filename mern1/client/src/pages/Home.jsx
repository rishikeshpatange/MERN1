import { NavLink } from "react-router-dom";
import { useAuth } from "../store/auth";

const Home = () => {
  const { isLoggedIn, user: userDetails } = useAuth();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-900 to-gray-900 text-white px-6">
      <h1 className="text-5xl font-bold text-blue-400">Home</h1>

      <h2 className="text-2xl font-semibold mb-6 animate-pulse text-blue-300">
        {userDetails.username ? `Welcome, ${userDetails.username}!` : "Hello, User!"}
      </h2>

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
  );
};

export default Home;