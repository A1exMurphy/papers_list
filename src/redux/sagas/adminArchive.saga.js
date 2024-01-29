import { put, takeLatest } from "redux-saga/effects";
import axios from "axios";

function* getArchivedEvents() {
  try {
    const response = yield axios({
      method: "GET",
      url: "/api/eventfeed",
    });
    yield put({
      type: "SET_ARCHIVED",
      payload: response.data,
    });
  } catch (error) {
    console.log("Unable to get archived events from server", error);
  }
}
export default function* archivedEventSaga() {
  yield takeLatest("FETCH_ARCHIVED_EVENTS", getArchivedEvents);
}
