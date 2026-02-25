const bcrypt = require("bcrypt");
const User = require("../Models/signUp");
const express = require("express");
const userRouter = express.Router();

userRouter.post("/signup", async (req, res) => {
  try {
    const { username, email, password ,role} = req.body;
    const exists = await User.findOne({ email });
    if (exists) return res.status(400).json({ message: "User exists" });
    const hashedPassword = await bcrypt.hash(password, 10); 

    const newUser = new User({
    username,
    email,
    password: hashedPassword,
    role
    });

    await newUser.save();
    res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    console.log(error);
  }
});



module.exports=userRouter;