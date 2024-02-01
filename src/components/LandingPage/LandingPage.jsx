import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import Modal from "../Modal/Modal";
import Container from "postcss/lib/container";
import { Button } from "@mui/material";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";

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
    <section>
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
                <div className="card">
                  <img className="card-img" src={event.image} alt={event.description} />
                  <div className="card-content">
                    <h3>{event.event_name}</h3>
                    {event.cost === true ? <h5>Paid Event</h5> : <h5>Free Event</h5>}
                  </div>
                </div>
              </div>
            );
          })}
      </div>
      </section>
        <div className="section-events-title">
          <h1>Events</h1>
        </div>
      <Button
        variant='contained'
        className="create-event-btn"
        onClick={handleCreateEvent}
        >Create New Event</Button>
      <main>{openModal === true ? <Modal closeModal={setOpenModal}/> : <></>}</main>

    </>
  );
}
