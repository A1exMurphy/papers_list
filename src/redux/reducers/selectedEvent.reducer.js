let selectedEvent = (state = [], action) => {
    if (action.type === 'SELECTED_EVENT') {
        const singleEvent = action.payload;
        // [...state, singleEvent];
        return singleEvent
    }
    
    return state;
}

export default selectedEvent;