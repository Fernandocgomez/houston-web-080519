
exports.up = function(knex) {
    return knex.schema.createTable('penguin', function(t){
        t.increments('id')
        t.string('name')
        t.float('weight')
        t.boolean('isInLove')
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('penguin')
};
