import { put, takeLatest } from "redux-saga/effects";
import axios from "axios";

function* adminAddEvent(action) {
  try {
    const response = yield axios({
      method: "POST",
      url: "/api/adminevent",
      data: action.payload
    });
  } catch (error) {
    console.log("Unable to post new events to server", error);
  }
}


export default function* adminAddEventSaga() {
  yield takeLatest("ADMIN_ADD_EVENT", adminAddEvent);
}
