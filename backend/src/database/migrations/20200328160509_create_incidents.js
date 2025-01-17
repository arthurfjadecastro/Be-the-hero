//Create table
exports.up = function(knex) {
  return knex.schema.createTable("incidents", table => {
    table.increments();
    table.string("title").notNullable();
    table.string("description").notNullable();
    //Relationship
    table.string("ong_id").notNullable();

    table
      .foreign("ong_id")
      .references("id")
      .inTable("ongs");
  });
};

//Rollback
exports.down = function(knex) {
  return knex.schema.dropTable("incidents");
};
