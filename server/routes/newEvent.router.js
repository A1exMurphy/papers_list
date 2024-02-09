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
    req.body.host,
    req.body.event_name,
    req.body.cost,
    req.body.time,
    req.body.location,
    req.body.description,
    req.body.website,
    req.body.event_size,
     fileUrl,
    req.body.comments,
  ];
  pool
    .query(insertNewEvent, newEventValues)
    .then((result) => {
      res.send({id: result.rows[0].id});
    })
    .catch((err) => {
      console.log(err, "error in POST query");
      res.sendStatus(500);
    });
});

module.exports = router;
