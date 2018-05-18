const { Model } =  require('objection')

class ProductosVendidos extends Model{
	static get tableName() {
		return 'produtos_vendidos'
	}
}

module.exports = ProductosVendidos