import { takeLatest } from "redux-saga/effects";
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
export default function* contactSaga() {
  yield takeLatest("ADD_CONTACT", submitContactInfo);
}
