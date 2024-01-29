const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {
  // GET route code here
  const sqlText = `
  SELECT "posts"."id", "posts"."host", "posts"."event_name", "posts"."cost" , "posts"."time", "posts"."description", "posts"."event_size", "posts"."image", "posts"."is_highlighted_event", "posts"."contact_id", "tags"."tag_name"
  FROM "posts"
  INNER JOIN "post_tags"
  ON "post_tags"."post_id" = "posts"."id"
  INNER JOIN "tags" 
  ON "tags"."id" = "post_tags"."tag_id"
  `
 

  pool.query(sqlText)
    .then((result) => {
      res.send(result.rows)
      
    })
    .catch((dbErr) => {
      console.log('GET /api/eventfeed fail:', dbErr)
      res.sendStatus(500)
    })
});

/**
 * POST route template
 */
router.post('/', (req, res) => {
  // POST route code here
});

module.exports = router;
