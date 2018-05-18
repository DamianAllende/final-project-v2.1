const { Model } =  require('objection')

class Clientes extends Model{
	static get tableName() {
		return 'clientes'
	}
}

module.exports = Clientes