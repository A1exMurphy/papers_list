import { put, takeLatest } from "redux-saga/effects";
import axios from "axios";


function* permanentDeleteEvent(action) {
  try {
    const response = yield axios({
      method: "DELETE",
      url: `/api/admin/event/${action.payload}`,
    });
    yield put({
      type: "FETCH_REMOVED_EVENTS",
    });
  } catch (error) {
    console.log("Unable to delete tag", error);
  }
}

export default function* permanentDeleteSaga() {
    yield takeLatest("PERMANENT_DELETE_EVENT", permanentDeleteEvent)
}