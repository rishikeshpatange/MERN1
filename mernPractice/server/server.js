require("dotenv").config()
const express = require("express");
const cors = require("cors")
const app = express();
const authRoute = require("./routes/auth-router");
const contactRoute = require("./routes/contact-router");
const connectDb = require("./utilis/db");


// handling cors policy
const corsOptions = {
  origin: "http://localhost:5173",
  methods: "GET, POST, PUT, DELETE, PATCH, HEAD",
  credential: true
}

app.use(cors(corsOptions));

// connect to db
app.use(express.json());

app.use("/api/auth", authRoute);
app.use("/api/form", contactRoute);

const PORT = 5000;


connectDb().then(() => {
  app.listen(PORT, ()=>{
    console.log(`server is runing at port ${PORT}`)
  })
})

