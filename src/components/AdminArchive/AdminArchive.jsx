import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import "./AdminArchive.css";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import AddIcon from "@mui/icons-material/Add";
import AdminTables from "./AdminTables";

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

const theme = createTheme({
  palette: {
    primary: {
      main: "#004986",
    },
  },
});

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
  const tags = useSelector((store) => store.tags);
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
      type: "ADD_TAGS",
      payload: {
        tag_name: tagName,
      },
    });
    setTagName("");
    setOpen(false);
  };

  const adminCreateEvent = () => {
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
      <AdminTables />
      {/* this component handles mapping events into status dependant tables */}
      <div className="TagsTable events-post-it">
        <table>
          <thead className="EventsTable-header">
            <tr>
              <td>Tag Name</td>
              <td>Delete/Edit</td>
            </tr>
          </thead>

          {tags.map((tag) => {
            return (
              <tr key={tag.id}>
                <td>{tag.tag_name}</td>
                <td>
                  <Button onClick={() => deleteTag(tag)}>
                    <DeleteOutlineOutlinedIcon></DeleteOutlineOutlinedIcon>
                  </Button>
                  <Button
                    onClick={() => {
                      history.push(`/edit_tag/${tag.id}`);
                    }}
                  >
                    <EditOutlinedIcon></EditOutlinedIcon>
                  </Button>
                </td>
              </tr>
            );
          })}
        </table>
      </div>
      <div className="AddTag">
        <ThemeProvider theme={theme}>
          <Button variant="contained" sx={{ width: 150 }} onClick={handleOpen}>
            {" "}
            <AddIcon />
            Add Tag
          </Button>
        </ThemeProvider>
      </div>
      <div className="CreateEvent">
        <ThemeProvider theme={theme}>
          <Button onClick={adminCreateEvent} variant="contained">
            {" "}
            <AddIcon />
            Create New Event
          </Button>
        </ThemeProvider>
      </div>
    </div>
  );
}
