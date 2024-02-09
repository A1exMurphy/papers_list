const express = require("express");
const pool = require("../modules/pool");
const router = express.Router();
const {
  rejectUnauthenticated,
} = require("../modules/authentication-middleware");
const cloudinaryUpload = require("../modules/cloudinary.config");

/**
 * POST route template
 */
//user submitted inputs POSTed to create new event with pending admin_approved
router.post("/event", cloudinaryUpload.single("image"), async (req, res) => {
  console.log("in POST query");
  const fileUrl = req.file.path;

  // const userId = req.user.id; < -- Logged in user?

  const insertNewEvent = `
        INSERT INTO "posts" (
            "host",
            "event_name",
            "cost",
            "time",
            "location",
            "description",
            "website",
            "event_size",
            "image",
            "comments"
        )

            VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)

            RETURNING "id"
    `;
    
  newEventValues = [
    req.body.eventForm.host,
    req.body.eventForm.event_name,
    req.body.eventForm.cost,
     req.body.eventForm.time,
    req.body.eventForm.location,
    req.body.eventForm.description,
    req.body.eventForm.website,
    req.body.eventForm.event_size,
     fileUrl,
    req.body.eventForm.comments,
  ];
console.log("new event values", newEventValues);
  pool
    .query(insertNewEvent, newEventValues)
    .then((result) => {
      res.send({id: result.rows[0].id});
      const postID = result.rows[0].id;
      const tagsArray = req.body.tagInput;
      const postTagsQuery = newPostTagsQuery (postID, tagsArray);
      
      
      pool.query(postTagsQuery)
          .then((result) => {
            res.sendStatus(201)
          })
          .catch((err) => {
            console.log('Error in postTagsQuery', err)
            res.sendStatus(500);
          })

    })
    .catch((err) => {
      console.log(err, "error in POST query");
      res.sendStatus(500);
    });
    
});

/**
 * this function takes in an array of cards
 * it's goal is to create a query to insert multiple rows in the pitches_cards table
 * since a single pitch could have multiple cards
 * */
function newPostTagsQuery(postID, tagsArray) {
  let postTagsQuery = `
  INSERT INTO "post_tags" (
    "post_id", "tag_id"
    )
    VALUES 
  `;
  for (let i = 0; i < tagsArray.length; i++) {
    // adds the appropriate ids
    if (i < cardsArray.length - 1) {
      postTagsQuery += `
      (${postID}, ${tagsArray[i].post_id}),
    `;
      // adds the appropriate ids and a semi colon
    } else if (i === tagsArray.length - 1) {
      postTagsQuery += `
      (${postID}, ${tagsArray[i].tag_id});
      `;
    }
  }
  return postTagsQuery;
}


module.exports = router;
