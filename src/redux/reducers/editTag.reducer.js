const editTag = (state = {}, action) => {
    if (action.type === 'SET_TAG_TO_EDIT') {
        return action.payload
    } else if (action.type === 'CHANGE_TAG_NAME') {
        const tagName = action.payload
        return { ...state, tag_name: tagName }
    }
    //  else if (action.type === 'CHANGE_STATUS') {
    //         const status = action.payload
    //           return { ...state, status: status }
      
    //       }
    return state;
}
export default editTag