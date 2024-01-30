const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();


/**
 * GET route template
 */
router.get('/:id', (req, res) => {
    const getSelectedEvent = 
    `
    SELECT * FROM "posts"
        LEFT JOIN "post_tags"
            ON "posts"."id"="post_tags"."post_id"
        LEFT JOIN "tags"
            ON "post_tags"."tag_id"="tags"."id"
        WHERE "id" = $1
    `
    postID = [req.params.id]
   
  
    pool.query(getSelectedEvent, postID)
      .then((result) => {
        res.send(result.rows[0])
        
  
      })
      .catch((err) => {
        console.log("GET /api/eventfeed fail:", err);
        res.sendStatus(500);
      });
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
//not sure if the happy path is using req.body.id or req.params.id
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


//initiate DELETE query for selected id
router.delete('/:id', (req, res) => {
    const query = `
      DELETE FROM "posts"
      WHERE "id" = $1;
    `;
    const values = [req.params.id];
  
    pool
      .query(query, values)
      .then(result => {
        res.sendStatus(201);
      })
      .catch((err) => {
        console.error('DELETE route failed:', err);
        res.sendStatus(500);
      });
  });

module.exports = router;