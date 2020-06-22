const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const Users = require("../users/users-model");

router.post("/register", async (req, res) => {
  let user = req.body;
  console.log(req.body);
  const hash = bcrypt.hashSync(user.password, 10);
  user.password = hash;

  try {
    const newUser = await Users.add(user);
    if (newUser) {
      res.status(201).json(`User ${user.username} has been registered!`);
    } else {
      res.status(404).json("Unable to add new User");
    }
  } catch {
    res.status(500).json("Error with Database");
  }
});

router.post("/login", async (req, res) => {
  let { username, password } = req.body;

  try {
    const user = await Users.findBy({ username }).first();
    if (user && bcrypt.compareSync(password, user.password)) {
      const token = signToken(user);
      res.status(200).json({ message: `Welcome, ${user.username}!`, token });
    } else {
      res.status(401).json({ message: "Invalid Credentials" });
    }
  } catch (error) {
    res.status(500).json(error);
  }
});

function signToken(user) {
  const payload = {
    username: user.username,
  };

  const jwtSecret = process.env.JWT_SECRET || "There is a secret";
  const options = {
    expiresIn: "1h",
  };

  return jwt.sign(payload, jwtSecret, options);
}

module.exports = router;
