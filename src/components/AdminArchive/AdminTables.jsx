import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import "./AdminArchive.css";
import Button from "@mui/material/Button";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import StarOutlinedIcon from "@mui/icons-material/StarOutlined";
import RateReviewIcon from "@mui/icons-material/RateReview";
import ContactMailIcon from '@mui/icons-material/ContactMail';
import { HiveTwoTone } from "@mui/icons-material";

export default function AdminTables() {
  useEffect(() => {
    dispatch({ type: "FETCH_ARCHIVED_EVENTS" });
  }, []);

  // these store reducers segregate events by "status" value
  const approvedEvents = useSelector((store) => store.archived.approved);
  const pendingEvents = useSelector((store) => store.archived.pending);
  const deleteEvents = useSelector((store) => store.archived.deleted);
  const dispatch = useDispatch();
  const history = useHistory();

  // this function controls whether an event is highlighted
  const statusChange = (id) => {
    dispatch({
      type: "STATUS_CHANGE",
      payload: id,
    });
  };

  const contactInfo = (eventContact) => {
    // console.log(eventContact, "id for params")
    history.push(`/contactcard/${eventContact}`)
  };

  return (
    <>
      <div className="EventsTable pending-post-it">
        <table>
          <thead className="EventsTable-header">
            <tr>
              <td>Host</td>
              <td>Event Name</td>
              <td>Status</td>
              <td>Contact</td>
              <td>Review</td>
            </tr>
          </thead>

          {pendingEvents &&
            pendingEvents.map((pending) => {
              return (
                <tr key={pending.id}>
                  <td>{pending.host}</td>
                  <td>{pending.event_name}</td>
                  <td>{pending.admin_approved}</td>
                  <td>
                    <Button 
                      onClick={() => contactInfo(pending.id)}>
                      <ContactMailIcon />
                    </Button>
                    </td>

                    <td>
                      <Button
                      onClick={() => {
                        history.push(`/edit_event/${pending.id}`);
                      }}
                    >
                      {" "}
                      <RateReviewIcon></RateReviewIcon>
                    </Button>
                  </td>
                </tr>
                
              );
            })}
        </table>
      </div>

      <div className="EventsTable approved-post-it">
        <table>
          <thead className="EventsTable-header">
            <tr>
              <td>Host</td>
              <td>Event Name</td>
              <td>Status</td>
              <td>Contact</td>
              <td>Featured / Review</td>
            </tr>
          </thead>

          {approvedEvents &&
            approvedEvents.map((event) => {
              return (
                <tr key={event.id}>
                  <td>{event.host}</td>
                  <td>{event.event_name}</td>
                  <td>{event.admin_approved}</td>
                  <td>
                    <Button 
                      onClick={() => contactInfo(event.id)}>
                      <ContactMailIcon />
                    </Button>
                    </td>
                  <td>
                    <Button onClick={() => statusChange(event.id)}>
                      {event.is_highlighted_event ? (
                        <StarOutlinedIcon className="star"></StarOutlinedIcon>
                      ) : (
                        <StarBorderOutlinedIcon className="star"></StarBorderOutlinedIcon>
                      )}
                    </Button>{" "}
                    <Button
                      onClick={() => {
                        history.push(`/edit_event/${event.id}`);
                      }}
                    >
                      {" "}
                      <RateReviewIcon></RateReviewIcon>
                    </Button>
                  </td>
                </tr>
              );
            })}
        </table>
      </div>

      <div className="EventsTable deleted-post-it">
        <table>
          <thead className="EventsTable-header">
            <tr>
              <td>Host</td>
              <td>Event Name</td>
              <td>Status</td>
              <td>Contact</td>
              <td>Restore</td>
            </tr>
          </thead>

          {deleteEvents &&
            deleteEvents.map((event) => {
              return (
                <tr key={event.id}>
                  <td>{event.host}</td>
                  <td>{event.event_name}</td>
                  <td>{event.admin_approved}</td>
                  <td>
                    <Button 
                      onClick={() => contactInfo(event.id)}>
                      <ContactMailIcon />
                    </Button>
                    </td>
                  <td>
                    <Button
                      onClick={() => {
                        history.push(`/edit_event/${event.id}`);
                      }}
                    >
                      {" "}
                      <RateReviewIcon></RateReviewIcon>
                    </Button>
                  </td>
                </tr>
              );
            })}
        </table>
      </div>
    </>
  );
}
