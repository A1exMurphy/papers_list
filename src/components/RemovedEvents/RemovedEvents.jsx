import React, { useEffect } from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';



export default function RemovedEvents() {
  const dispatch = useDispatch();
  
  useEffect (() => {
    dispatch({ type: "FETCH_REMOVED_EVENTS" });    
  }, []);
  
  const removedEvents = useSelector((store) => store.removedEvents);
  console.log(removedEvents, 'removed events reducer')
  return (
    <div>
      <h2>Removed Events</h2>
        <div>
          {removedEvents &&
            removedEvents.map((event) => {
              return (
                <div key={event.id}>
                  <h3>{event.event_name}</h3>
                </div>
              )
            })
          }
        </div>
      <button>Delete</button>
    </div>
  );
}