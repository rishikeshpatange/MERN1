import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


const Login = () => {

  const navigate = useNavigate();

  const [user, setUser] = useState({
    email: "",
    password: ""
  })

  const handelinput = (e)=>{
    let name = e.target.name;
    let value = e.target.value;

    setUser({
      ...user,
      [name]: value,
    })
  }

  const URI = "http://localhost:5000/api/auth/login";

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
          email: "",
          password: "",
        });
        navigate("/")
        alert("Logged in Succefully");
      }
      else{
        console.log("login form", error);
        alert("Invalid cred");
      }
    } catch (error) {
        console.log("Invalid cred");
    }
  };

  return (
    <div>
      Login
      <form  onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="email"
            required
            value={user.email}
            onChange={handelinput}
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
            onChange={handelinput}
          />
        </div>
        <br />
        <button type="submit">Login now</button>
      </form>
    </div>
  );
};

export default Login;
