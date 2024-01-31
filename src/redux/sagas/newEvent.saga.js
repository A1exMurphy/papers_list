import { put, takeLatest } from "redux-saga/effects";
import axios from "axios";

function* addNewEvent(action) {
  try {
    const response = yield axios({
      method: "POST",
      url: "/api/newevent",
      data: action.payload
    });
  } catch (error) {
    console.log("Unable to post new events to server", error);
  }
}

export default function* newEventSaga() {
  yield takeLatest("ADD_EVENT", addNewEvent);
  
}
