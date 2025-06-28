import { promises as fsPromises } from "fs";

import User from "../models/User.mjs";
import bcrypt from "bcrypt";
import { log } from "console";

const handleNewUsers = async (req, res) => {
  const { email, username, password } = req.body;
  if (!req?.body?.username || !req?.body?.password || !req?.body?.email) {
    return res.status(400).json({ message: "all fields are required" });
  }
  console.log(`✅ The new Username is : ${req.body.username}`);

  const duplicateUser = await User.findOne({ username: username }).exec();

  if (duplicateUser)
    return res.status(409).json({ message: "Username already exists!" });
  try {
    const hashedPWd = await bcrypt.hash(password, 10);
    const newUser = await User.create({
      username: username,
      password: hashedPWd,
      email: email,
    });

    return res.status(200).json({ message: "User Created" });
  } catch (err) {
    res.status(500).json({ message: "internal server error" });
  }
};
export default handleNewUsers;
