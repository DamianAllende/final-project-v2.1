
exports.up = function(knex, Promise) {
  return knex
  	.schema
  	.createTable('username', function(t) {
  		t.increments();// 
  		t.string('email');
  		t.string('pass');
  		t.string('nombre');
  		t.timestamp('fecha_registro')
  	     .notNullable()
  	     .defaultTo(knex.fn.now());
  	});
};

exports.down = function(knex, Promise) {
  return knex
  	.schema
  	.dropTableIfExists('username');
};