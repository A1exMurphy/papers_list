import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import Modal from "../Modal/Modal";
import { Button } from "@mui/material";
import { createTheme } from "@mui/material/styles";

import "./LandingPage.css";

export default function LandingPage() {
  const [openModal, setOpenModal] = useState(false);

  const history = useHistory();
  const dispatch = useDispatch();
  const eventData = useSelector((store) => store.events.events);
  console.log("eventData", eventData);


  useEffect(() => {
    dispatch({ type: "FETCH_EVENTS" });
  }, []);

  const handleEventClick = (selectedEvent) => {
    console.log("handleEventClick selected");

    dispatch({
      type: "SELECT_EVENT",
      payload: selectedEvent,
    });

    console.log("Payload:", selectedEvent);
  };

  const handleCreateEvent = () => {
    console.log("Creating new event");
    history.push("/newevent");
  };

  return (
    <>
    <div className="create-event-btn">
    <Button
        variant='contained'
        onClick={handleCreateEvent}
        >Create New Event</Button>
      </div>
    <section className="highlights-section">
      <div className="titleContainer">
        <h1 className="landing-title">Highlighted Events</h1>
      </div>
      <div className="flex-those-events">
        {eventData &&
          eventData.map((event) => {
            return (
             <div
                onClick={() => {
                  handleEventClick(event);
                  setOpenModal(true);
                }}
                key={event.id}
              >
              {event.is_highlighted_event ? <div className="card card-post-it">
                  <img className="card-img" src={event.image} alt={event.description} />
                  <div className="card-content">
                    <h3>{event.event_name}</h3>
                    {event.cost === true ? <h5>Paid Event</h5> : <h5>Free Event</h5>}
                    <span className="event-date-highlight">{event.time}</span>
                  </div>
                </div>
                : <></>}
              </div>
            );
          })}
      </div>
      </section>
      <section className="gallery-section">
        <div className="section-events-title">
          <h1>Events</h1>
        </div>
        <div className="event-section-container">
          {eventData && eventData.map((event) => {
            return (
              <div
                onClick={() => {
                  handleEventClick(event);
                  setOpenModal(true);
                }}>
              <div className="gallery-card card-post-it">
                <img className="gallery-card-img" src={event.image} alt="" />
                <div className="gallery-card-content">
                  <h3>{event.event_name}</h3>
                  {event.cost === true ? <h5>Paid Event</h5> : <h5>Free Event</h5>}
                  <span className="date">{event.time}</span>
                </div>
              </div>
              </div>
            );
          })}
        </div>
      </section>
      <div className="create-event-btn">
      
      </div>
      <main>{openModal === true ? <Modal closeModal={setOpenModal}/> : <></>}</main>

    </>
  );
}
