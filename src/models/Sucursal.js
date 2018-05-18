const { Model } =  require('objection')

class Sucursal extends Model{
	static get tableName() {
		return 'sucursal'
	}

	static get relationMappings() {
		const Username = require('./Username')

		return{
			username: {
				relation: Model.HasManyRelation,
				modelClass: Username,
				join: {
					from: 'sucursal.id',
					to: 'username.idsucursal'
				}
			}
		}
	}


}

module.exports = Sucursal



