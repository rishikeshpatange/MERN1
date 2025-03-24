import React, { useEffect, useState } from 'react';
import { useAuth } from '../store/auth';
import {Link} from "react-router-dom"

const AdminUsers = () => {
  const [users, setUsers] = useState([]);
  const { AuthorizationToken } = useAuth();

  const getAllUsersData = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/admin/users", {
        method: "GET",
        headers: {
          Authorization: AuthorizationToken,
        },
      });
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.log(error);
    }
  };

  // delete the user

  const deleteUser = async(id)=>{

    try {

    const response = await fetch(`http://localhost:5000/api/admin/users/delete/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: AuthorizationToken,
      },
    });
    const data = await response.json();
    console.log(`user after delete ${data}`)

    if(response.ok){
      getAllUsersData();
    }

  } catch (error) {
    console.log(error)
  }

  }

  useEffect(() => {
    getAllUsersData();
  }, []);



  return (
    <div className="p-6 bg-gray-900 text-white min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Users</h1>
      <div className="overflow-x-auto">
        <table className="w-full table-auto border-collapse border border-gray-700">
          <thead>
            <tr className="bg-blue-800 text-white">
              <th className="border border-gray-700 px-4 py-2">Name</th>
              <th className="border border-gray-700 px-4 py-2">Email</th>
              <th className="border border-gray-700 px-4 py-2">Phone</th>
              <th className="border border-gray-700 px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.length > 0 ? (
              users.map((user, index) => (
                <tr key={index} className="border border-gray-700">
                  <td className="border border-gray-700 px-4 py-2">{user.username}</td>
                  <td className="border border-gray-700 px-4 py-2">{user.email}</td>
                  <td className="border border-gray-700 px-4 py-2">{user.phone}</td>
                  <td className="border border-gray-700 px-4 py-2 flex gap-2">
                    <button className="px-3 py-1 bg-yellow-500 text-black font-medium rounded hover:bg-yellow-600 transition duration-300">
                     <Link to={`/admin/users/${user._id}/edit`}>Update</Link> 
                    </button>
                    <button onClick={() => deleteUser(user._id)} className="px-3 py-1 bg-red-500 text-white font-medium rounded hover:bg-red-600 transition duration-300">
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="text-center py-4">No users found.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminUsers;