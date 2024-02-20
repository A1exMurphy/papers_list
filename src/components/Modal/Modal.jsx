import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import PersonIcon from '@mui/icons-material/Person';
import PlaceIcon from '@mui/icons-material/Place';
import PaidIcon from '@mui/icons-material/Paid';
import LinkIcon from '@mui/icons-material/Link';
import "./Modal.css";

export default function Modal({ closeModal }) {
    const dispatch = useDispatch();
    const tags = useSelector((store) => store.tags);


    useEffect(() => {
        FetchSingleEvent
    }, [])

    const singleEvent = useSelector((store) => store.selectEvent);
    console.log("singleEvent", singleEvent);

    console.log("singleEvent", singleEvent);
    const FetchSingleEvent = (id) => {
        dispatch({
            type: "FETCH_SELECTED_EVENT",
            payload: id
        });
    }
    return (
        <>
            <div className="modal-background">
                <div className="modal-container">
                    <button className="close-btn" type="close" onClick={() => { console.log("closeModal"); closeModal(false); }}>x</button>
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
                        </div>
                        <div className="paid-icon">
                            <PaidIcon />
                        </div>
                        <div className="modal-event-cost">
                            {singleEvent.cost === true ? <span className="paid">Paid</span> : <span className="free">Free</span>}
                        </div>
                        <div className="calendar-icon">
                            <CalendarMonthIcon />
                        </div>
                        <div className="modal-date">
                            <span className="time-span">{singleEvent.time}</span>
                        </div>
                        <div className="person-icon">
                            <PersonIcon />
                        </div>
                        <div className="modal-host">
                            <span>Hosted by {singleEvent.host}</span>
                        </div>
                        <div className="map-icon">
                            <PlaceIcon />
                        </div>
                        <div className="modal-location">
                            <span>{singleEvent.location}</span>
                        </div>
                        <div className="link-icon">
                            <LinkIcon />
                        </div>
                        <div className="modal-website">
                            <a href={`${singleEvent.website}`} target="_blank">Event Website</a>
                        </div>
                    </div>
                    <div className="modal-comments">
                        <h1>Cathy's Comments</h1>
                        <span>{singleEvent.comments}</span>
                    </div>
                    <h3 className="tag-header">tags:</h3>
                            {singleEvent.tags_array.map((event) => {
                                return (
                                    <div className="module-tag-list">
                                       
                                        <span> {event.tag_name}</span>
                                    </div>
                                )
                            })}
                </div>
            </div>
        </>
    )
}
