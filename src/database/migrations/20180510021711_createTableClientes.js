
exports.up = function(knex, Promise) {
  return knex
  	.schema
  	.createTable('clientes', function(t) {
  		t.increments();// 
  		t.string('nombre');
  		t.string('responsable');
  		t.integer('telefono');
      	t.string('direccion');
  		t.timestamp('fecha_registro')
  	     .notNullable()
  	     .defaultTo(knex.fn.now());
  	});
};

exports.down = function(knex, Promise) {
  return knex
    .schema
    .dropTableIfExists('clientes');
};