
exports.up = function(knex, Promise) {
  return knex.schema.createTable('waitlist', table => {
      table.increments('child_id')
      table.increments('ecc_id')
      table.increments('rank_ecc')
      table.increments('rank_parent')
  })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('waitlist')
};
