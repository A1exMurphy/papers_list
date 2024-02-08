import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import PaidIcon from '@mui/icons-material/Paid';
import "./Modal.css";

export default function Modal({ closeModal }) {
  const dispatch = useDispatch();
  const singleEvent = useSelector((store) => store.selectedEvent.selectedEvent);
    const tags = useSelector((store) => store.tags);
    
  
    useEffect(() => {
        dispatch({type: 'FETCH_EVENTS'});
    }, [])
    return (
        <>
            <div className="modal-background">
                <div className="modal-container">
                    <button className="close-btn" type="close" onClick={() => {console.log("closeModal"); closeModal(false);}}>x</button>
                    <div className="modal-title">
                        <header>{singleEvent.event_name}</header>
                    </div>
                    <div className="modal-body">
                        <p>{singleEvent.description}</p>
                    </div>
                    <div className="modal-img">
                        <img src={singleEvent.image} alt="" />
                    </div>
                    <div className="modal-info">
                        <div className="people-alt-icon">
                            <PeopleAltIcon />
                        </div>
                        <div className="modal-event-size">
                            {singleEvent.event_size === "small" ? <span className="small-event">Small</span> : singleEvent.event_size === "medium" ? <span className="medium-event">Medium</span> : <span className="large-event">Large</span>}

                            {/* Below is the code for the tooltips, the code above
                            is for the display next to the icon on the modal */}
                            
                            
                        </div>

                        <div className="modal-event-cost">
                            {singleEvent.cost === true ? <span className="paid">$ Paid </span> : <span className="free">$ Free</span>}
                        </div>
                        <div className="modal-date">
                            <span>{singleEvent.time}</span>
                        </div>
                        <div className="modal-host">
                            <span>Hosted by {singleEvent.host}</span>
                        </div>
                        {singleEvent.is_highlighted === true ? <span>Highlighted Event</span> : <></>}
                    </div>
                </div>
            </div>
        </>
    )
}
