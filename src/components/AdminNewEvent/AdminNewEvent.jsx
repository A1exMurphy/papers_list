import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import "./AdminNewEvent.css";
import {
  TextField,
  Stack,
  Divider,
  FormControl,
  FormLabel,
} from "@mui/material";
import Button from "@mui/material/Button";
import UploadButton from "../UploadButton/UploadButton";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import AddIcon from "@mui/icons-material/Add";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#004986",
    },
  },
});

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
  const user = useSelector((store) => store.user);

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
    setHostInput("");
    setTitleInput("");
    setLocationInput("");
    setCostInput("");
    setDateInput("");
    setDescriptionInput("");
    setEventSizeInput("");

    dispatch({
      type: "ADD_EVENT",
      payload: newAdminEvent,
    });
    console.log("Handling submit");

    history.push("/eventarchive");
  };

  const backToArchive = (e) => {
    history.push("/eventarchive");
  };

  const removeEventFromActive = () => {
    dispatch({
      type: "REMOVE_EVENT"
    })

    history.push("/eventarchive");
  }
  return (
    <>
      <h1 className="admin-event">Admin Create Event</h1>
      <div className="event-form">
        <form onSubmit={handleSubmit}>
          <FormControl>
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
              <TextField
                id="event-description-input"
                helperText="Brief description of event"
                type="text"
                variant="filled"
                label="Description"
                onChange={(e) => setDescriptionInput(e.target.value)}
                value={descriptionInput}
                sx={{
                  marginBottom: 4,
                }}
                multiline
                minRows={8}
                fullWidth
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
                id="event-name-input"
                helperText="Name of your event"
                type="text"
                variant="filled"
                label="Event Name"
                onChange={(e) => setTitleInput(e.target.value)}
                value={titleInput}
                fullWidth
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
                type="text"
                helperText="Organization / Person hosting"
                variant="filled"
                label="Hosted By"
                size="small"
                id="event-host-input"
                onChange={(e) => setHostInput(e.target.value)}
                value={hostInput}
                sx={{ width: 200 }}
                required
              />
              <TextField
                type="date"
                helperText="Date of event"
                variant="filled"
                size="small"
                id="event-date-input"
                onChange={(e) => setDateInput(e.target.value)}
                value={dateInput}
                sx={{ width: 190 }}
                required
              />
            </Stack>


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
      <button onClick={removeEventFromActive}>
        Remove Event
      </button>
            <Stack
              spacing={2}
              direction="row"
              sx={{ marginBottom: 4 }}
              divider={<Divider orientation="vertical" flexItem />}
            >
              <TextField
                helperText="Where the event will be held (e.g. Merriot Hotel Minneapolis, MN)"
                type="text"
                variant="filled"
                label="Location"
                size="small"
                id="event-location-input"
                onChange={(e) => setLocationInput(e.target.value)}
                value={locationInput}
                fullWidth
                required
              />
            </Stack>
            <Stack
              spacing={2}
              direction="row"
              sx={{ marginBottom: 4 }}
              divider={<Divider orientation="vertical" flexItem />}
            >
              <Box sx={{ midWidth: 120 }}>
                <FormControl sx={{ width: 200 }}>
                  <InputLabel id="event-size-input-label">
                    Event Size
                  </InputLabel>
                  <Select
                    label="Event Size"
                    id="event-size-input"
                    onChange={(e) => setEventSizeInput(e.target.value)}
                    value={eventSizeInput}
                    sx={{ width: 200 }}
                  >
                    <MenuItem value={"small"}>Small (5 - 25 people)</MenuItem>
                    <MenuItem value={"medium"}>
                      Medium (26 - 100 people)
                    </MenuItem>
                    <MenuItem value={"large"}>Large (100+ people)</MenuItem>
                  </Select>
                </FormControl>
              </Box>
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
                    <MenuItem value={false}>Free</MenuItem>
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
              <ThemeProvider theme={theme}>
                <Button
                  variant="contained"
                  onClick={backToArchive}
                  className="discard-btn"
                  sx={{ width: 210 }}
                >
                  <ArrowBackIcon />
                  Back to Archive
                </Button>
                <Button type="submit" variant="contained" sx={{ width: 210 }}>
                  <AddIcon />
                  Create Event
                </Button>
              </ThemeProvider>
            </Stack>
          </FormControl>
        </form>
      </div>
    </>
  );
}
