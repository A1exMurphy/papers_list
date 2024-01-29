const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {
  // GET route code here
  
});

/**
 * POST route template
 */
//user submitted inputs POSTed to create new event with pending admin_approved
router.post('/', (req, res) => {
    console.log('in POST query')

    const insertNewEvent = 
    `
        INSERT INTO "posts" (
            "host",
            "event_name",
            "cost",
            "time",
            "description",
            "event_size",
            "image"
        )
            VALUES ($1, $2, $3, $4, $5, $6, $7)
    `
    newEventValues = [
        req.body.host,
        req.body.event_name,
        req.body.cost,
        req.body.time,
        req.body.description,
        req.body.event_size,
        req.body.image
    ]

        pool.query(insertNewEvent, newEventValues)
            .then((result) => {
                res.sendStatus(201)
            })
            .catch((err) => {
                console.log(err, 'error in POST query')
                res.sendStatus(500)
            })
});

module.exports = router;
