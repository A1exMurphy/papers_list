import { put, takeLatest } from "redux-saga/effects";
import axios from "axios";

function* addNewEvent(action) {
  try {
    const headers = {
      'content-type': 'multipart/form-data'
    }
    const response = yield axios({
      method: "POST",
      url: "/api/newevent/event",
      headers: headers,
      data: action.payload
    });
  } catch (error) {
    console.log("Unable to post new events to server", error);
  }
}

function* addNewContact(action) {
  try {
    const response = yield axios({
      method: "POST",
      url: "/api/contact",
      data: action.payload
    });
  } catch (error) {
    console.log("Unable to post new events to server", error);
  }
}

export default function* newEventSaga() {
  yield takeLatest("ADD_EVENT", addNewEvent);
  yield takeLatest("ADD_CONTACT_INFO", addNewContact);
}
