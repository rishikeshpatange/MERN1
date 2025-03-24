import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAuth } from "../store/auth";

const AdminUpdate = () => {
  const [data, setData] = useState({
    username: "",
    email: "",
    phone: "",
  });

  const parms = useParams();
  const { AuthorizationToken } = useAuth();

  const getSingleUserData = async () => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/admin/users/${parms.id}`,
        {
          method: "GET",
          headers: {
            Authorization: AuthorizationToken,
          },
        }
      );
      const data = await response.json();
      console.log(`user single data ${data}`);
      setData(data)

    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getSingleUserData();
  }, []);

  const handleInput = (e) => {
    let { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  // to update data dynamacaliy

  const handleSubmit = async (e) => {
    e.preventDefault(); 
    try {
      const response = await fetch(
        `http://localhost:5000/api/admin/users/update/${parms.id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: AuthorizationToken,
          },
          body: JSON.stringify(data),
        }
      );
  
      if (response.ok) {
        alert("Updated Successfully");
      } else {
        alert("User not updated");
      }
    } catch (error) {
      console.error("Error updating user:", error);
    }
  };
  


  return (
    <div className="flex flex-col items-center  justify-center min-h-screen bg-gradient-to-r from-blue-900 to-gray-900 text-white px-6">
      <h1 className="text-4xl font-bold text-blue-400 mb-6">Update Form</h1>
      <form onSubmit={handleSubmit} className="w-full max-w-md bg-gray-800 p-6 rounded-lg shadow-lg">
        <div className="mb-4">
          <label
            htmlFor="username"
            className="block text-sm font-medium text-blue-300"
          >
            Username
          </label>
          <input
            type="text"
            name="username"
            id="username"
            required
            value={data.username}
            onChange={handleInput}
            className="w-full mt-1 px-3 py-2 bg-gray-700 text-white border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-blue-300"
          >
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            required
            value={data.email}
            onChange={handleInput}
            className="w-full mt-1 px-3 py-2 bg-gray-700 text-white border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-blue-300"
          >
            Phone
          </label>
          <input
            type="number"
            name="phone"
            id="phone"
            required
            autoComplete="off"
            value={data.phone}
            onChange={handleInput}
            className="w-full mt-1 px-3 py-2 bg-gray-700 text-white border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button
          type="submit"
          className="w-full px-4 py-2 bg-blue-600 text-white font-medium rounded-lg shadow-lg hover:bg-blue-500 transition duration-300"
        >
          Update Now
        </button>
      </form>
    </div>
  );
};

export default AdminUpdate;
