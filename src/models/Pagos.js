const { Model } =  require('objection')

class Pagos extends Model{
	static get tableName() {
		return 'pagos'
	}
}

module.exports = Pagos