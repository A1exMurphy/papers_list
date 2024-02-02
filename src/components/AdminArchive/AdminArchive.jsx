import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom/cjs/react-router-dom.min";
import "./AdminArchive.css";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function AdminArchive() {

  useEffect(() => {
    dispatch({ type: "FETCH_ARCHIVED_EVENTS" });
      dispatch({ type: "FETCH_TAGS" });

    window.scrollTo(0, 0);
  }, []);
    
    
   
    

  let [tagName, setTagName] = useState("");

  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);

  const handleClose = () => setOpen(false);

  const events = useSelector((store) => store.archived);
    const tags = useSelector((store) => store.tags);
   
  console.log("events", events);

  const history = useHistory();
    const dispatch = useDispatch();
    
    

  const deleteTag = (tag) => {
    dispatch({
      type: "DELETE_TAG",
      payload: tag,
    });
  };

    
    
    
    const newTag = (event) => {
        event.preventDefault();

        dispatch({
            type: "ADD_TAGS", payload: {
              tag_name: tagName
            }
        });
        setTagName('')
        setOpen(false)
    };

  
  const adminCreateEvent = () => {
    console.log("Creating new event");
    history.push("/adminnewevent");
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Add Tag
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <input
              type="text"
              value={tagName}
              placeholder="Tag"
              onChange={(event) => setTagName(event.target.value)}
            />
            <br />
            <br />

            <button id="ModalAddButton" onClick={newTag}>
              add
            </button>
          </Typography>
        </Box>
      </Modal>
      <table>
        <thead>
          <tr>
            <th>Host</th>
            <th>Event Name</th>
          </tr>
        </thead>
        <tbody>
          {events.map((event) => {
            return (
              <tr key={event.id}>
                <td>{event.host}</td>
                <td>{event.event_name}</td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <table>
        <thead>
          <tr>
            <th>Tag Name</th>
            <th>Delete/Edit</th>
          </tr>
        </thead>
        <tbody>
          {tags.map((tag) => {
            return (
              <tr key={tag.id}>
                <td>{tag.tag_name}</td>
                <td>
                  <button onClick={() => deleteTag(tag)}>delete</button>
                        <button onClick={() => { history.push(`/edit_tag/${tag.id}`) }}>edit</button>
                </td>
              </tr>
            );
          })}
        </tbody>

      </table>

      <button onClick={handleOpen}>Add Tag</button>
      <button onClick={adminCreateEvent}>Create New Event</button>

    </div>
  );
}
