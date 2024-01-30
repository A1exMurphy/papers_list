import { combineReducers } from "redux";

const archived = (state = [], action) => {
  switch (action.type) {
    case "SET_ARCHIVED":
      return action.payload;
    default:
      return state;
  }
};

const tags = (state = [], action) => {
  switch (action.type) {
    case "SET_TAGS":
      return action.payload;
    default:
      return state;
  }
};

const archiveReducer = combineReducers({
  archived,
  tags,
});

export default archiveReducer;
