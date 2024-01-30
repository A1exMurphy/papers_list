const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();


/**
 * POST route template
 */
//user submitted inputs POSTed to create new event with pending admin_approved
router.post('/', (req, res) => {
    console.log('in POST query')

    const insertcontact = 
    `
        INSERT INTO "user_details" (
            "email",
            "phone",
            "linkedIn",
            "additional_info"
        )
            VALUES ($1, $2, $3, $4)
    `
    contactValues = [
        req.body.email,
        req.body.phone,
        req.body.linkdIn,
        req.body.additional_info,
    ]

        pool.query(insertcontact, contactValues)
            .then((result) => {
                res.sendStatus(201)
            })
            .catch((err) => {
                console.log(err, 'error in POST query')
                res.sendStatus(500)
            })
});

module.exports = router;