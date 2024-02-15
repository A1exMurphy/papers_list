import { combineReducers } from "redux";

const newEvent = (state = {}, action) => {
  if (action.type === "ADD_EVENT") {
    let newEventData = action.payload;
    return newEventData;
  }

  return state;
};

const newEventId = (state = {}, action) => {
  if (action.type === "ADD_EVENT_ID") {
    let newEventIdData = action.payload;
    return newEventIdData;
  }

  return state;
};

export default combineReducers({
  newEvent,
  newEventId,
});
