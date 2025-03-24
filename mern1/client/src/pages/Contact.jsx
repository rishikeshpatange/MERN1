import React, { useState, useEffect } from "react";
import { useAuth } from "../store/auth";

const Contact = () => {
  const { user: userDetails } = useAuth();

  const [user, setUser] = useState({
    username: "",
    email: "",
    message: "",
  });

  useEffect(() => {
    if (userDetails) {
      setUser((prevUser) => ({
        ...prevUser,
        username: userDetails.username || "",
        email: userDetails.email || "",
      }));
    }
  }, [userDetails]);

  const handleInput = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const URI = "http://localhost:5000/api/form/contact";

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(user);

    try {
      const response = await fetch(URI, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      if (response.ok) {
        setUser({
          username: userDetails?.username || "",
          email: userDetails?.email || "",
          message: "",
        });
      }
    } catch (error) {
      console.log("contact", error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 px-4">
      <div className="w-full max-w-md bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
          Contact Form
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="username" className="block text-gray-700 dark:text-gray-300">
              Username
            </label>
            <input
              type="text"
              name="username"
              id="username"
              className="w-full px-3 py-2 border rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Username"
              required
              value={user.username}
              onChange={handleInput}
              readOnly
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 dark:text-gray-300">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="w-full px-3 py-2 border rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Email"
              required
              value={user.email}
              onChange={handleInput}
              readOnly
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-gray-700 dark:text-gray-300">
              Message
            </label>
            <textarea
              name="message"
              id="message"
              className="w-full px-3 py-2 border rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your message..."
              required
              value={user.message}
              onChange={handleInput}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition-all"
          >
            Contact Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
