const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();



router.get('/:id', (req, res) => {
    const getSelectedEvent = 
    `
    SELECT * FROM "tags";
    `
    postID = [req.params.id]
   
  
    pool.query(getSelectedEvent, postID)
      .then((result) => {
        res.send(result.rows)
        

      })
      .catch((err) => {
        console.log("error in GET query", err);
        res.sendStatus(500);
      });
});


router.post('/event', (req, res) => {
  const submitEventTags =
  `
  INSERT INTO "post_tags" (
    "post_id", "tag_id"
    )
    VALUES (
    '$1', '$2'
    )
  `

  eventTagValues = [tagIDs]
  /**expected array
   * tags = [
   * {id:1, tagName: tech},
   * {id:2, tagName: buisness}
   * ]
   **/
  const tagIDs = () => {for( let i = 0; i < tagsArray.length; i++ ) {
    //if the Array has more than one object, we need to add to the values of the query
    if( i < tagsArray.length-1)  {
      submitEventTags += 
      `
      (${post_id}, ${tagsArray[i].id}),
      `;
    } else if ( i  === tagsArray.length-1) {
      submitEventTags += 
      `
      (${post_id}, ${tagsArray[i].id});
      `
    }
  }
  return submitEventTags}
})


//initiate DELETE query for selected id
router.delete('/:id', (req, res) => {
    const query = `
      DELETE FROM "tags"
      WHERE "id" = $1;
    `;
    const tagID = [req.params.id];
  
    pool
      .query(query, tagID)
      .then(result => {
        res.sendStatus(201);
      })
      .catch((err) => {
        console.error('DELETE route failed:', err);
        res.sendStatus(500);
      });
  });

module.exports = router;