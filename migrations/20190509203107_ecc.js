
exports.up = function(knex, Promise) {
    return knex.schema.createTable('ecc', table => {
        table.increments('id').primary
        table.string('center_name').unique
        table.string('ph_number').unique
        table.string('email').unique
        table.string('address')
        table.string('suburb')
        table.string('description')
        table.string('photo')
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('ecc')
};
