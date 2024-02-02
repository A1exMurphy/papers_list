import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Modal.css";

export default function Modal({ closeModal }) {
  const dispatch = useDispatch();
  const singleEvent = useSelector((store) => store.selectedEvent.selectedEvent);
  const tags = useSelector((store) => store.tags);

    useEffect(() => {
        dispatch({type: 'FETCH_EVENTS'});
    }, [])
    return (
        <>
            <div className="modal-background">
                <div className="modal-container">
                    <button className="close-btn" type="close" onClick={() => {console.log("closeModal"); closeModal(false);}}>x</button>
                    <div className="modal-title">
                        <h1>{singleEvent.event_name}</h1>
                    </div>
                    <div className="modal-body">
                        <p>{singleEvent.description}</p>
                    </div>
                    <div className="modal-img">
                        <img src={singleEvent.image} alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}

