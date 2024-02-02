const express = require("express");
const pool = require("../modules/pool");
const router = express.Router();

router.get("/events", (req, res) => {
  // GET route code here
  const sqlText = `
    SELECT "posts"."id", "posts"."host", "posts"."event_name", "posts"."cost" , "posts"."time", "posts"."description", "posts"."event_size", "posts"."image", "posts"."is_highlighted_event", "posts"."contact_id", "tags"."tag_name", "posts"."admin_approved"
    FROM "posts"
    LEFT JOIN "post_tags"
    ON "post_tags"."post_id" = "posts"."id"
    LEFT JOIN "tags" 
    ON "tags"."id" = "post_tags"."tag_id";
    `;

  pool
    .query(sqlText)
    .then((result) => {
      res.send(result.rows);
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
router.get("/:id", (req, res) => {
  const getSelectedEvent = `
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
            "image"=$7
        
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
  console.log("in POST query");

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
    console.log('in PUT query')
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
        console.log('PUT /koalas:id failed', dbError)
        res.sendStatus(500);
    })
  });





  





module.exports = router;
