const newEvent = (state = {}, action) => {
    if (action.type === "ADD_EVENT") {
        let newEventData = action.payload;
        return newEventData;
    }

    return state;
}

export default newEvent;