import React, { useEffect, useState } from "react";
import { useAuth } from "../store/auth";

const AdminContact = () => {
  const [contacts, setContacts] = useState([]);
  const { AuthorizationToken } = useAuth();

  const getAllContacts = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/admin/contacts", {
        method: "GET",
        headers: {
          Authorization: AuthorizationToken,
        },
      });

      const data = await response.json();
      console.log(`Contacts:`, data);
      setContacts(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllContacts();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold text-white mb-4">Contacts</h1>
      {contacts.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-gray-900 text-white border border-gray-700">
            <thead>
              <tr className="bg-blue-800">
                <th className="py-2 px-4 border-b">Name</th>
                <th className="py-2 px-4 border-b">Email</th>
                <th className="py-2 px-4 border-b">Message</th>
                <th className="py-2 px-4 border-b">Actions</th>
              </tr>
            </thead>
            <tbody>
              {contacts.map((contact, index) => (
                <tr key={index} className="border-b border-gray-700 hover:bg-gray-800">
                  <td className="py-2 px-4">{contact.username}</td>
                  <td className="py-2 px-4">{contact.email}</td>
                  <td className="py-2 px-4">{contact.message}</td>
                  <td className="py-2 px-4 flex gap-2">
                    <button className="bg-green-600 hover:bg-green-700 px-4 py-1 rounded">Reply</button>
                    <button className="bg-red-600 hover:bg-red-700 px-4 py-1 rounded">Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="text-gray-400">No contacts found.</p>
      )}
    </div>
  );
};

export default AdminContact;
