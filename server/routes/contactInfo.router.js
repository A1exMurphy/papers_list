const express = require("express");
const pool = require("../modules/pool");
const router = express.Router();


//GET contact info for an existing event
router.get("/", (req, res) => {
  console.log("in GET for contact info with id:", req.body)
})
//user submitted inputs POSTed to create new event with pending admin_approved
router.post("/", async (req, res) => {
  // console.log("in POST query for new contact:", req.body);
  let connection;
  try {
    connection = await pool.connect();
    const insertContact = `
        INSERT INTO "user_details" (
            "email",
            "phone",
            "linkedIn",
            "additional_info"
        )
            VALUES ($1, $2, $3, $4)

            RETURNING "id"
    `;
    contactValues = [
      req.body.email,
      req.body.phone,
      req.body.linkedIn,
      req.body.additional_info,
    ];
    const contactResponse = await connection.query(
      insertContact,
      contactValues
    );
   const contactId = [contactResponse.rows[0].id]

    const updateContactId = `
    UPDATE "posts" 
      SET
        "contact_id" = $1
      WHERE "id" = ${req.body.eventId}
    
    `;
    await connection.query(updateContactId, contactId)
    connection.query("COMMIT");
    connection.release();
    res.sendStatus(201);
  } catch (error) {
    connection.query("ROLLBACK");
    connection.release();
    console.log("error in connection", error);
    res.sendStatus(500);
  }
});

module.exports = router;
