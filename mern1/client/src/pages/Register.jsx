import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";

const Register = () => {
  const URI = "http://localhost:5000/api/auth/register";
  const [user, setUser] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
  });

  const navigate = useNavigate();
  const { storeTokenInLS } = useAuth();

  const handleInput = (e) => {
    let { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(URI, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
      });

      if (response.ok) {
        const res_data = await response.json();
        storeTokenInLS(res_data.token);
        setUser({ username: "", email: "", phone: "", password: "" });
        navigate("/login");
      }
    } catch (error) {
      console.error("Register Error:", error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-900 to-gray-900 text-white px-6">
      <h1 className="text-4xl font-bold text-blue-400 mb-6">Registration Form</h1>
      <form onSubmit={handleSubmit} className="w-full max-w-md bg-gray-800 p-6 rounded-lg shadow-lg">
        <div className="mb-4">
          <label htmlFor="username" className="block text-sm font-medium text-blue-300">Username</label>
          <input
            type="text"
            name="username"
            id="username"
            placeholder="Enter username"
            required
            value={user.username}
            onChange={handleInput}
            className="w-full mt-1 px-3 py-2 bg-gray-700 text-white border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-blue-300">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter email"
            required
            value={user.email}
            onChange={handleInput}
            className="w-full mt-1 px-3 py-2 bg-gray-700 text-white border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="phone" className="block text-sm font-medium text-blue-300">Phone</label>
          <input
            type="number"
            name="phone"
            id="phone"
            placeholder="Enter phone number"
            required
            autoComplete="off"
            value={user.phone}
            onChange={handleInput}
            className="w-full mt-1 px-3 py-2 bg-gray-700 text-white border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="password" className="block text-sm font-medium text-blue-300">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Enter password"
            required
            autoComplete="off"
            value={user.password}
            onChange={handleInput}
            className="w-full mt-1 px-3 py-2 bg-gray-700 text-white border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <button
          type="submit"
          className="w-full px-4 py-2 bg-blue-600 text-white font-medium rounded-lg shadow-lg hover:bg-blue-500 transition duration-300"
        >
          Register Now
        </button>
      </form>
    </div>
  );
};

export default Register;
