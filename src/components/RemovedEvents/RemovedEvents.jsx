import React, { useEffect } from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import './RemovedEvents.css'
import Button from "@mui/material/Button";




export default function RemovedEvents() {
  const dispatch = useDispatch();
  const history = useHistory();

  
  useEffect (() => {
    dispatch({ type: "FETCH_REMOVED_EVENTS" });    
  }, []);
  
  const removedEvents = useSelector((store) => store.archived.deleted);
  // console.log(removedEvents, 'removed events reducer')

  const permanentDelete = (event) => {
      console.log('event for delete', event)
      dispatch({
        type: "PERMANENT_DELETE_EVENT",
        payload: event.id,

      });
    }
  

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
              <th>Delete</th>
              <th>Restore</th>

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
                    <td><Button onClick={() => permanentDelete(event)}>Delete</Button></td>
                    <td><Button onClick={() => { history.push(`/edit_event/${event.id}`) }}>Restore</Button></td>

                  </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  );
}