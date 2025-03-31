import React, { useState, useEffect } from "react";
import { useAuth } from "../store/auth";

const defaultBookingData = {
  username: "",
  email: "",
  vehicle: "",
  phone: "",
};

const Booking = () => {
  const { user: userDetails } = useAuth();
  const [user, setUser] = useState(defaultBookingData);

  // Populate form data when user is available
  useEffect(() => {
    if (userDetails) {
      setUser({
        username: userDetails.username || "",
        email: userDetails.email || "",
        vehicle: "",
        phone: "",
      });
    }
  }, [userDetails]);

  const handleInput = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const URI = "http://localhost:5000/api/form/booking";

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(URI, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      if (response.ok) {
        alert("Booking successful!");
        setUser({ ...defaultBookingData, username: userDetails?.username || "", email: userDetails?.email || "" });
      } else {
        alert("Booking failed. Please try again.");
      }
    } catch (error) {
      console.error("Booking error:", error);
      alert("An error occurred while booking.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-6">
      <div className="w-full max-w-lg p-8 rounded-3xl shadow-xl border border-gray-200">
        <h1 className="text-3xl font-semibold text-gray-900 mb-8 text-center">
          Vehicle Booking
        </h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="username" className="block text-gray-700 font-medium mb-2">
            Your Full Name
            </label>
            <input
              type="text"
              name="username"
              id="username"
              className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Username"
              required
              value={user.username}
              onChange={handleInput}
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
             Primary Email ID
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Email"
              required
              value={user.email}
              onChange={handleInput}
            />
          </div>
          <div>
            <label htmlFor="vehicle" className="block text-gray-700 font-medium mb-2">
              Vehicle
            </label>
            <select
              name="vehicle"
              id="vehicle"
              className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              required
              value={user.vehicle}
              onChange={handleInput}
            >
              <option value="">Select Vehicle</option>
              <option value="TESSERACT">TESSERACT</option>
              <option value="ShockWave">ShockWave</option>
              <option value="f77 Super Street">f77 Super Street</option>
            </select>
          </div>
          <div>
            <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
            Primary Mobile Number
            </label>
            <input
              type="text"
              name="phone"
              id="phone"
              className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Phone Number"
              required
              value={user.phone}
              onChange={handleInput}
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 text-white bg-blue-600 hover:bg-blue-700 rounded-xl font-medium transition-all"
          >
            Book Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default Booking;