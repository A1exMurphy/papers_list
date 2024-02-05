
const removedEvents = (state = [], action) => {
  switch (action.type) {
    case "SET_REMOVED_EVENTS":
      return action.payload;
    default:
      return state;
  }
}



export default removedEvents;