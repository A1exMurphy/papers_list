import { put, takeLatest } from "redux-saga/effects";
import axios from "axios";

function* adminAddEvent(action) {
  try {
    const response = yield axios({
      method: "POST",
      url: "/api/adminevent",
      data: action.payload,
    });
  } catch (error) {
    console.log("Unable to post new events to server", error);
  }
}

function* adminRemoveEvent(action) {
  try {
    const response = yield axios({
      method: "PUT",
      url: `/api/admin/remove/${action.payload.id}`,
      data: action.payload,
    });
  } catch (error) {
    console.log("Unable to send event to deleted table", error);
  }
}
//sagas 👇👆 that handle toggling an event from active/inactive
function* adminRestoreEvent(action) {
  try {
    const response = yield axios({
      method: "PUT",
      url: `/api/admin/restore/${action.payload.id}`,
      data: action.payload,
    });
  } catch (error) {
    console.log("Unable to send event to deleted table", error);
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
  yield takeLatest("REMOVE_EVENT", adminRemoveEvent);
  yield takeLatest("RESTORE_EVENT", adminRestoreEvent);
  yield takeLatest("ADMIN_DELETE_EVENT", adminDeleteEvent);
}
