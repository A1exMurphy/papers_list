import { combineReducers } from "redux";
import errors from "./errors.reducer";
import user from "./user.reducer";
import events from "./landingpage.reducer";
import selectedEvent from "./landingpage.reducer";
import archiveReducer from "./adminArchive.reducer";

// rootReducer is the primary reducer for our entire project
// It bundles up all of the other reducers so our project can use them.
// This is imported in index.js as rootSaga

// Lets make a bigger object for our store, with the objects from our reducers.
// This is what we get when we use 'state' inside of 'mapStateToProps'
const rootReducer = combineReducers({
  archiveReducer, // will show all events and tags that are in the archive
  events, // contains all events
  selectedEvent, // gets info for a single event
  errors, // contains registrationMessage and loginMessage
  user, // will have an id and username if someone is logged in
});

export default rootReducer;
