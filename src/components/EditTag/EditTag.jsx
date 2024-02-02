import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom/cjs/react-router-dom.min";
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

export default function EditTags() {

    useEffect(() => {
        setOpen(true)
        window.scrollTo(0, 0);
    }, []);


    const EditTag = useSelector((store) => store.editTag)
    console.log('EditTag',EditTag);

    const dispatch = useDispatch()

    const history = useHistory()

    const params = useParams()

    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(true);

    const handleClose = () => setOpen(false);

    console.log('params', params.id);

    useEffect(() => {
          dispatch({
              type: "FETCH_TAG_TO_EDIT",
              payload: params.id
          });
        window.scrollTo(0, 0);
    }, []);

    const handleTagNameChange = (tag_name) => {
        dispatch({
            type: 'CHANGE_TAG_NAME',
            payload: tag_name
        })
    }

    const applyEdits = (e) => {
        e.preventDefault()

        dispatch({
            type: "SUBMIT_EDIT_TAG",
            payload: EditTag

        })
history.push("/eventarchive")
    }

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
                        Edit Tag
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        <form>
                            <input
                                className="input"
                                id="outlined-controlled"
                                type='onSubmit'
                                value={EditTag.tag_name || ''}
                                onChange={(e) => handleTagNameChange(e.target.value)}
                            />
                       
                        <br />
                        <br />

                            <button onClick={applyEdits}>Submit</button>
                        </form>
                        
                     
                    </Typography>
                </Box>
            </Modal>
        </div>
    )



}