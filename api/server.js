const configWare = require("./server-config");
const express = require("express");
const server = express();
const apiRouter = require("./api-router.js");
const postsRouter = require("../posts/posts.router");
const usersRouter = require("../users/users-router");
const authRouter = require("../auth/auth-router");
configWare(server);

server.get("/", (req, res) => {
  res.json({ api: "Server Online" });
});

server.use("/api", apiRouter);
server.use("/api/auth", authRouter)
server.use("/api/posts", postsRouter);
server.use("/api/users", usersRouter)

module.exports = server;
