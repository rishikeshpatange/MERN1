import React, { useState } from "react";
import {useNavigate} from "react-router-dom";

const register = () => {

  const navigate = useNavigate()

  const [user, setUser] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
  });

  const handleinput = (e) => {
    // console.log(e)
    let name = e.target.name;
    let value = e.target.value;

    setUser({
      ...user,
      [name]: value,
    });
  };

  const URI = "http://localhost:5000/api/auth/register";

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(user);

    try {
      // conect to backend
      const response = await fetch(URI, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      if (response.ok) {
        setUser({
          username: "",
          email: "",
          phone: "",
          password: "",
        });
        navigate("/login")
      }
    } catch (error) {
      console.log("resgiter", error);
    }
  };

  return (
    <div className="registeration-form">
      <h1>registeration form</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">username</label>
          <input
            type="text"
            name="username"
            id="username"
            placeholder="username"
            required
            value={user.username}
            onChange={handleinput}
          />
        </div>
        <div>
          <label htmlFor="email">email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="email"
            required
            value={user.email}
            onChange={handleinput}
          />
        </div>
        <div>
          <label htmlFor="phone">phone</label>
          <input
            type="number"
            name="phone"
            id="phone"
            placeholder="phone"
            required
            value={user.phone}
            onChange={handleinput}
          />
        </div>
        <div>
          <label htmlFor="phone">password</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="password"
            required
            autoComplete="false"
            value={user.password}
            onChange={handleinput}
          />
        </div>
        <br />
        <button type="submit">Register now</button>
      </form>
    </div>
  );
};

export default register;
