const { foo } = require('../../../../')

module.exports = [
	{
		method: 'GET',
		path: '/',
		handler(req, res) {
			res.json({ foo })
		}
	}
]
