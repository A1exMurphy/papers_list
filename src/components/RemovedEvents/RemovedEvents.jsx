import React, { useEffect } from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import './RemovedEvents.css'



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
      <table className='removedTable removed-post-it'>
        <thead>
            <tr>
              <th>Host</th>
              <th>Event Name</th>
              <th>Description</th>
              <th>Date</th>
              <th></th>
            </tr>
          </thead>
        <tbody>
          {removedEvents &&
            removedEvents.map((event) => {
              return (
                  <tr className='removedEventsTable' key={event.id}>
                    <td>{event.host}</td>
                    <td>{event.event_name}</td>
                    <td>{event.description}</td>
                    <td>{event.time}</td>
                    <td><button>Delete</button></td>
                  </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  );
}