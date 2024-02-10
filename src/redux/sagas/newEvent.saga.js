import { put, takeLatest } from "redux-saga/effects";
import axios from "axios";


function* addNewEvent(action) {
console.log('action.payload', action.payload);
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
    yield put({
      type: "ADD_EVENT_ID",
      payload: response.data.id
    })
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
    console.log("Unable to post contact info to server", error);
  }
}

export default function* newEventSaga() {
  yield takeLatest("SAGA/ADD_EVENT", addNewEvent);
  yield takeLatest("ADD_CONTACT_INFO", addNewContact);
}
