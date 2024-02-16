const selectedContact = (state = {}, action) => {
    if (action.type === "SELECT_EVENT_CONTACT") {
  
      return action.payload;
    }
    return state;
  };
  
  export default selectedContact;