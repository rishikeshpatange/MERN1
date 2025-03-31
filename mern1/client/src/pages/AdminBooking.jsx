import React, { useEffect, useState } from 'react';
import { useAuth } from '../store/auth';

const AdminBooking = () => {
  const [bookings, setBookings] = useState([]);
  const { AuthorizationToken } = useAuth();

  const getAllBookings = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/admin/bookings", {
        method: "GET",
        headers: {
          Authorization: AuthorizationToken,
        },
      });

      const data = await response.json();
      console.log(`Bookings:`, data);
      setBookings(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllBookings();
  }, []);

  return (
    <div className="p-8 bg-white text-gray-900 min-h-screen">
      <h1 className="text-4xl font-semibold mb-8">Bookings</h1>
      {bookings.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="w-full table-auto border-collapse shadow-lg rounded-lg border border-gray-300">
            <thead className="bg-gray-100 border-b border-gray-300">
              <tr className="h-16">
                <th className="px-6 py-4 text-left">Name</th>
                <th className="px-6 py-4 text-left">Email</th>
                <th className="px-6 py-4 text-left">Vehicle</th>
                <th className="px-6 py-4 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {bookings.map((booking) => (
                <tr key={booking._id} className="hover:bg-gray-50 transition duration-300 border-b border-gray-300 h-16">
                  <td className="px-6 py-4">{booking.username}</td>
                  <td className="px-6 py-4">{booking.email}</td>
                  <td className="px-6 py-4">{booking.vehicle}</td>
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
        <p className="text-gray-500">No bookings found.</p>
      )}
    </div>
  );
};

export default AdminBooking;