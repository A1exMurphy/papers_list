const express = require("express");
const pool = require("../modules/pool");
const router = express.Router();

/**
 * GET route template
 */
router.get("/", (req, res) => {
  // GET route code here
const eventsArry = []
  let sqlText = `
  SELECT "posts"."id", "posts"."host", "posts"."event_name", "posts"."cost" , "posts"."time", "posts"."description", "posts"."event_size", "posts"."image","posts"."comments", "posts"."is_highlighted_event", "posts"."contact_id", "tags"."tag_name", "posts"."admin_approved"
  FROM "posts"
  LEFT JOIN "post_tags"
  ON "post_tags"."post_id" = "posts"."id"
  LEFT JOIN "tags" 
  ON "tags"."id" = "post_tags"."tag_id"
  WHERE "posts"."admin_approved" = 'approved'
  `
 

  pool.query(sqlText)
    .then((result) => {
      
      eventsArry.push(result.rows)

      sqlText = `SELECT "posts"."id", "posts"."host", "posts"."event_name", "posts"."cost" , "posts"."time", "posts"."description", "posts"."event_size", "posts"."image", "posts"."comments", "posts"."is_highlighted_event", "posts"."contact_id", "tags"."tag_name", "posts"."admin_approved"
      FROM "posts"
      INNER JOIN "post_tags"
      ON "post_tags"."post_id" = "posts"."id"
      INNER JOIN "tags" 
      ON "tags"."id" = "post_tags"."tag_id"
      WHERE "posts"."is_highlighted_event" = true;`
      // console.log('eventarray', eventsArry);
    
      
      pool.query(sqlText)
        .then((result) => {
         
          
          
          eventsArry.push(result.rows)
       
        })
      res.send(result.rows)
    })
        .catch((err) => {
          console.log(err, 'error in POST query')
          res.sendStatus(500)
        })
        
     
})

/**
 * POST route template
 */
router.post("/", (req, res) => {
  // POST route code here
});

module.exports = router;
