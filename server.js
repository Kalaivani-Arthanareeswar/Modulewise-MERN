const express = require("express");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const app = express();
const mongoose = require("mongoose");
const routerURL=require("./router/route")

//use cors to allow request from frontend

app.use(cors());
app.use(express.json());
app.use('/app',routerURL)

const user = {
  email: "admin@login.com",
  password: "admin123",
};

//Database string

if(mongoose.connect("mongodb+srv://rkalai92:Kalai_12345@cluster0.ev42l.mongodb.net/Mernstack_Integration?retryWrites=true&w=majority&appName=Cluster0"))
{
    console.log("Database has connected in Atlas");
}

app.post("/login", (req, res) => {
  const { email, password } = req.body; // from frontend form

  // checking the front end email password with backend
  if (email !== user.email || password !== user.password) {
    return res.status(401).json({ message: "Invalid Email or Password" });
  }
  //create a jwt if email and password was correct
  const token = jwt.sign({ email: user.email }, "your_secret_key", {
    expiresIn: "1h",
  });

  res.json({ token }); //send token to browser that is frontend form
});

app.listen(4040, () => {
  console.log("Server is running on port 4040");
});
