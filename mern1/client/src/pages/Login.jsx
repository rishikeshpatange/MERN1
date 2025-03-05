import { useState } from "react";
import {useNavigate} from "react-router-dom"

export const Login = () => {
  const URI = "http://localhost:5000/api/auth/login";

const navigate = useNavigate();

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleInput = (e) => {
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
      const response = await fetch(URI, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      console.log("login form", response)

      if (response.ok) {
        setUser({
          email: "",
          password: "",
        });
        navigate("/")
        alert("Logged in Succefully")
      }
      else{
        alert("Invalid cred")
        console.log("Invalid cred")
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Login Form</h1>
        <div>
          <label htmlFor="email">email</label>
          <input
            type="email"
            name="email"
            id="loginemail"
            placeholder="email"
            required
            value={user.email}
            onChange={handleInput}
          />
        </div>
        <div>
          <label htmlFor="password">password</label>
          <input
            type="password"
            name="password"
            id="loginpassword"
            placeholder="password"
            required
            value={user.password}
            onChange={handleInput}
          />
        </div>

        <button type="submit">Login</button>
      </form>
    </div>
  );
};
