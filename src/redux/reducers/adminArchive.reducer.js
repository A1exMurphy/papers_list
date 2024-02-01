import { combineReducers } from "redux";

const archived = (state = [], action) => {
  switch (action.type) {
    case "SET_ARCHIVED":
      return action.payload;
    default:
      return state;
  }
};

const removedEvents = (state = [], action) => {
  switch (action.type) {
    case "SET_REMOVED_EVENTS":
      return action.payload;
    default:
      return state;
  }
}


const archive = combineReducers({
  archived,
  removedEvents
});

export default archive;

