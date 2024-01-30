import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import "./EventPage.css";

export default function EventPage() {
    const dispatch = useDispatch();
    const singleEvent = useSelector(store => store.selectedEvent.selectedEvent);

    useEffect(() => {
        dispatch({type: 'FETCH_ANIMALS'});
    }, [])

    return (
        <>
            <h1>{singleEvent.event_name}</h1>
            <img src={singleEvent.image} />
            <p>{singleEvent.description}</p>
        </>
    )
}