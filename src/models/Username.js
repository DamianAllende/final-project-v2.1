const { Model } =  require('objection')

class Username extends Model{
	static get tableName() {
		return 'username'
	}
}

module.exports = Username