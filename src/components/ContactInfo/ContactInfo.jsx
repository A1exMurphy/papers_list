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
      eventId: eventId
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
      <h1 id="pg-title-create">Contact Info for Admin</h1>

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
    </>
  );
}
