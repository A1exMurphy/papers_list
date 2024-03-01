import { put, takeLatest } from "redux-saga/effects";
import axios from "axios";

function* submitContactInfo(action) {
  try {
    const response = yield axios({
      method: "POST",
      url: "/api/contact",
      data: action.payload,
    });
  } catch (error) {
    console.log("Unable to post contact info to server", error);
  }
}

function* fetchContactInfo(action) {
  // console.log(action.payload, "saga getting event id")
  try {
    const response = yield axios({
      method: "GET",
      url: `/api/contact/${action.payload}`,
    });
      const selectContact = response.data
      console.log(selectContact, "selected contact")

  yield put ({
    type:"SELECT_EVENT_CONTACT",
    payload: selectContact
  })
  } catch (error) {
    console.log("Unable to GET contact info from server", error)
  }
}


export default function* contactSaga() {
  yield takeLatest("ADD_CONTACT", submitContactInfo);
  yield takeLatest("FETCH_CONTACT", fetchContactInfo);
}
