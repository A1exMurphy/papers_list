import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import "../AdminNewEvent/AdminNewEvent.css";
import {
  TextField,
  Stack,
  Divider,
  FormControl,
  ListItemText,
} from "@mui/material";
import Button from "@mui/material/Button";
import UploadButton from "../UploadButton/UploadButton";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";
import AddIcon from "@mui/icons-material/Add";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Fragment } from "react";

const theme = createTheme({
  palette: {
    primary: {
      main: "#004986",
    },
  },
});

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

export default function NewEvent() {
  let [titleInput, setTitleInput] = useState("");
  let [hostInput, setHostInput] = useState("");
  let [locationInput, setLocationInput] = useState("");
  let [dateInput, setDateInput] = useState("");
  let [descriptionInput, setDescriptionInput] = useState("");
  let [imageInput, setImageInput] = useState("");
  let [eventSizeInput, setEventSizeInput] = useState("");
  let [costInput, setCostInput] = useState("");
  let [tagInput, setTagInput] = useState([]);
  let [errorMessage, setErrorMessage] = useState("");
  let [tagId, setTagId] = useState([]);
  let [websiteInput, setWebsiteInput] = useState("http://");

  
  let [commentInput, setCommentInput] = useState("");

  let tagData = useSelector((store) => store.tags);

  useEffect(() => {
    dispatch({ type: "FETCH_TAGS" });
  }, []);

  const dispatch = useDispatch();

  const history = useHistory();

  const eventForm = new FormData();

  const [open, setOpen] = useState(false);

  // console.log("tagInput", tagInput);
  // console.log("tagid", tagId);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    eventForm.append("image", imageInput);
    eventForm.append("event_name", titleInput);
    eventForm.append("host", hostInput);
    eventForm.append("time", dateInput);
    eventForm.append("cost", costInput);
    eventForm.append("location", locationInput);
    eventForm.append("description", descriptionInput);
    eventForm.append("website", websiteInput);
    eventForm.append("event_size", eventSizeInput);
    eventForm.append("comments", commentInput);
    eventForm.append("tags", tagInput);


    setHostInput("");
    setTitleInput("");
    setLocationInput("");
    setCostInput("");
    setDateInput("");
    setDescriptionInput("");
    setWebsiteInput("");
    setEventSizeInput("");
    setTagInput("");
    setCommentInput("");


    dispatch({
      type: "SAGA/ADD_EVENT",
      payload: eventForm
    });

    history.push("/contactinfo");
  };

  const handleBackHome = (e) => {
    history.push("/");
  };
  return (
    <>
      <h1 className="admin-event">Create Event</h1>
      <div className="event-form">
        <form onSubmit={handleClickOpen}>
          {errorMessage && <p className="error">{errorMessage}</p>}
          <FormControl>
            <Stack
              spacing={2}
              direction="row"
              sx={{ marginBottom: 4 }}
              divider={<Divider orientation="vertical" flexItem />}
            >
              <TextField
                id="event-image-input"
                type="file"
                onChange={(e) => setImageInput(e.target.files[0])}
                sx={{
                  width: 230,
                }}
              />
              
              <TextField
                id="event-description-input"
                helperText="Brief description of event"
                type="text"
                variant="filled"
                label="Description"
                placeholder="Lorem ipsem dolor sit amet..."
                onChange={(e) => setDescriptionInput(e.target.value)}
                value={descriptionInput}
                sx={{
                  marginBottom: 4,
                  width: 230,
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}
                multiline
                minRows={8}
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
                placeholder="Business Meetup"
                onChange={(e) => setTitleInput(e.target.value)}
                value={titleInput}
                sx={{
                  marginBottom: 4,
                  width: 230,
                }}
                required
              />
              <TextField
                id="event-website-input"
                helperText="Link to Event/Registration "
                type="text"
                variant="filled"
                label="Registration Link"
                placeholder="examplesite.com"
                onChange={(e) => setWebsiteInput(e.target.value)}
                value={websiteInput}
                sx={{
                  marginBottom: 4,
                  width: 230,
                }}
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
                placeholder="Jane Doe"
                size="small"
                id="event-host-input"
                onChange={(e) => setHostInput(e.target.value)}
                value={hostInput}
                sx={{ width: 230 }}
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
                sx={{ width: 230 }}
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
                helperText="Where the event will be held"
                type="text"
                variant="filled"
                label="Location"
                placeholder="Sleepy Hotel, Cresco IA"
                size="small"
                id="event-location-input"
                onChange={(e) => setLocationInput(e.target.value)}
                value={locationInput}
                sx={{ width: 230 }}
                required
              />
              <Box sx={{ midWidth: 120 }}>
                <FormControl sx={{ width: 200 }}>
                  <InputLabel id="tag-input-label">Tags</InputLabel>
                  <Select
                    multiple
                    label="Tags"
                    id="event-size-input"
                    onChange={(e) => setTagInput(e.target.value)}
                    value={tagInput}
                    sx={{ width: 230 }}
                    renderValue={tagData.tag_name}
                    MenuProps={MenuProps}
                  >
                    {tagData &&
                      tagData.map((tag) => {
                        return (
                          <MenuItem key={tag.id} value={tag.id}>
                            <Checkbox checked={tagInput.indexOf(tag.id) > -1} />
                            {tag.tag_name}
                            <ListItemText />
                          </MenuItem>
                        );
                      })}
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
              <Box sx={{ midWidth: 230 }}>
                <FormControl sx={{ width: 230 }}>
                  <InputLabel id="event-size-input-label">
                    Event Size
                  </InputLabel>
                  <Select
                    label="Event Size"
                    id="event-size-input"
                    onChange={(e) => setEventSizeInput(e.target.value)}
                    value={eventSizeInput}
                    sx={{ width: 230 }}
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
                    sx={{ width: 230 }}
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
                  onClick={handleBackHome}
                  variant="contained"
                  sx={{ width: 240 }}
                >
                  <ArrowBackIcon />
                  Back Home
                </Button>
                <Button type="submit" variant="contained" sx={{ width: 240 }}>
                  <AddIcon />
                  Submit Request
                </Button>
              </ThemeProvider>
            </Stack>
          </FormControl>
        </form>
        <Fragment>
          <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">
              {"Are you sure you want to submit this?"}
            </DialogTitle>
            <DialogContent>
              <DialogContentText
                className="DialogText"
                id="alert-dialog-description"
              ></DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose}>No</Button>
              <Button onClick={handleSubmit} autoFocus>
                Yes
              </Button>
            </DialogActions>
          </Dialog>
        </Fragment>
      </div>
    </>
  );
}
