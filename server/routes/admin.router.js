const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/:id', (req, res) => {
  // GET route code here
  
});

/**
 * PUT route template
 */
//submit PUT request for selected event with new or existing values
router.put('/:id', (req, res) => {
    console.log('in PUT query')

    const insertNewEvent = 
    `
    UPDATE "posts" 
	    SET
            "host"=$1,
            "event_name"=$2,
            "cost"=$3,
            "time"=$4,
            "description"=$5,
            "event_size"=$6,
            "image"=$7
        
    WHERE "id" = $8;
    `

    newEventValues = [
        req.body.host,
        req.body.event_name,
        req.body.cost,
        req.body.time,
        req.body.description,
        req.body.event_size,
        req.body.image,
        req.body.id
    ]

        pool.query(insertNewEvent, newEventValues)
            .then((result) => {
                res.sendStatus(201)
            })
            .catch((err) => {
                console.log(err, 'error in PUT query')
                res.sendStatus(500)
            })
});

module.exports = router;