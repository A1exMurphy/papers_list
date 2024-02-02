import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom/cjs/react-router-dom.min";
import "./AdminArchive.css";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import StarOutlinedIcon from '@mui/icons-material/StarOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';



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


    const StatusChange = (id) => {

        dispatch({
            type: "STATUS_CHANGE",
            payload: id
        })
    }

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
            <div className="EventsTable">
                <table>
                    <thead>
                        <tr>
                            <th>Host</th>
                            <th>Event Name</th>
                            <th>Status</th>
                            <th>Featured</th>


                        </tr>
                    </thead>
                    <tbody>
                        {events.map((event) => {
                            return (
                                <tr key={event.id}>
                                    <td>{event.host}</td>
                                    <td>{event.event_name}</td>
                                    <td>{event.admin_approved}</td>
                                    <td><Button onClick={() => StatusChange(event.id)}>{event.is_highlighted_event ? <StarOutlinedIcon className="star">
                                    </StarOutlinedIcon> : <StarBorderOutlinedIcon className="star"></StarBorderOutlinedIcon>}
                                    </Button></td>

                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>

            <div className="TagsTable">
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
                                <>
                                <tr key={tag.id}>
                                    <td>{tag.tag_name}</td>
                                    <td>
                                          <span> <Button onClick={() => deleteTag(tag)}><DeleteOutlineOutlinedIcon></DeleteOutlineOutlinedIcon></Button></span>
                                       
                                        
                                        <span> <Button onClick={() => { history.push(`/edit_tag/${tag.id}`) }}><EditOutlinedIcon></EditOutlinedIcon></Button> </span> 
                                    </td>
                                    </tr>
                                    <tr>
                                      
                                    </tr>
                                  
                                </>

                            );
                        })}
                    </tbody>

                </table>
            </div>
                 <div className="AddTag">
                <Button variant="contained" sx={{ width: 315 }} onClick={handleOpen}> + Add Tag</Button>
            </div>
            <div className="CreateEvent">
            <Button onClick={adminCreateEvent} variant = 'contained'> Create New Event</Button>
            </div>
        </div>
    );
}
