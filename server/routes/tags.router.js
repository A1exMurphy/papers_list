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
        WHERE "posts"."id" = $1;
    `
    postID = [req.params.id]
   
  
    pool.query(getSelectedEvent, postID)
      .then((result) => {
        res.send(result.rows)
        
  
      })
      .catch((err) => {
        console.log("error in GET query", err);
        res.sendStatus(500);
      });
});

/**
 * PUT route template
 */
//submit POST request for a new tag
router.post('/', (req, res) => {
    console.log('in POST query')

    const insertNewTag = 
    `
    INSERT INTO "tags" (
        "tag_name"
    )
	    VALUES (
            $1
        );
    `

    newTagValues = [
        req.body.tag_name
    ]

        pool.query(insertNewTag, newTagValues)
            .then((result) => {
                res.sendStatus(201)
            })
            .catch((err) => {
                console.log(err, 'error in POST query')
                res.sendStatus(500)
            })
});


//initiate DELETE query for selected id
router.delete('/:id', (req, res) => {
    const query = `
      DELETE FROM "tags"
      WHERE "id" = $1;
    `;
    const tagID = [req.params.id];
  
    pool
      .query(query, tagID)
      .then(result => {
        res.sendStatus(201);
      })
      .catch((err) => {
        console.error('DELETE route failed:', err);
        res.sendStatus(500);
      });
  });

module.exports = router;