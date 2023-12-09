const router = require('express').Router()
const {Demo} = require("../controller/demoController")

//routes go here
router.route('/demo').post(Demo)

module.exports = router