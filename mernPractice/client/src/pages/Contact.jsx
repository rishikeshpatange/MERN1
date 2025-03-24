import React, { useState } from "react";

const Contact = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    message: "",
  });

  const handeinput = (e) => {
    // console.log(e)
    let name = e.target.name;
    let value = e.target.value;

    setUser({
      ...user,
      [name]: value,
    });
  };

  const URI = "http://localhost:5000/api/form/contact";

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
          message: ""
        });
      }
    } catch (error) {
      console.log("contact", error);
    }
  };


  return (
    <div>
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
              onChange={handeinput}
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
              onChange={handeinput}
            />
          </div>
          <div>
            <label htmlFor="message">message</label>
            <input
              type="text"
              name="message"
              id="message"
              placeholder="message"
              required
              value={user.message}
              onChange={handeinput}
            />
          </div>
          <br />
          <button type="submit">contact now</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
