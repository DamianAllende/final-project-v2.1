const { Model } =  require('objection')

class Puesto extends Model{
	static get tableName() {
		return 'puesto'
	}
	static get relationMappings() {
		const Username = require('./Username')

		return{
			username: {
				relation: Model.HasManyRelation,
				modelClass: Username,
				join: {
					from: 'puesto.id',
					to: 'username.idpuesto'
				}
			}
		}
	}
}

module.exports = Puesto