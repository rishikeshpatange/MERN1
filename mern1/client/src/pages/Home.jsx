import { useAuth } from "../store/auth";
import { NavLink } from "react-router-dom";

const Home = () => {
  const { user: userDetails } = useAuth();

  return (
    <div className="relative w-full">
      {/* First Screen (Hero Section) */}
      <div className="relative w-full h-screen">
        <div className="absolute inset-0 w-full h-full">
          <img
            src="/Images/bikedesktop.jpg"
            alt="Home Background"
            className="hidden sm:block w-full h-full object-cover"
          />
          <img
            src="/Images/bikephone.jpg"
            alt="Home Background"
            className="block sm:hidden w-full h-full object-cover"
          />
        </div>

        {/* Content Wrapper */}
        <div className="relative z-10 w-full h-full flex flex-col justify-between">
          {/* Desktop Content */}
          <div className="hidden sm:block absolute top-10 left-25 text-black">
            <p className="text-lg mt-2">
              {userDetails?.username
                ? `Welcome, ${userDetails.username}!`
                : "Hello, User!"}
            </p>
            <h1 className="text-6xl font-bold">F77 MACH 2</h1>
            <p className="text-lg mt-3 font-medium">Activate Flight Mode</p>
          </div>

          {/* Desktop Stats and Button (Bottom) */}
          <div className="hidden sm:block absolute bottom-20 left-25 text-white">
            <div className="flex space-x-16 mb-8">
              <div className="text-left">
                <div className="flex items-end justify-center">
                  <h2 className="text-3xl font-semibold">261</h2>
                  <p className="text-md">KM</p>
                </div>
                <p className="text-sm mt-1">IDC RANGE</p>
              </div>
              <div className="text-left">
                <div className="flex items-end justify-center">
                  <h2 className="text-3xl font-semibold">40.2</h2>
                  <p className="text-md">HP</p>
                </div>
                <p className="text-sm mt-1">POWER</p>
              </div>
              <div className="text-left">
                <div className="flex items-end justify-center">
                  <h2 className="text-3xl font-semibold">100</h2>
                  <p className="text-md">NM</p>
                </div>
                <p className="text-sm mt-1">TORQUE</p>
              </div>
              <div className="text-left">
                <div className="flex items-end justify-center">
                  <h2 className="text-3xl font-semibold">155</h2>
                  <p className="text-md">KM/H</p>
                </div>
                <p className="text-sm mt-1">TOP SPEED</p>
              </div>
            </div>

            {/* Button */}
            <button className="border-2 border-white text-white py-4 px-8 rounded-lg text-lg hover:bg-white hover:text-black transition-all">
              PRE BOOK NOW
            </button>
          </div>

          {/* Mobile Content */}
          <div className="sm:hidden relative w-full h-full flex flex-col justify-between text-white text-center">
            {/* Top Section */}
            <div className="mt-10 text-black">
              <p className="text-sm mb-2">
                {userDetails?.username
                  ? `Welcome, ${userDetails.username}!`
                  : "Hello, User!"}
              </p>
              <h1 className="text-4xl font-bold">F77 MACH 2</h1>
              <p className="text-sm mt-2 font-medium">Activate Flight Mode</p>
            </div>

            {/* Bottom Section */}
            <div className="mb-20">
              {/* Stats */}
              <div className="flex justify-center space-x-4 mt-6 mb-6">
                <div className="text-center">
                  <div className="flex items-end justify-center">
                    <h2 className="text-xl font-semibold">261</h2>
                    <p className="text-xs ml-1">KM</p>
                  </div>
                  <p className="text-xs mt-1">IDC RANGE</p>
                </div>
                <div className="text-center">
                  <div className="flex items-end justify-center">
                    <h2 className="text-xl font-semibold">40.2</h2>
                    <p className="text-xs ml-1">HP</p>
                  </div>
                  <p className="text-xs mt-1">POWER</p>
                </div>
                <div className="text-center">
                  <div className="flex items-end justify-center">
                    <h2 className="text-xl font-semibold">100</h2>
                    <p className="text-xs ml-1">NM</p>
                  </div>
                  <p className="text-xs mt-1">TORQUE</p>
                </div>
                <div className="text-center">
                  <div className="flex items-end justify-center">
                    <h2 className="text-xl font-semibold">155</h2>
                    <p className="text-xs ml-1">KM/H</p>
                  </div>
                  <p className="text-xs mt-1">TOP SPEED</p>
                </div>
              </div>

              {/* Button */}
              <button className="border-2 border-white text-white py-2 px-4 rounded-lg text-sm hover:bg-white hover:text-black transition-all">
                PRE BOOK NOW
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Second Screen*/}
      <div className="text-center py-12 bg-white relative z-10 mt-0 sm:mt-0">
        <h1 className="text-4xl font-semibold mb-12">
          CHOOSE YOUR <span className="text-red-500">BALLISTIC MACHINE</span>
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Tesseract Scooter */}
          <div className="bg-yellow-400 p-8 rounded-lg">
            <h2 className="text-2xl italic mb-4">TESSERACT</h2>
            <button className="bg-black text-white px-4 py-2 rounded-full mb-6">
              SCOOTER
            </button>
            <img
              src="/Images/scooter1.jpg"
              alt="Tesseract Scooter"
              className="w-full h-auto mb-6"
            />
              <NavLink to="/booking" className="border-b-2 border-black pb-1">
              PRE-BOOK
            </NavLink>
          </div>

          {/* Shockwave Funduro */}
          <div className="p-8 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">ShockWave</h2>
            <button className="bg-gray-800 text-white px-4 py-2 rounded-full mb-6">
              FUNDORO
            </button>
            <img
              src="/Images/funduro.jpg"
              alt="Shockwave Funduro"
              className="w-full h-auto mb-6"
            />
          <NavLink to="/booking" className="border-b-2 border-black pb-1">
              PRE-BOOK
            </NavLink>
          </div>

          {/* Super Street */}
          <div className="p-8 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">Super Street</h2>
            <button className="bg-gray-800 text-white px-4 py-2 rounded-full mb-6">
              STREET
            </button>
            <img
              src="/Images/f77.jpg"
              alt="Super Street"
              className="w-full h-auto mb-6"
            />
           <NavLink to="/booking" className="border-b-2 border-black pb-1">
              PRE-BOOK
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;