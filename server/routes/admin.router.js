const express = require("express");
const pool = require("../modules/pool");
const router = express.Router();

router.get("/events", (req, res) => {
  // GET route code here
  const sqlText = 
    `
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

  pool
    .query(sqlText)
    .then((result) => {
      res.send(result.rows);
      console.log(result.rows);
    })
    .catch((dbErr) => {
      console.log("GET /api/admin fail:", dbErr);
      res.sendStatus(500);
    });
});

router.get("/tags", (req, res) => {
  const SqlText = `
    SELECT * FROM "tags";
    `;

  pool
    .query(SqlText)
    .then((result) => {
      res.send(result.rows);
      console.log("result", result.rows);
    })
    .catch((err) => {
      console.log("error in GET query", err);
      res.sendStatus(500);
    });
});

/**
 * GET route template
 */

router.get('/event/:id', (req, res) => {
    const getSelectedEvent = 
    `
    SELECT * FROM "posts"
        WHERE "id" = $1
    `;
  postID = [req.params.id];

  pool
    .query(getSelectedEvent, postID)
    .then((result) => {
      res.send(result.rows[0]);
    })
    .catch((err) => {
      console.log("GET /api/eventfeed fail:", err);
      res.sendStatus(500);
    });
});

router.get('/removedevents', (req, res) => {
  console.log('running removed events GET')
  const getRemovedEvents = 
  `
  SELECT * FROM "posts"
      WHERE "admin_approved" = 'delete';
  `
 
  pool.query(getRemovedEvents)
  .then((result) => {
      console.log(result.rows, 'results of removed events query')
      res.send(result.rows)
      

    })
    .catch((err) => {
      console.log("GET /removedevents fail:", err);
      res.sendStatus(500);
    });
});

router.get('/pendingevents', (req, res) => {
  console.log('running pending events GET')
  const getPendingEvents = 
  `
  SELECT * FROM "posts"
      WHERE "admin_approved" = 'pending';
  `
 
  pool.query(getPendingEvents)
  .then((result) => {
      console.log(result.rows, 'results of pending events query')
      res.send(result.rows)
      

    })
    .catch((err) => {
      console.log("GET /pending events fail:", err);
      res.sendStatus(500);
    });
});

/**
 * PUT route template
 */
//submit PUT request for selected event with new or existing values

router.put('/event/:id', (req, res) => {
    console.log('in PUT query')


  const insertNewEvent = `
    UPDATE "posts" 
	    SET
            "host"=$1,
            "event_name"=$2,
            "cost"=$3,
            "time"=$4,
            "description"=$5,
            "event_size"=$6,
            "image"=$7,
            "comments"=$8
        
    WHERE "id" = $8;
    `;
  //not sur if the happy path is using req.body.id or req.params.id
  newEventValues = [
    req.body.host,
    req.body.event_name,
    req.body.cost,
    req.body.time,
    req.body.description,
    req.body.event_size,
    req.body.image,
   req.body.comments,
    req.body.id,
  ];

  pool
    .query(insertNewEvent, newEventValues)
    .then((result) => {
      res.sendStatus(201);
    })
    .catch((err) => {
      console.log(err, "error in PUT query");
      res.sendStatus(500);
    });
});


//submit PUT query to set "remove_event"=true
router.put('/remove/:id', (req, res) => {
  console.log('in PUT query')

  const removeEvent = 
  `
  UPDATE "posts" 
  	SET
  	"admin_approved"='delete'
          
    WHERE "id" = $1;
  `
  postID = [req.params.id]

      pool.query(removeEvent, postID)
          .then((result) => {
              res.sendStatus(201)
          })
          .catch((err) => {
              console.log(err, 'error in PUT query')
              res.sendStatus(500)
          })
});

//submit PUT query to set "remove_event"=falst
router.put('/restore/:id', (req, res) => {
  console.log('in PUT query')

  const removeEvent = 
  `
  UPDATE "posts" 
  	SET
  	"admin_approved"='pending'
          
    WHERE "id" = $1;
  `
  postID = [req.params.id]

      pool.query(removeEvent, postID)
          .then((result) => {
              res.sendStatus(201)
          })
          .catch((err) => {
              console.log(err, 'error in PUT query')
              res.sendStatus(500)
          })
});
//initiate DELETE query for selected id

router.delete("/:id", (req, res) => {
  const query = `
      DELETE FROM "tags"
      WHERE "id" = $1;
    `;
  const values = [req.params.id];

  pool
    .query(query, values)
    .then((result) => {
      res.sendStatus(201);
    })
    .catch((err) => {
      console.error("DELETE route failed:", err);
      res.sendStatus(500);
    });
});

router.post("/", (req, res) => {
  console.log("in POST tags query");

  const insertNewTag = `
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

router.put('/tags/:id', (req, res) => {
    console.log('in PUT tags query')
const idToUpdate = req.params.id
    const insertNewTag = 
    `
    UPDATE "tags" 
	 SET
    "tag_name" = $1
    WHERE "id" = $2;
    `
//not sure if the happy path is using req.body.id or req.params.id
    

        pool.query(insertNewTag, [req.body.tag_name, idToUpdate])
          .then((result) => {
              console.log("sdasinasndaisudnuasdui");
                res.sendStatus(201)
            })
            .catch((err) => {
                console.log(err, 'error in PUT query')
                res.sendStatus(500)
            })
});

router.get('/tag/:id', (req, res) => {
    const getSelectedTag = 
    `
    SELECT * FROM "tags"
        WHERE "id" = $1
    `
    TagID = [req.params.id]
    console.log('params',req.params.id);
   
  
    pool.query(getSelectedTag, TagID)
      .then((result) => {
        res.send(result.rows[0])
      })
      .catch((err) => {
        console.log("GET /api/admin/tag fail:", err);
        res.sendStatus(500);
      });
});

router.put('/status/:id', (req, res) => {
  
    const sqlText = `
    UPDATE "posts"
     SET "is_highlighted_event" = NOT "is_highlighted_event"
     WHERE "id" = ${req.params.id};
      `
  
    pool.query(sqlText)
    .then((dbResult) =>{
        res.sendStatus(200);
    })
    .catch((dbError)=>{
        console.log('PUT /status:id failed', dbError)
        res.sendStatus(500);
    })
});
  

router.put('/events/:id', (req, res) => {
  console.log('in PUTttttttttte query')
const idToUpdate = req.params.id
  let insertNewTag =
    `
  UPDATE "posts" 
 SET
  "host" = $1,
  "event_name" = $2,
  "cost" = $3,
  "time" = $4,
  "location" = $5,
"description" = $6,
"website" = $7,
"event_size" = $8,
"image" = $9,
"comments" = $10,
"admin_approved" = $11,
"contact_id" = $12
  WHERE "id" = $13;
  `;
//not sure if the happy path is using req.body.id or req.params.id
  

  pool.query(insertNewTag, [req.body.host, req.body.event_name, req.body.cost, req.body.time, req.body.location, req.body.description, req.body.website,  req.body.event_size, req.body.image, req.body.comments, req.body.admin_approved, req.body.contact_id, idToUpdate])
        
          .then((result) => {
            res.sendStatus(201)
            console.log("body", req.body);
          })
          .catch((err) => {
              console.log(err, 'error in PUT query')
              res.sendStatus(500)
          })
});





  





module.exports = router;
