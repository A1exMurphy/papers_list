import { combineReducers } from "redux";

const events = (state = [], action) => {
  switch (action.type) {
    case "SET_EVENTS":
      return action.payload;
    default:
      return state;
  }
};

const selectedEvent = (state = [], action) => {
  if (action.type === 'SELECT_EVENT') {
    console.log("Selected event is:", action.payload);
    return action.payload;
  }
  return state;
}

export default combineReducers({
  events,
  selectedEvent
});