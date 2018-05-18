const { Model } =  require('objection')

class Productos extends Model{
	static get tableName() {
		return 'productos'
	}
}

module.exports = Productos