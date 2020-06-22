const router = require("express").Router();

const authRouter = require("../auth/auth-router");
const usersRouter = require("../users/users-router");
const postsRouter = require("../posts/posts.router");

const restricted = require("../auth/restricted-middleware.js");

router.use("/auth", authRouter);
router.use("/users", restricted, usersRouter);
router.use("/posts", postsRouter);

router.get("/", (req, res) => {
  res.json({ api: "Server Online" });
});

module.exports = router;
