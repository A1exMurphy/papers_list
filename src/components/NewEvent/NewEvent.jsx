import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import "../AdminNewEvent/AdminNewEvent.css";
import {
  TextField,
  Stack,
  Divider,
  FormControl,
} from "@mui/material";
import Button from "@mui/material/Button";
import UploadButton from "../UploadButton/UploadButton";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import AddIcon from "@mui/icons-material/Add";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#004986",
    },
  },
});

export default function NewEvent() {
  let [titleInput, setTitleInput] = useState("");
  let [hostInput, setHostInput] = useState("");
  let [locationInput, setLocationInput] = useState("");
  let [dateInput, setDateInput] = useState("");
  let [descriptionInput, setDescriptionInput] = useState("");
  let [imageInput, setImageInput] = useState("");
  let [eventSizeInput, setEventSizeInput] = useState("");
  let [costInput, setCostInput] = useState("");
  let [tagInput, setTagInput] = useState("");
  let [errorMessage, setErrorMessage] = useState("");

  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();

    const newEvent = {
      event_name: titleInput,
      host: hostInput,
      time: dateInput,
      cost: costInput,
      location: locationInput,
      description: descriptionInput,
      image: imageInput,
      event_size: eventSizeInput,
    };

    setHostInput("");
    setTitleInput("");
    setLocationInput("");
    setCostInput("");
    setDateInput("");
    setDescriptionInput("");
    setEventSizeInput("");
    setTagInput("");

    console.log(newEvent);

    dispatch({
      type: "ADD_EVENT",
      payload: newEvent,
    });
    console.log("Handling submit");
    history.push("/contactinfo");
  };

  const handleDiscard = (e) => {
    console.log("Handling discard");

    history.push("/");
  };
  return (
    <>
      <h1 className="admin-event">Create Event</h1>
      <div className="event-form">
        <form onSubmit={handleSubmit}>
          {errorMessage && <p className="error">{errorMessage}</p>}
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
                sx={{ width: 200 }}
                required
              />
               <Box sx={{ midWidth: 120 }}>
                <FormControl sx={{ width: 200 }}>
                  <InputLabel id="tag-input-label">
                    Tags
                  </InputLabel>
                  <Select
                    label="Event Size"
                    id="event-size-input"
                    onChange={(e) => setTagInput(e.target.value)}
                    value={tagInput}
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
                  onClick={handleDiscard}
                  variant="contained"
                  sx={{ width: 210 }}
                >
                  Discard
                </Button>
                <Button type="submit" variant="contained" sx={{ width: 210 }}>
                <AddIcon />
                  Submit Request
                </Button>
              </ThemeProvider>
            </Stack>
          </FormControl>
        </form>
      </div>
    </>
  );
}
