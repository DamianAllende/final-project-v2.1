const Router = require('express').Router;
const pageRouter = Router()

pageRouter.get('/', (req, res) => {
	res.render('reactApp.ejs')
})


module.exports = pageRouter