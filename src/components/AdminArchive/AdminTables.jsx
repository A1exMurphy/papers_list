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
import Paper from '@mui/material/Paper';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { styled } from '@mui/material/styles';
import RateReviewIcon from '@mui/icons-material/RateReview';


export default function AdminTables() {
    useEffect(() => {
        dispatch({ type: "FETCH_ARCHIVED_EVENTS" });
    }, []);

    const events = useSelector((store) => store.archived);
    const dispatch = useDispatch();



return (
               <>
                    <table className="EventsTable events-post-it">
                    <thead>
                        <tr>
                            <td>Host</td>
                            <td>Event Name</td>
                            <td>Status</td>
                            <td>Featured / Review</td>


                        </tr>
                    </thead>
                  
                        {events && events.map((event) => {
                            return (
                                <tr key={event.id}>
                                    <td>{event.host}</td>
                                    <td>{event.event_name}</td>
                                    <td>{event.admin_approved}</td>
                                    <td><Button onClick={() => StatusChange(event.id)}>{event.is_highlighted_event ? <StarOutlinedIcon className="star">
                                    </StarOutlinedIcon> : <StarBorderOutlinedIcon className="star"></StarBorderOutlinedIcon>}
                                    </Button> <Button onClick={() => { history.push(`/edit_event/${event.id}`) }}> <RateReviewIcon></RateReviewIcon></Button></td>

                                </tr>
                            );
                        })}
                       

                    </table></>
)}