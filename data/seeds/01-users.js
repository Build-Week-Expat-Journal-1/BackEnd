const bcrypt = require("bcryptjs");
const hash = bcrypt.hashSync("pass", 10);

exports.seed = function (knex) {
  return knex("users")
    .truncate()
    .then(function () {
      return knex("users").insert([
        {
          username: "Frodo",
          email: "frodo@fellowship.com",
          password: hash,
        },
        {
          username: "Samwise",
          email: "sam@fellowship.com",
          password: hash,
        },
        {
          username: "Meriadoc",
          email: "merry@fellowship.com",
          password: hash,
        },
        {
          username: "Peregrin",
          email: "pippin@fellowship.com",
          password: hash,
        },
        {
          username: "Gandalf",
          email: "gandalf@fellowship.com",
          password: hash,
        },
      ]);
    });
};
