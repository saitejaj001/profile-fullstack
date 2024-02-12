const {Router}  = require('express')
const {getAllSkills, getAllProjects} = require('../controller/profile.controller')
const {wrapErrorHandler} = require("../utils/error");

const router = Router()


router.get('/getAllSkills',wrapErrorHandler(getAllSkills))
router.get('/getAllProjects',wrapErrorHandler(getAllProjects))

module.exports = router;
