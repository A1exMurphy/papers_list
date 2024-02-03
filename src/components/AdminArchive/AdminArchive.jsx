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
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { styled } from '@mui/material/styles';



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

    const StyledTableCell = styled(TableCell)(({ theme }) => ({
        [`&.${tableCellClasses.head}`]: {
            backgroundColor: theme.palette.common.black,
            color: theme.palette.common.white,
        },
        [`&.${tableCellClasses.body}`]: {
            fontSize: 14,
        },
    }));
    const StyledTableRow = styled(TableRow)(({ theme }) => ({
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
        // hide last border
        '&:last-child td, &:last-child th': {

        },
    }));

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
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 700 }} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>Host</StyledTableCell>
                            <StyledTableCell>Event Name</StyledTableCell>
                            <StyledTableCell>Status</StyledTableCell>
                            <StyledTableCell>Featured</StyledTableCell>


                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {events.map((event) => {
                            return (
                                <tr key={event.id}>
                                    <StyledTableCell>{event.host}</StyledTableCell>
                                    <StyledTableCell>{event.event_name}</StyledTableCell>
                                    <StyledTableCell>{event.admin_approved}</StyledTableCell>
                                    <StyledTableCell><Button onClick={() => StatusChange(event.id)}>{event.is_highlighted_event ? <StarOutlinedIcon className="star">
                                    </StarOutlinedIcon> : <StarBorderOutlinedIcon className="star"></StarBorderOutlinedIcon>}
                                    </Button></StyledTableCell>

                                </tr>
                            );
                        })}
                       

                    </TableBody>
                    </Table>
                </TableContainer>
            </div>

           
            <div className="TagsTable">
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 700 }} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>Tag Name</StyledTableCell>
                            <StyledTableCell>Delete/Edit</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {tags.map((tag) => {
                            return (
                              
                                <TableRow key={tag.id}>
                                    <StyledTableCell>{tag.tag_name}</StyledTableCell>
                                    <StyledTableCell>
                                           <Button onClick={() => deleteTag(tag)}><DeleteOutlineOutlinedIcon></DeleteOutlineOutlinedIcon></Button>
                                       
                                        
                                         <Button onClick={() => { history.push(`/edit_tag/${tag.id}`) }}><EditOutlinedIcon></EditOutlinedIcon></Button> 
                                    </StyledTableCell>
                                    </TableRow>
                                  
                              
                            );
                        })}
                    </TableBody>
                    </Table>
                    </TableContainer>
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
