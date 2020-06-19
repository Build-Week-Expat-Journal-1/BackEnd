const moment = require("moment");

exports.up = async function (knex) {
  await knex.schema.createTable("posts", (tbl) => {
    tbl.increments("id").notNullable();
    tbl.string("category").notNullable();
    tbl.text("story").notNullable();
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
    tbl.string("photo").notNullable();
  });
};

exports.down = async function (knex) {
  await knex.schema.dropTableIfExists("posts");
};
