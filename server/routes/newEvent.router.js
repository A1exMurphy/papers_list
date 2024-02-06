const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const cloudinaryUpload = require("../modules/cloudinary.config");


/**
 * POST route template
 */
//user submitted inputs POSTed to create new event with pending admin_approved
router.post('/', cloudinaryUpload.single("file"), async (req, res) => {
    console.log('in POST query')
    const fileUrl = req.file.path;

    // const userId = req.user.id; < -- Logged in user?

    const insertNewEvent = 
    `
        INSERT INTO "posts" (
            "host",
            "event_name",
            "cost",
            "time",
            "description",
            "event_size",
            "image"
        )
            VALUES ($1, $2, $3, $4, $5, $6, $7)
    `
    newEventValues = [
        req.body.host,
        req.body.event_name,
        req.body.cost,
        req.body.time,
        req.body.description,
        req.body.event_size,
        fileUrl,
        // userId
    ]

        pool.query(insertNewEvent, newEventValues)
            .then((result) => {
                res.sendStatus(201)
            })
            .catch((err) => {
                console.log(err, 'error in POST query')
                res.sendStatus(500)
            })
});

router.post('/', (req, res) => {
    console.log('in POST query')
  

    // const userId = req.user.id; < -- Logged in user?

    const insertNewEvent = 
    `
        INSERT INTO "post_tags" (
            "post_id",
            "tag_id",
          
        )
            VALUES ($1, $2, $3, $)
    `
    newEventValues = [
        req.body.host,
        req.body.event_name,
        req.body.cost,
        req.body.time,
        req.body.description,
        req.body.event_size,
        fileUrl,
        // userId
    ]

        pool.query(insertNewEvent, newEventValues)
            .then((result) => {
                res.sendStatus(201)
            })
            .catch((err) => {
                console.log(err, 'error in POST query')
                res.sendStatus(500)
            })
});

module.exports = router;
