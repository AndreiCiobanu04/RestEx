const express = require("express");
const router = express.Router();
const { User } = require("../models/messagesStucture");

router.get("/allUsers", async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.json({ message: err });
  }
});

router.post("/addUser", async (req, res) => {
  const user = new User({
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone,
  });
  try {
    const savedUser = await user.save();
    res.json(savedUser);
  } catch (err) {
    res.json({ message: err });
  }
});

router.delete("/deleteUser/:userId", async (req, res) => {
  try {
    const removedUser = await User.deleteOne({ _id: req.params.userId });
    res.json(removedUser);
  } catch (err) {
    res.json({ message: err });
  }
});

router.put("/updateUser/:userId", async (req, res) => {
  try {
    const updatedUser = await User.updateOne(
      { _id: req.params.userId },
      { $set: { ...req.body } }
    );
    res.json(updatedUser);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
