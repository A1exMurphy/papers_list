import { put, takeLatest } from "redux-saga/effects";
import axios from "axios";

function* adminAddEvent(action) {
  try {
    const response = yield axios({
      method: "POST",
      url: "/api/adminevent/event",
      data: action.payload,
    });
  } catch (error) {
    console.log("Unable to post new events to server", error);
  }
}

function* adminDeleteEvent(action) {
  try {
    const response = yield axios({
      method: "PUT",
      url: `/api/admin/${action.payload.id}`,
      data: action.payload,
    });
  } catch (error) {
    console.log("Unable to send event to deleted table", error);
  }
}

export default function* adminAddEventSaga() {
  yield takeLatest("ADMIN_ADD_EVENT", adminAddEvent);
  yield takeLatest("ADMIN_DELETE_EVENT", adminDeleteEvent);
}
