const {Router} = require("express")
const profileRouter = require('./profile.route')


const router = Router()

router.use('/profile', profileRouter)

module.exports = router



