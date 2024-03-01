import React, { useEffect, useState, useRef } from "react";
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
  const highlightsRef = useRef(null);
  const history = useHistory();
  const dispatch = useDispatch();
  const eventData = useSelector((store) => store.events);

  useEffect(() => {
    dispatch({ type: "FETCH_EVENTS" });
  }, []);

  const handleEventClick = (selectedEvent) => {
    dispatch({
      type: "SELECT_EVENT",
      payload: selectedEvent,
    });
  };

  const handleCreateEvent = () => {
    history.push("/newevent");
  };

  const scrollToTop = () => {

    window.scrollTo({
      top: highlightsRef.current.offsetTop,
      behavior: 'smooth'
    })
  }

  return (
    <>
      <div className="create-event-btn">
        <ThemeProvider theme={theme}>
          <Button
            sx={{ width: 200 }}
            variant="contained"
            onClick={handleCreateEvent}
          >
            <Add />
            Submit Event
          </Button>
        </ThemeProvider>
      </div>
      <section ref={highlightsRef} className="highlights-section">
        <div className="titleContainer">
          <h1 className="landing-title">Cathy's Choice</h1>
          <h4 className="landing-summary">my pick of the hot events!</h4>
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
      <button onClick={scrollToTop} className="left-side-of-screen">Back to Top</button>
    </>
  );
}
