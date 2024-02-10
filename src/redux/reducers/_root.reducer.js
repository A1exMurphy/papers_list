import { combineReducers } from "redux";
import errors from "./errors.reducer";
import user from "./user.reducer";
import events from "./landingpage.reducer";
import selectEvent from "./landingpage.reducer";
import archived from "./adminArchive.reducer";
import tags from "./adminTag.reducer";
import removedEvents from "./removedEvents.reducer";
import editTag from "./editTag.reducer";
import editEvent from "./editEvent.reducer";
import selectedTag from "./selectedTag.reducer";
import newEvent from "./newEvent.reducer";
import selectedEvent from "./selectedEvent.reducer";


// rootReducer is the primary reducer for our entire project
// It bundles up all of the other reducers so our project can use them.
// This is imported in index.js as rootSaga

// Lets make a bigger object for our store, with the objects from our reducers.
// This is what we get when we use 'state' inside of 'mapStateToProps'
const rootReducer = combineReducers({
  newEvent,
  archived, // will show all events and tags that are in the archive
  events, // contains all events
  selectEvent, // gets info for a single event
  errors, // contains registrationMessage and loginMessage
  user,
  removedEvents,
  selectedTag, // for the selected tag
  tags,// will have an id and username if someone is logged in
  editTag,
  editEvent,
  selectedEvent
});

export default rootReducer;
