const {signupSchema, loginSchema}= require('../auth/auth.validation')
const {validateBody}= require('../../middlewares/body.validator')
const express = require('express')
const router = express.Router()
const {signUp,login} = require('./auth.controller')


router.post('/signup', validateBody(signupSchema),signUp)
router.post('/login',validateBody(loginSchema), login)

module.exports = router


