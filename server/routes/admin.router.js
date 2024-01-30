const express = require("express");
const pool = require("../modules/pool");
const router = express.Router();

router.get("/", (req, res) => {
    // GET route code here
    const sqlText = `
    SELECT "posts"."id", "posts"."host", "posts"."event_name", "posts"."cost" , "posts"."time", "posts"."description", "posts"."event_size", "posts"."image", "posts"."is_highlighted_event", "posts"."contact_id", "tags"."tag_name", "posts"."admin_approved"
    FROM "posts"
    LEFT JOIN "post_tags"
    ON "post_tags"."post_id" = "posts"."id"
    LEFT JOIN "tags" 
    ON "tags"."id" = "post_tags"."tag_id";
    `
   
  
    pool.query(sqlText)
      .then((result) => {
        res.send(result.rows)
        
  
      })
      .catch((dbErr) => {
        console.log("GET /api/admin fail:", dbErr);
        res.sendStatus(500);
      });
  });

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