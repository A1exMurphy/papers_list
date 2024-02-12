import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import Modal from "../Modal/Modal";
import { Button } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import "./LandingPage.css";
import { Add } from "@mui/icons-material";
import { ThemeProvider } from "@emotion/react";

const theme = createTheme({
  palette: {
    primary: {
      main: "#ea733d",
    },
  },
});

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
    console.log("Creating new selected");
    history.push("/newevent");
  };

  return (
    <>
      <div className="create-event-btn">
        <ThemeProvider theme={theme}>
          <Button sx={{ width: 200 }} variant="contained" onClick={handleCreateEvent}>
            <Add />
            Submit Event
          </Button>
        </ThemeProvider>
      </div>
      <section className="highlights-section">
        <div className="titleContainer">
          <h1 className="landing-title">Highlighted Events</h1>
        </div>
        <div className="flex-those-events">
          {eventData &&
            eventData.map((selected) => {
              return (
                <div
                  onClick={() => {
                    handleEventClick(selected);
                    setOpenModal(true);
                  }}
                  key={selected.id}
                >
                  {selected.is_highlighted_event && (
                    <div className="card card-post-it">
                      <img
                        className="card-img"
                        src={selected.image}
                        alt={selected.description}
                      />
                      <div className="card-content">
                        <h3>{selected.event_name}</h3>
                        {selected.cost === true ? (
                          <h5>Paid Event</h5>
                        ) : (
                          <h5>Free Event</h5>
                        )}
                        <span className="selected-date-highlight">
                          {selected.time}
                        </span>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          ;
        </div>
      </section>
      <section className="gallery-section">
        <div className="section-events-title">
          <h1>Events</h1>
        </div>
        <div className="event-section-container">
          {eventData &&
            eventData.map((selected) => {
              return (
                <div
                  onClick={() => {
                    handleEventClick(selected);
                    setOpenModal(true);
                  }}
                >
                  <div className="gallery-card card-post-it">
                    <img
                      className="gallery-card-img"
                      src={selected.image}
                      alt=""
                    />
                    <div className="gallery-card-content">
                      <h3>{selected.event_name}</h3>
                      {selected.cost === true ? (
                        <h5>Paid Event</h5>
                      ) : (
                        <h5>Free Event</h5>
                      )}
                      <span className="date">{selected.time}</span>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </section>
      <div className="create-selected-btn"></div>
      <main>
        {openModal === true ? <Modal closeModal={setOpenModal} /> : <></>}
      </main>
    </>
  );
}
