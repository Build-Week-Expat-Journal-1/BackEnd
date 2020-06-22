const moment = require("moment");

exports.up = async function (knex) {
  await knex.schema.createTable("posts", (tbl) => {
    tbl.increments();
    tbl.string("category").notNullable();
    tbl.string("story").notNullable();
    tbl
      .string("posted_date")
      .defaultTo(moment().format("YYYY-MM-DD HH:mm:ss"))
      .notNullable()
      .unique();
    tbl
      .integer("user_id")
      .notNullable()
      .references("id")
      .inTable("users")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
  });
};

exports.down = async function (knex) {
  await knex.schema.dropTableIfExists("posts");
};
