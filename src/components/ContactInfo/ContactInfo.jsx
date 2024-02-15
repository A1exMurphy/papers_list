import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { Fragment } from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { TextField, Stack, Divider, FormControl } from "@mui/material";
import Button from "@mui/material/Button";
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
  let [additionalInfo, setAdditionalInfo] = useState("");
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

    dispatch({
      type: "ADD_CONTACT_INFO",
      payload: newContact,
    });
    history.push("/home");
  };

  const handleDiscard = () => {};

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Fragment>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title"></DialogTitle>
          <DialogContent>
            <DialogContentText
              className="DialogText"
              id="alert-dialog-description"
            >
              Your event will be reviewed for approval, Thank You!
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Back</Button>
            <Button onClick={handleSubmit} autoFocus>
              Ok
            </Button>
          </DialogActions>
        </Dialog>
      </Fragment>
      <h1 className="admin-event">Contact Info for Admin</h1>

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
                label="E-Mail"
                id="email-label"
                type="text"
                variant="filled"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                helperText="Contact E-Mail"
                sx={{ width: 230 }}
                required
              />
              <TextField
                label="Phone"
                id="phone-label"
                type="text"
                variant="filled"
                onChange={(e) => setPhone(e.target.value)}
                value={phone}
                helperText="Your Phone Number"
                sx={{ width: 230 }}
                required
              />
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
                onChange={(e) => setAdditionalInfo(e.target.value)}
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
