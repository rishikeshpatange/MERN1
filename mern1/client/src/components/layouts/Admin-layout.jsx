import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const AdminLayout = () => {
  return (
    <>
      <header className="bg-gradient-to-r from-blue-900 to-blue-800 text-white shadow-md p-4">
        <div className="container mx-auto flex justify-between items-center">
          <nav>
            <ul className="flex gap-6">
              <li>
                <NavLink to="/admin/users" className="hover:text-blue-300 transition duration-300">
                  Users
                </NavLink>
              </li>
              <li>
                <NavLink to="/admin/contacts" className="hover:text-blue-300 transition duration-300">
                  Contacts
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <div className="p-6 bg-gray-900 min-h-screen text-white">
        <Outlet />
      </div>
    </>
  );
};

export default AdminLayout;
