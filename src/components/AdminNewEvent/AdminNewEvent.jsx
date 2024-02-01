import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import "./AdminNewEvent.css";
import { TextField, Stack, Divider, FormControl, FormLabel } from "@mui/material";
import UploadButton from "../UploadButton/UploadButton";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

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
      <h1 className="admin-event">Admin Create Event</h1>
      <form onSubmit={handleSubmit}>
        <FormControl>
          <div>
            <TextField
              type="text"
              variant="filled"
              placeholder="Event Name"
              size="small"
              id="event-name-input"
              onChange={(e) => setTitleInput(e.target.value)}
              value={titleInput}
              sx={{ marginBottom: 4 }}
              fullWidth
              required
            />
          </div>
          <Stack
            spacing={2}
            direction="row"
            sx={{ marginBottom: 4 }}
            divider={<Divider orientation="vertical" flexItem />}
          >
            <TextField
              type="text"
              variant="filled"
              placeholder="Host"
              size="small"
              id="event-host-input"
              onChange={(e) => setHostInput(e.target.value)}
              value={hostInput}
              required
            />

            <TextField
              type="text"
              variant="filled"
              placeholder="Location"
              size="small"
              id="event-location-input"
              onChange={(e) => setLocationInput(e.target.value)}
              value={locationInput}
              sx={{ width: 200 }}
              required
            />
          </Stack>

          <Stack
            spacing={2}
            direction="row"
            sx={{ marginBottom: 4 }}
            divider={<Divider orientation="vertical" flexItem />}
          >
            <TextField
              type="date"
              variant="filled"
              placeholder="Date"
              size="small"
              id="event-date-input"
              onChange={(e) => setDateInput(e.target.value)}
              value={dateInput}
              sx={{ width: 190 }}
              required
            />
            <Box sx={{ midWidth: 120 }}>
              <FormControl sx={{ width: 120 }}>
                <InputLabel id="event-cost-input-label">Cost</InputLabel>
                <Select
                  label="Cost"
                  id="event-cost-input"
                  onChange={(e) => setCostInput(e.target.value)}
                  value={costInput}
                  sx={{ width: 200 }}
                  required
                >
                  <MenuItem value={true}>Yes</MenuItem>
                  <MenuItem value={false}>No</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </Stack>
          <Stack
            spacing={2}
            direction="row"
            sx={{ marginBottom: 4 }}
            divider={<Divider orientation="vertical" flexItem />}
          >
            <TextField
              type="text"
              variant="filled"
              placeholder="Description"
              id="event-description-input"
              onChange={(e) => setDescriptionInput(e.target.value)}
              value={descriptionInput}
              required
            />
            <Box sx={{ midWidth: 120 }}>
              <FormControl sx={{ width: 200 }}>
                <InputLabel id="event-size-input-label">Event Size</InputLabel>
                <Select
                  label="Event Size"
                  id="event-size-input"
                  onChange={(e) => setEventSizeInput(e.target.value)}
                  value={eventSizeInput}
                  fullWidth
                >
                  <MenuItem value={"small"}>Small (5 - 25 people)</MenuItem>
                  <MenuItem value={"medium"}>Medium (26 - 100 people)</MenuItem>
                  <MenuItem value={"large"}>Large (100+ people)</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </Stack>
          <Stack
            spacing={2}
            direction="row"
            sx={{ marginBottom: 4 }}
            divider={<Divider orientation="vertical" flexItem />}
          >
            <UploadButton
              id="event-image-input"
              onChange={(e) => setImageInput(e.target.value)}
              value={imageInput}
            />
          </Stack>
          <button className="submit-btn">Submit</button>
          <button onClick={backToArchive} className="discard-btn">
            Admin Page
          </button>
        </FormControl>
      </form>
    </>
  );
}
