const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();


/**
 * GET route template
 */



router.get('/:id', (req, res) => {
    const getSelectedEvent = 
    `
    SELECT * FROM "tags";
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