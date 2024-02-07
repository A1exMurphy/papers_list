import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

import { Fragment } from "react";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Button } from "@mui/material";

import {
  TextField,
  Stack,
  Divider,
  FormControl,
  FormLabel,
  ListItemText,
  Input,
} from "@mui/material";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";
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


export default function SubmitContactInfo() {
  const dispatch = useDispatch();
  const history = useHistory();
  const eventId = useSelector((store) => store.newEvent.newEventId);
  let [email, setEmail] = useState("");
  let [phone, setPhone] = useState("");
  let [linkedIn, setLinkedIn] = useState("");
  let [additionalInfo, SetadditionalInfo] = useState("");
  
  const [open, setOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newContact = {
      email: email,
      phone: phone,
      linkedIn: linkedIn,
      additional_info: additionalInfo,
      eventId: eventId,
    };
    console.log("button is buttoning", newContact);

    dispatch({
      type: "ADD_CONTACT_INFO",
      payload: newContact,
    });
    history.push("/home");
    console.log("Handling submit");
  };

  const handleDiscard = () => {
    console.log("Handling discard");
  };


  const handleClickOpen = () => {

    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <h1 className="admin-event">Contact Info for Admin</h1>

      <div className="event-form">
       


      <form onSubmit={handleClickOpen}>
        <div>
          <label id="name-label" htmlFor="event-name-input">
            Email
          </label>
          <input
            id="event-name-input"
            type="text"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <label id="host-label" htmlFor="event-host-input">
            Phone
          </label>
          <input
            id="event-host-input"
            type="text"
            onChange={(e) => setPhone(e.target.value)}
            value={phone}
          />
        </div>
        <div>
          <label id="location-label" htmlFor="event-location-input">
            linkedIn
          </label>
          <input
            id="event-location-input"
            type="text"
            onChange={(e) => setLinkedIn(e.target.value)}
            value={linkedIn}
          />
        </div>
        <div>
          <label id="date-label" htmlFor="event-date-input">
            Additional Info
          </label>
          <input
            id="event-date-input"
            type="text"
            onChange={(e) => SetadditionalInfo(e.target.value)}
            value={additionalInfo}
          />
        </div>
        <button className="submit-btn">Submit</button>
      </form>
      <button onClick={handleDiscard} className="discard-btn">
        Discard
      </button>

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
            <DialogContentText className="DialogText" id="alert-dialog-description">

            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Disagree</Button>
            <Button onClick={handleSubmit} autoFocus>
              Agree
            </Button>
          </DialogActions>
        </Dialog>
      </Fragment>

              <TextField
                label="LinkedIn"
                id="location-label"
                type="text"
                variant="filled"
                helperText="Let's Connect on LinkedIn!"
                onChange={(e) => setLinkedIn(e.target.value)}
                value={linkedIn}
                sx={{ width: 230 }}
              />
            </Stack>
            <Stack
              spacing={2}
              direction="row"
              sx={{ marginBottom: 4 }}
              divider={<Divider orientation="vertical" flexItem />}
            >
              <TextField
                id="info-label"
                label="Additional Info"
                type="text"
                variant="filled"
                helperText="Do you have any special notes for us about the event?
                 (e.g. parking recommendations, what to bring, etc.)"
                sx={{
                  marginBottom: 4,
                }}
                onChange={(e) => SetadditionalInfo(e.target.value)}
                value={additionalInfo}
                fullWidth
                multiline
                minRows={8}
              />
            </Stack>
            <Stack
              spacing={35}
              direction="row"
              sx={{ marginBottom: 4 }}
              divider={<Divider orientation="vertical" flexItem />}
            >
              <ThemeProvider theme={theme}>
                <Button
                  onClick={handleDiscard}
                  className="discard-btn"
                  variant="contained"
                  sx={{ width: 240 }}
                >
                  Discard
                </Button>
                <Button
                type="submit"
                  className="submit-btn"
                  variant="contained"
                  sx={{ width: 240 }}
                >
                  Submit
                </Button>
              </ThemeProvider>
            </Stack>
          </FormControl>
        </form>
      </div>

    </>
  );
}
