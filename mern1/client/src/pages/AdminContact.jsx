import React, { useEffect, useState } from 'react';
import { useAuth } from '../store/auth';

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
    <div className="p-8 bg-white text-gray-900 min-h-screen">
      <h1 className="text-4xl font-semibold mb-8">Contacts</h1>
      {contacts.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="w-full table-auto border-collapse shadow-lg rounded-lg border border-gray-300">
            <thead className="bg-gray-100 border-b border-gray-300">
              <tr className="h-16">
                <th className="px-6 py-4 text-left">Name</th>
                <th className="px-6 py-4 text-left">Email</th>
                <th className="px-6 py-4 text-left">Message</th>
                <th className="px-6 py-4 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {contacts.map((contact) => (
                <tr key={contact._id} className="hover:bg-gray-50 transition duration-300 border-b border-gray-300 h-16">
                  <td className="px-6 py-4">{contact.username}</td>
                  <td className="px-6 py-4">{contact.email}</td>
                  <td className="px-6 py-4">{contact.message}</td>
                  <td className="px-6 py-4 flex gap-4 text-sm">
                    <button className="text-blue-600 hover:underline">Reply</button>
                    <button className="text-red-600 hover:underline">Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="text-gray-500">No contacts found.</p>
      )}
    </div>
  );
};

export default AdminContact;
