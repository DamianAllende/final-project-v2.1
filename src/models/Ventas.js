const { Model } =  require('objection')

class Ventas extends Model{
	static get tableName() {
		return 'ventas'
	}
}

module.exports = Ventas