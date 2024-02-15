import { put, takeLatest } from "redux-saga/effects";
import axios from "axios";

function* getEvents() {
  try {
    const response = yield axios({
      method: "GET",
      url: "/api/eventfeed",
    });
    yield put({
      type: "SET_EVENTS",
      payload: response.data,
    });
  } catch (error) {
    console.log("Unable to get events from server", error);
  }
}

function* SelectedEvent(action) {
  try {
    const response = yield axios({
      method: "GET",
      url: `/api/eventfeed/selected/${action.payload.id}`,
    });
    yield put({
      type: "SELECT_EVENT",
      payload: response.data,
    });
  } catch (error) {
    console.log("Unable to get events from server", error);
  }
}

export default function* eventSaga() {
  yield takeLatest("FETCH_EVENTS", getEvents);
  yield takeLatest("FETCH_SELECTED_EVENT", SelectedEvent);
}
