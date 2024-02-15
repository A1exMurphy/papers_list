const express = require("express");
const pool = require("../modules/pool");
const router = express.Router();


router.get("/", (req, res) => {
 
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


module.exports = router;