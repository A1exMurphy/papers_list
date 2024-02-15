import { combineReducers } from "redux";

const archived = (state = [], action) => {
  switch (action.type) {
    case "SET_ARCHIVED":
      return action.payload;
    default:
      return state;
  }
};

const approved = (state = [], action) => {
  switch (action.type) {
    case "SET_APPROVED":
      return action.payload;
    default:
      return state;
  }
};

const pending = (state = [], action) => {
  switch (action.type) {
    case "SET_PENDING":
      return action.payload;
    default:
      return state;
  }
};

const deleted = (state = [], action) => {
  switch (action.type) {
    case "SET_DELETED":
      return action.payload;
    default:
      return state;
  }
};

export default combineReducers({
  archived,
  approved,
  pending,
  deleted,
});
