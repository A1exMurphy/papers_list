import { put, takeLatest } from "redux-saga/effects";
import axios from "axios";

function* getArchivedEvents() {
  try {
    const response = yield axios({
      method: "GET",
      url: "/api/admin",
    });
    yield put({
      type: "SET_ARCHIVED",
      payload: response.data,
    });
  } catch (error) {
    console.log("Unable to get archived events from server", error);
  }
}
function* deleteFromArchive(action) {
    try {
        const response = yield axios({
            method: "DELETE",
            url: `/api/admin/${action.payload.id}`,
            data: action.payload,

        });
        yield put({
            type: "FETCH_ARCHIVED_EVENTS",
        })
    } catch (error) {
        console.log("Unable to delete event from archive", error)
    }

}
export default function* archivedEventSaga() {
  yield takeLatest("FETCH_ARCHIVED_EVENTS", getArchivedEvents);
  yield takeLatest("DELETE_FROM_ARCHIVE", deleteFromArchive);

}
