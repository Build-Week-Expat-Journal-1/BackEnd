exports.seed = function (knex) {
  return knex("posts")
    .truncate()
    .then(function () {
      return knex("posts").insert([
        {
          id: 1,
          category: "Europe",
          story: "I went there",
          posted_date: "2020-06-21 20:01:20",
        },
        {
          id: 2,
          category: "North America",
          story: "they had nice burgers",
          posted_date: "2020-08-21 20:01:20",
        },
        {
          id: 3,
          category: "Asia",
          story: "the great wall is great",
          posted_date: "2020-09-21 20:01:20",
        },
      ]);
    });
};
