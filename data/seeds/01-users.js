
exports.seed = function(knex) {
  return knex("users").truncate()
    .then(function () {
      // Inserts seed entries
      return knex("users").insert([
        {id: 1, username: "Frodo", email: "frodo@fellowship.com", password: "dummypassword" },
        {id: 2, username: "Samwise", email: "sam@fellowship.com", password: "dummypassword" },
        {id: 3, username: "Meriadoc", email: "merry@fellowship.com", password: "dummypassword" },
        {id: 4, username: "Peregrin", email: "pippin@fellowship.com", password: "dummypassword" },
        {id: 5, username: "Gandalf", email: "gandalf@fellowship.com", password: "dummypassword" },
        {id: 6, username: "Aragorn", email: "aragorn@fellowship.com", password: "dummypassword" },
        {id: 7, username: "Legolas", email: "Legolas@fellowship.com", password: "dummypassword" },
        {id: 8, username: "Gimli", email: "gimli@fellowship.com", password: "dummypassword" },
        {id: 9, username: "Boromir", email: "boromir@fellowship.com", password: "dummypassword" },
        {id: 10, username: "Faramir", email: "faramir@soldiersofgondor.com", password: "dummypassword" },
      ]);
    });
};
