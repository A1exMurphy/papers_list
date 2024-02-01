import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import "./AdminNewEvent.css";

export default function AdminNewEvent() {
  let [hostInput, setHostInput] = useState("");
  let [titleInput, setTitleInput] = useState("");
  let [locationInput, setLocationInput] = useState("");
  let [costInput, setCostInput] = useState("");
  let [dateInput, setDateInput] = useState("");
  let [descriptionInput, setDescriptionInput] = useState("");
  let [eventSizeInput, setEventSizeInput] = useState("");
  let [imageInput, setImageInput] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();

    const newAdminEvent = {
      host: hostInput,
      event_name: titleInput,
      cost: costInput,
      time: dateInput,
      location: locationInput,
      description: descriptionInput,
      event_size: eventSizeInput,
      image: imageInput,
    };

    dispatch({
      type: "ADD_EVENT",
      payload: newAdminEvent,
    });
    console.log("Handling submit");
  };

  const backToArchive = (e) => {
    history.push("/eventarchive");
  };
  return (
    <>
      <h1 id="pg-title-create">Admin Create Event</h1>

      <form onSubmit={handleSubmit}>
        <div>
          <label id="name-label" htmlFor="event-name-input">
            Event Name
          </label>
          <input
            id="event-name-input"
            type="text"
            onChange={(e) => setTitleInput(e.target.value)}
            value={titleInput}
          />
          <label id="host-label" htmlFor="event-host-input">
            Host
          </label>
          <input
            id="event-host-input"
            type="text"
            onChange={(e) => setHostInput(e.target.value)}
            value={hostInput}
          />
        </div>
        <div>
          <label id="location-label" htmlFor="event-location-input">
            Location
          </label>
          <input
            id="event-location-input"
            type="text"
            onChange={(e) => setLocationInput(e.target.value)}
            value={locationInput}
          />
        </div>
        <div>
          <label id="date-label" htmlFor="event-date-input">
            Date
          </label>
          <input
            id="event-date-input"
            type="text"
            onChange={(e) => setDateInput(e.target.value)}
            value={dateInput}
          />
        </div>
        <div>
          <label id="cost-label" htmlFor="event-cost-input">
            Cost
          </label>
          <input
            id="event-cost-input"
            type="text"
            onChange={(e) => setCostInput(e.target.value)}
            value={costInput}
          />
        </div>
        <div>
          <label id="description-label" htmlFor="event-description-input">
            Description
          </label>
          <input
            id="event-description-input"
            type="text"
            onChange={(e) => setDescriptionInput(e.target.value)}
            value={descriptionInput}
          />
        </div>
        <div>
          <label id="size-label" htmlFor="event-size-input">
            Event Size
          </label>
          <input
            id="event-size-input"
            type="text"
            onChange={(e) => setEventSizeInput(e.target.value)}
            value={eventSizeInput}
          />
        </div>
        <div>
          <label id="image-label" htmlFor="event-image-input">
            Image
          </label>
          <input
            id="event-image-input"
            type="text"
            onChange={(e) => setImageInput(e.target.value)}
            value={imageInput}
          />
        </div>
        <button className="submit-btn">Submit</button>
      </form>
      <button onClick={backToArchive} className="discard-btn">
        Admin Page
      </button>
    </>
  );
}
