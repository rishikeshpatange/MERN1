import "../src/App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import { Login } from "./pages/Login";
import Register from "./pages/Register";
import Error from "./pages/Error";
import Logout from "./pages/Logout";
import Service from "./pages/Service";
import Contact from "./pages/Contact";
import AdminLayout from "./components/layouts/Admin-layout";
import AdminUsers from "./pages/AdminUsers";
import AdminContact from "./pages/AdminContact";
import AdminUpdate from "./pages/AdminUpdate";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/service" element={<Service />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Error />} />
          <Route path="/admin" element={<AdminLayout />}>
            <Route path="users" element={<AdminUsers />} />
            <Route path="contacts" element={<AdminContact />} />
            <Route path="users/:id/edit" element={<AdminUpdate />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
