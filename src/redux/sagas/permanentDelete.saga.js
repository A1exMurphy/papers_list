import { put, take, takeLatest } from "redux-saga/effects";
import axios from "axios";


function* permanentDeleteEvent(action) {
  // console.log(action.payload, 'action for delete')
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