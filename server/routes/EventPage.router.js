const express = require("express");
const pool = require("../modules/pool");
const router = express.Router();

/**
 * GET route template
 */
router.get("/", (req, res) => {
  // GET route code here
  console.log("blahhhh");
 
  const eventsArry = []
  

  let sqlText = `
  SELECT
  p.id,
  p.host,
  p.event_name,
  p.cost,
  p.time,
  p.location,
  p.description,
  p.website,
  p.event_size,
  p.image,
  p.comments,
 p.admin_approved,
  p.is_highlighted_event,
  p.contact_id,
  json_agg(
      json_build_object(
          'tag_id',
          tags.id,
          'tag_name',
          tags.tag_name
      )
  ) tags_array
  FROM posts p
  LEFT JOIN post_tags pt ON p.id = pt.post_id
  LEFT JOIN tags ON pt.tag_id = tags.id
  WHERE p.admin_approved = 'approved'
GROUP BY p.id
ORDER BY p.id;
  `
 

  pool.query(sqlText)
    .then((result) => {
      
      eventsArry.push(result.rows)

      sqlText = `SELECT
      p.id,
      p.host,
      p.event_name,
      p.cost,
      p.time,
      p.location,
      p.description,
      p.website,
      p.event_size,
      p.image,
      p.comments,
     p.admin_approved,
      p.is_highlighted_event,
      p.contact_id,
      json_agg(
          json_build_object(
              'tag_id',
              tags.id,
              'tag_name',
              tags.tag_name
          )
      ) tags_array
      FROM posts p
      LEFT JOIN post_tags pt ON p.id = pt.post_id
      LEFT JOIN tags ON pt.tag_id = tags.id
      WHERE "is_highlighted_event" = true
    GROUP BY p.id
    ORDER BY p.id;
     `
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

// router.get('/selected/:id', (req, res) => {
//   console.log("blahhhh");

//   const SelectedEventArry = [];
//   let getSelectedEvent = 
//   `
//   SELECT "posts"."id", "posts"."host", "posts"."event_name", "posts"."cost" , "posts"."time", "posts"."description", "posts"."event_size", "posts"."image", "posts"."is_highlighted_event", "posts"."contact_id", "tags"."tag_name", "posts"."admin_approved"
//   FROM "posts"
//   WHERE "posts"."id" = $1;
//   `;

//  const postId = [req.params.id];

// pool
//   .query(getSelectedEvent, postId)
//   .then((result) => {
//     SelectedEventArry.push(result.rows[0])
//     console.log('result', result.rows[0]);
      
//       getSelectedEvent = 
//       `SELECT "tags"."tag_name" 
//       FROM "tags"
//       INNER JOIN "post_tags"
//       ON "post_tags"."tag_id" = "tags"."id"
//       WHERE "post_tags"."post_id" = $1;`
     
//     pool.query(getSelectedEvent, postId)
//       .then((result) => {
//         SelectedEventArry.push(result.rows)
//         res.send(SelectedEventArry)
//       })
//       .catch((err) => {
//         console.log("GET /api/eventfeed fail:", err);
//         res.sendStatus(500);
//       });
//   })
//   .catch((err) => {
//     console.log("GET /api/eventfeed fail:", err);
//     res.sendStatus(500);
//   });
// });


// /**
//  * POST route template
//  */


module.exports = router;

// `
//   SELECT "posts"."id", "posts"."host", "posts"."event_name", "posts"."cost" , "posts"."time", "posts"."description", "posts"."location", "posts"."website", "posts"."event_size", "posts"."image","posts"."comments", "posts"."is_highlighted_event", "posts"."contact_id", "tags"."tag_name", "posts"."admin_approved"
//   FROM "posts"
//   LEFT JOIN "post_tags"
//   ON "post_tags"."post_id" = "posts"."id"
//   LEFT JOIN "tags" 
//   ON "tags"."id" = "post_tags"."tag_id"
//   WHERE "posts"."admin_approved" = 'approved'
//   `

// `SELECT "posts"."id", "posts"."host", "posts"."event_name", "posts"."cost" , "posts"."time", "posts"."description", "posts"."event_size", "posts"."image", "posts"."comments", "posts"."is_highlighted_event", "posts"."contact_id", "tags"."tag_name", "posts"."admin_approved"
//       FROM "posts"
//       INNER JOIN "post_tags"
//       ON "post_tags"."post_id" = "posts"."id"
//       INNER JOIN "tags" 
//       ON "tags"."id" = "post_tags"."tag_id"
//       WHERE "posts"."is_highlighted_event" = true;`