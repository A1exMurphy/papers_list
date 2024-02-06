const editEvent = (state = {}, action) => {
    if (action.type === 'SET_EVENT_TO_EDIT') {
      return action.payload
    } else if (action.type === 'CHANGE_HOST_NAME') {
      const host = action.payload
        return { ...state, host: host }

    }else if (action.type === 'CHANGE_EVENT_NAME') {
        const EventName = action.payload
          return { ...state, event_name: EventName }
  
      }else if (action.type === 'CHANGE_COST') {
        const cost = action.payload
          return { ...state, cost: cost }
  
      }else if (action.type === 'CHANGE_TIME') {
        const Time = action.payload
          return { ...state, time: Time }
    }
    else if (action.type === 'CHANGE_LOCATION') {
        const location = action.payload
          return { ...state, location: location }
  
      }
      else if (action.type === 'CHANGE_DESCRIPTION') {
        const description = action.payload
          return { ...state, description: description }
  
    }
    else if (action.type === 'CHANGE_EVENT_SIZE') {
        const EventSize = action.payload
          return { ...state, event_size: EventSize }
    }
        
      else if (action.type === 'CHANGE_IMAGE') {
      const image = action.payload
        return { ...state, image: image}

    }
    else if (action.type === 'CHANGE_STATUS') {
        const Status = action.payload
          return { ...state, admin_approved: Status }
  
      }
      return state;

 }



export default editEvent