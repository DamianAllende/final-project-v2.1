
exports.up = function(knex, Promise) {
  return knex
  	.schema
  	.createTable('ventas', function(t) {
  		t.increments();// 
  		t.string('usuario');
  		t.string('sucursal');
  		t.string('cliente');
      t.string('tipo_pago')
      t.string('producto');
      t.float('precio');
      t.integer('cantidad');
      t.string('id_compra');
  		t.timestamp('fecha_registro')
  	     .notNullable()
  	     .defaultTo(knex.fn.now());
  	});
};

exports.down = function(knex, Promise) {
  return knex
    .schema
    .dropTableIfExists('ventas');
};