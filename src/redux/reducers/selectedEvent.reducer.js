const selectEvent = (state = {}, action) => {
  if (action.type === "SELECT_EVENT") {

    return action.payload;
  }
  return state;
};

export default selectEvent;
