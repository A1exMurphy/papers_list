const express = require("express");
const pool = require("../modules/pool");
const router = express.Router();

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