import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";



export default function RemovedEvents() {
    useEffect = (() => {
        dispatch({ type: "FETCH_REMOVED_EVENTS" });
        
    }, []);
    
    const store = useSelector((store) => store);

  return (
    <div>
      <h2>Removed Events</h2>
      <button>Delete</button>
    </div>
  );
}