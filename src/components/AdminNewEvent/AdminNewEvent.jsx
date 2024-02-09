import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import "./AdminNewEvent.css";
import {
  TextField,
  Stack,
  Divider,
  FormControl,
  FormLabel,
  ListItemText,
} from "@mui/material";
import Button from "@mui/material/Button";
import UploadButton from "../UploadButton/UploadButton";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
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

export default function AdminNewEvent() {
  let [hostInput, setHostInput] = useState("");
  let [titleInput, setTitleInput] = useState("");
  let [locationInput, setLocationInput] = useState("");
  let [costInput, setCostInput] = useState("");
  let [dateInput, setDateInput] = useState("");
  let [descriptionInput, setDescriptionInput] = useState("");
  let [eventSizeInput, setEventSizeInput] = useState("");
  let [imageInput, setImageInput] = useState("");
  let [commentInput, setCommentInput] = useState("");
  let [websiteInput, setWebsiteInput] = useState("");
  let [tagInput, setTagInput] = useState([]);
  const tagData = useSelector((store) => store.tags);


  useEffect(() => {
    dispatch({ type: "FETCH_TAGS" });
  }, []);

  const dispatch = useDispatch();
  const history = useHistory();
  const eventForm = new FormData();

  const handleSubmit = (e) => {
    e.preventDefault();

    eventForm.append("event_name", titleInput);
    eventForm.append("host", hostInput);
    eventForm.append("time", dateInput);
    eventForm.append("cost", costInput);
    eventForm.append("location", locationInput);
    eventForm.append("description", descriptionInput);
    eventForm.append("website", websiteInput )
    eventForm.append("event_size", eventSizeInput);
    eventForm.append("image", imageInput);
    eventForm.append("comments", commentInput)

    setHostInput("");
    setTitleInput("");
    setLocationInput("");
    setCostInput("");
    setDateInput("");
    setDescriptionInput("");
    setWebsiteInput("");
    setEventSizeInput("");
    setCommentInput("")

    dispatch({
      type: "ADD_EVENT",
      payload: eventForm,
    });
    console.log("Handling submit");

    history.push("/eventarchive");
  };



  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const backToArchive = (e) => {
    history.push("/eventarchive");
  };

  const removeEventFromActive = () => {
    dispatch({
      type: "REMOVE_EVENT",
    });

    history.push("/eventarchive");
  };
  return (
    <>
      <h1 className="admin-event">Admin Create Event</h1>
      <div className="event-form">
        <form onSubmit={handleClickOpen}>
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
                id="event-comment-input"
                helperText="Helpful comments "
                type="text"
                variant="filled"
                label="Comment"
                onChange={(e) => setCommentInput(e.target.value)}
                value={commentInput}
                sx={{
                  marginBottom: 4,
                  width: 230,
                }}
                multiline
                minRows={2}
             
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
                  width: 230,
                }}
                multiline
                minRows={8}
                required
              />
              <TextField
                id="event-website-input"
                helperText="Link to Event website "
                type="text"
                variant="filled"
                label="Website"
                onChange={(e) => setWebsiteInput(e.target.value)}
                value={websiteInput}
                sx={{
                  marginBottom: 4,
                  width: 230,
                }}
                multiline
                minRows={2}
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
                helperText="Where the event will be held (e.g. Merriot Hotel Minneapolis, MN)"
                type="text"
                variant="filled"
                label="Location"
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
                    input={<OutlinedInput label="Tag" />}
                    id="event-tag-input"
                    onChange={(e) => setTagInput(e.target.value)}
                    value={tagInput}
                    sx={{ width: 230 }}
                    renderValue={(selected) => selected.join(", ")}
                    MenuProps={MenuProps}
                  >
                    {tagData &&
                      tagData.map((tag) => {
                        return (
                          <MenuItem key={tag.id} value={tag.tag_name}>
                            <Checkbox
                              checked={tagInput.indexOf(tag.tag_name) > -1}
                            />
                            <ListItemText primary={tag.tag_name} />
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
                  variant="contained"
                  onClick={backToArchive}
                  className="discard-btn"
                  sx={{ width: 240 }}
                >
                  <ArrowBackIcon />
                  Back to Archive
                </Button>
                <Button type="submit" variant="contained" sx={{ width: 240 }}>
                  <AddIcon />
                  Create Event
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
              {"Are you sure you wanna submit this ?"}
            </DialogTitle>
            <DialogContent>
              <DialogContentText
                className="DialogText"
                id="alert-dialog-description"
              ></DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose}>Disagree</Button>
              <Button onClick={handleSubmit} autoFocus>
                Agree
              </Button>
            </DialogActions>
          </Dialog>
        </Fragment>
      </div>
    </>
  );
  
}
