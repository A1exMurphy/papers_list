import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import Modal from "../Modal/Modal";
import "./LandingPage.css";

 export default function  LandingPage () {
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
    history.push('/newevent');
  }

  return (
    <>
      <div className="titleContainer">
        <h1 className="landing-title">Landing Page</h1>
      </div>
      <section className="landing-page-highlights-section">
        {eventData &&
          eventData.map((event) => {
            return (
              <div
                className="highlights-container"
                onClick={() => {handleEventClick(event); setOpenModal(true)}}
                key={event.id}
              >
                <div className="card">
                  <div className="img-box-landing-page">
                    <img src={event.image} alt={event.description} />
                  </div>
                  <div className="event-name">
                    <h3>{event.event_name}</h3>
                  </div>
                  <div className="event-time">
                    <h5>{event.time}</h5>
                  </div>
                </div>
              </div>
            );
          })}
      </section>
      <section className="landing-page-events-section">
        <div className="section-events-title">
          <h1>Events</h1>
        </div>
      </section>
      <button 
        className="create-event-btn"
        onClick={handleCreateEvent}
        >Create New Event</button>
      {openModal === true ? <Modal closeModal={setOpenModal}/> : <></>}

    </>

  );
}



