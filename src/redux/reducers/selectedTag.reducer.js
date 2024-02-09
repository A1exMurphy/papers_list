let selectedTag = (state = [], action) => {
    if (action.type === 'SELECTED_TAGS') {
        const selectedTag = action.payload;
        [...state, selectedTag];
    }
    
    return state;
}

export default selectedTag;