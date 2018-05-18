
exports.up = function(knex, Promise) {
	return knex
  	.schema
  	.table('username', function(t) {
  		t.integer('idsucursal')
  		 .unsigned()
  		 .references('id')
  		 .inTable('sucursal')
  	})
  
};

exports.down = function(knex, Promise) {
	return knex
  	.schema
  	.table('username', function(t){
  		t.dropForeign('idsucursal')
  		t.dropColumn('idsucursal')
  	})
};
