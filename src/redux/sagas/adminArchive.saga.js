import { put, takeLatest } from "redux-saga/effects";
import axios from "axios";

function* getArchivedEvents() {
  try {
    const response = yield axios({
      method: "GET",
      url: "/api/admin/events",
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
  // This is a delete in name only. It just moves the event to a "deleted archive"
  try {
    const response = yield axios({
      method: "PUT",
      url: `/api/admin/${action.payload.id}`,
      data: action.payload,
    });
    yield put({
      type: "FETCH_ARCHIVED_EVENTS",
    });
  } catch (error) {
    console.log("Unable to delete event from archive", error);
  }
}
function* restoreFromDeleted(action) {
  try {
    const response = yield axios({
      method: "PUT",
      url: `/api/admin/${action.payload.id}`,
      data: action.payload,
    });
    yield put({
      type: "FETCH_ARCHIVED_EVENTS",
    });
  } catch (error) {
    console.log("Unable to delete event from archive", error);
  }
}
function* adminEditEvent(action) {
  try {
    const response = yield axios({
      method: "PUT",
      url: `/api/admin/${action.payload.id}`,
      data: action.payload,
    });
  } catch (error) {
    console.log("Unable to edit event", error);
  }
}
function* getTags() {
  try {
    const response = yield axios({
      method: "GET",
      url: "/api/admin/tags",
    });
    yield put({
      type: "SET_TAGS",
      payload: response.data
    });
  } catch (error) {
    console.log("Unable to get tags from server", error);
  }
}
function* addTags(action) {
  console.log('action', action.payload);
  try {
    const response = yield axios({
      method: "POST",
      url: `/api/admin`,
      data: action.payload
    });
    yield put({
      type: "FETCH_TAGS"
    });
  } catch (error) {
    console.log("Unable to add tags to server", error);
  }
}
function* deleteTag(action) {
  try {
    const response = yield axios({
      method: "DELETE",
      url: `/api/admin/${action.payload.id}`,
      data: action.payload
    });
    yield put({
      type: "FETCH_TAGS",
    });
  } catch (error) {
    console.log("Unable to delete tag", error);
  }
}

function* fetchTagDetails(action) {
  console.log(action.payload);
  try {
      const TagId = action.payload
      console.log("TagId",TagId );
    const response = yield axios({
      method: 'GET',
      url: `/api/admin/tag/${TagId}`
    })

      const tagToEdit = response.data
    
    yield put({
      type: 'SET_TAG_TO_EDIT',
      payload: tagToEdit
    })
  } catch (err) {
    console.log('shoot. fetchAppointmentDetails did not work. :(', err)
  }
}

function* SubmitEditTag(action) {
  console.log('action.payload',action.payload);
  try {
const editedTag = action.payload
    const response = yield axios({
      method: "PUT",
      url: `/api/admin/tags/${editedTag.id}`,
       data: {
        tag_name: editedTag.tag_name
    }
    });
    yield put({
      type: "FETCH_TAGS"
    });
  } catch (error) {
    console.log("Unable to delete tag", error);
  }
}

function* StatusChange(action) {
   
  try {
    console.log(action.payload)
      const editedStatus = action.payload
      

    const response = yield axios({
      method: 'PUT',
      url: `/api/admin/status/${editedStatus}`,
    })
      
 

    yield put({
      type: "FETCH_TAGS"
    })
  } catch (err) {
    console.log('submitStatusChange failed.', err)
  }

}
export default function* archivedEventSaga() {
  yield takeLatest("FETCH_ARCHIVED_EVENTS", getArchivedEvents);
  yield takeLatest("DELETE_FROM_ARCHIVE", deleteFromArchive);
  yield takeLatest("RESTORE_FROM_DELETED", restoreFromDeleted);
  yield takeLatest("ADMIN_EDIT_EVENT", adminEditEvent);
  yield takeLatest("FETCH_TAGS", getTags);
  yield takeLatest("ADD_TAGS", addTags);
  yield takeLatest("DELETE_TAG", deleteTag);
  yield takeLatest("SUBMIT_EDIT_TAG", SubmitEditTag);
  yield takeLatest("FETCH_TAG_TO_EDIT", fetchTagDetails);
  yield takeLatest("STATUS_CHANGE", StatusChange);

}
