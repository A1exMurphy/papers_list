let selectedTag = (state = [], action) => {
    if (action.type === 'SELECTED_TAGS') {
        selectedTag = action.payload;
        [...state, selectedTag];
    }
    
    return state;
}

export default selectedTag;