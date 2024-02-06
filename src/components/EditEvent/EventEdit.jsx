import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom/cjs/react-router-dom.min";
import Button from "@mui/material/Button";


export default function EditEvent() {

    const params = useParams()
    const dispatch = useDispatch()
    const history = useHistory()
    const editEvent = useSelector(store => store.editEvent)

    useEffect(() => {
        dispatch({
            type: 'FETCH_EVENT_TO_EDIT',
            payload: params.id
        })
    }, [])

    const handleHostNameChange = (host) => {
        dispatch({
            type: 'CHANGE_HOST_NAME',
            payload: host
        })
    }

    const handleEventNameChange = (event_name) => {
        dispatch({
            type: 'CHANGE_EVENT_NAME',
            payload: event_name
        })
    }

    const handleCostChange = (cost) => {
        dispatch({
            type: 'CHANGE_COST',
            payload: cost
        })
    }

    const handleTimeChange = (time) => {
        dispatch({
            type: 'CHANGE_TIME',
            payload: time
        })
    }

    const handleDateChange = (date) => {
        dispatch({
            type: 'CHANGE_DATE',
            payload: date
        })
    }

    const handleDescriptionChange = (description) => {
        dispatch({
            type: 'CHANGE_DESCRIPTION',
            payload: description
        })
    }

    const handleEventSizeChange = (event_size) => {
        dispatch({
            type: 'CHANGE_EVENT_SIZE',
            payload: event_size
        })
    }
    
    const handleImageChange = (image) => {
        dispatch({
            type: 'CHANGE_IMAGE',
            payload: image
        })
    }

    const handleStatusChange = (admin_approved) => {
        dispatch({
            type: 'CHANGE_STATUS',
            payload: admin_approved
        })
    }

    const applyEdits = (e) => {
        e.preventDefault()

        dispatch({
            type: 'SUBMIT_EVENT_EDIT',
            payload: editEvent

        })

        history.push('/eventarchive')
    }

    return (
        <div>


            <form>
                <input
                    className="input"
                    id="outlined-controlled"
                    label="First Name"
                    type="text"
                    value={editEvent.host || ''}
                    onChange={(e) => handleHostNameChange(e.target.value)}
                />
                <br />
                <br />
                <input
                    className="input"
                    id="outlined-controlled"
                    label="Last Name"
                    type="text"
                    value={editEvent.event_name|| ''}
                    onChange={(e) => handleEventNameChange(e.target.value)}
                />
                <br />
                <br />
                <input
                    className="input"
                    id="outlined-controlled"
                    label="Email"
                    type="text"
                    value={editEvent.cost || ''}
                    onChange={(e) => handleCostChange(e.target.value)}
                />
                <br />
                <br />
                <input
                    className="input"
                    id="outlined-controlled"
                    label="Phone Number"
                    type="text"
                    value={editEvent.time || ''}
                    onChange={(e) => handleTimeChange(e.target.value)}
                />
                <br />
                <br />
                <input
                    className="input"
                    id="outlined-controlled"
                    label="Address"
                    type="text"
                    value={editEvent.date || ''}
                    onChange={(e) => handleDateChange(e.target.value)}
                />
                <br />
                <br />
                <input
                    className="input"
                    id="outlined-controlled"
                    label="Zip"
                    type="text"
                    value={editEvent.description || ''}
                    onChange={(e) => handleDescriptionChange(e.target.value)}
                />
                <br />
                <br />
           
                <br />
                <br />
                <input
                    className="input"
                    id="outlined-controlled"
                    label="Description"
                    type="text"
                    value={editEvent.event_size || ''}
                    onChange={(e) => handleEventSizeChange(e.target.value)}
                />
                <br />
                <br />
                <input
                    className="input"
                    id="outlined-controlled"
                    label="Budget"
                    type="text"
                    value={editEvent.image || ''}
                    onChange={(e) => handleImageChange(e.target.value)}
                />
                <br />
                <br />


                <Button variant='contained' color='warning' type='onSubmit' onClick={applyEdits}>Submit</Button>
            </form>

        </div>
    )
    

}