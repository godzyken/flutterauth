const express = require('express')
const actions = require('../methods/actions')
const router = express.Router()

router.get('/', (req, res) => {
    res.send('Hello World')
})

router.get('/dashboard', (req, res) => {
    res.send('Dashboard')
})

//@desc Adding new user
//@route POST /adduser
router.post('/adduser', actions.addNew)

//@desc Tcheck the authentication
//@route POST /authenticate
router.post('/authenticate', actions.authenticate)

//@desc get the information
//@route Get /getinfo'
router.get('/getinfo', actions.getinfo)

module.exports = router