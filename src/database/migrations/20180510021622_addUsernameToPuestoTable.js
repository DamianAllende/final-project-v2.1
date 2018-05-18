
exports.up = function(knex, Promise) {
	return knex
  	.schema
  	.table('username', function(t) {
  		t.integer('idpuesto')
  		 .unsigned()
  		 .references('id')
  		 .inTable('puesto')
  	})
  
};

exports.down = function(knex, Promise) {
	return knex
  	.schema
  	.table('username', function(t){
  		t.dropForeign('idpuesto')
  		t.dropColumn('idpuesto')
  	})
};

