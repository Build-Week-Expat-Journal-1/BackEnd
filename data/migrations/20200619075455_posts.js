const moment = require("moment");

exports.up = async function (knex) {
  await knex.schema.createTable("posts", (tbl) => {
    tbl.increments();
    tbl.string("category").notNullable();
    tbl.string("story").notNullable();
    tbl
      .string("posted_date")
      .defaultTo(moment().format("YYYY-MM-DD HH:mm:ss"))
      .notNullable();
    tbl.string("photo");
  });
};

exports.down = async function (knex) {
  await knex.schema.dropTableIfExists("posts");
};
