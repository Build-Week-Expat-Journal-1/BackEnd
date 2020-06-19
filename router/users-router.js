const express = require('express')
const router = express.Router();

const Users = require('./users-model.js')

const restricted = require("../auth/restricted-middleware.js");

router.get('/', restricted, async (req, res) => {  
    try {
        const found = await Users.findUsers()
        if (found) {
            res.status(200).json(found)
        } else {
            res.status(401).json('No users found in the database')
        }
    }
    catch (error) {
        res.status(500).json(error)
    }
})



module.exports = router;