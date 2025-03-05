import React, { useState } from "react";
import {useNavigate} from "react-router-dom"


const Register = () => {
  
  const URI = "http://localhost:5000/api/auth/register"

  const [user, setUser] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
  });

  // Navvigate to login page after register

  const navigate = useNavigate();

  // handling inpput values
  const handleInput = (e) => {
    // console.log(e);
    let name = e.target.name;
    let value = e.target.value;

    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(user);

    try {
      
    // connect to backend
    const response = await fetch(URI,{
      method: "POST",
      headers:{
       "Content-Type": "application/json",
      },
      body: JSON.stringify(user)
    });

    if(response.ok){
      setUser({
        username: "",
        email: "",
        phone: "",
        password: "",
      })
      navigate("/login")
    }
    console.log(response);

  } catch (error) {
    console.log("register", error)
      
  }

  };

  return (
    <div className="registeration-form">
      <h1>Registeration form</h1>
      <br />
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
            onChange={handleInput}
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="email"
            required
            value={user.email}
            onChange={handleInput}
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
            autoComplete="false"
            value={user.phone}
            onChange={handleInput}
          />
        </div>
        <div>
          <label htmlFor="password">password</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="password"
            required
            autoComplete="false"
            value={user.password}
            onChange={handleInput}
          />
        </div>
        <br />
        <button type="submit">Register now</button>
      </form>
    </div>
  );
};

export default Register;
