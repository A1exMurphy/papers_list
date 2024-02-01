
import { useState} from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import './NewEvent.css';

export default function NewEvent() {
    let [titleInput, setTitleInput] = useState('');
    let [hostInput, setHostInput] = useState('');
    let [locationInput, setLocationInput] = useState('');
    let [dateInput, setDateInput] = useState('');
    let [descriptionInput, setDescriptionInput] = useState('');
    let [image, setImage] = useState('');
    let [eventSize, setEventSize] = useState('');
    let [costInput, setCostInput] = useState('');
  
    const dispatch = useDispatch();
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();

        const newEvent = {
            event_name: titleInput, 
            host: hostInput,
            time: dateInput,
            cost: costInput,
            location: locationInput,
            description: descriptionInput,
            image: image,
            event_size: eventSize
        }

        console.log(newEvent);

        dispatch({
            type: 'ADD_EVENT',
            payload: newEvent
        })
        console.log("Handling submit");
    }

    const handleDiscard = (e) => {
        console.log("Handling discard");

        history.push("/");
    }
    return (
        <>
            <h1 id='pg-title-create'>Create Event</h1>

            <form onSubmit={handleSubmit}>
                <div>
                    <label id='name-label' htmlFor='event-name-input'>Name</label>
                    <input
                        id='event-name-input'
                        type='text'
                        onChange={e => setTitleInput(e.target.value)}
                        value={titleInput}
                    />
                    <label id='host-label' htmlFor='event-host-input'>Host</label>
                    <input
                        id='event-host-input'
                        type='text'
                        onChange={e => setHostInput(e.target.value)}
                        value={hostInput}
                    />
                </div>
                <div>
                    <label id='location-label' htmlFor='event-location-input'>Location</label>
                    <input
                        id='event-location-input'
                        type='text'
                        onChange={e => setLocationInput(e.target.value)}
                        value={locationInput}
                    />
                </div>
                <div>
                    <label id='date-label' htmlFor='event-date-input'>Date</label>
                    <input
                        id='event-date-input'
                        type='text'
                        onChange={e => setDateInput(e.target.value)}
                        value={dateInput}
                    />
                </div>
                <div>
                    <label id='cost-label' htmlFor='event-cost-input'>Cost</label>
                    <input
                        id='event-cost-input'
                        type='text'
                        onChange={e => setCostInput(e.target.value)}
                        value={costInput}
                    />
                </div>
                <div>
                    <label id='description-label' htmlFor='description-input'>Description</label>
                    <input
                        id='description-input'
                        type='text'
                        onChange={e => setDescriptionInput(e.target.value)}
                        value={descriptionInput}
                    />
                </div>
                <div>
                    <label id='image-label' htmlFor='image-input'>Image</label>
                    <input
                        id='image-input'
                        type='text'
                        onChange={e => setImage(e.target.value)}
                        value={image}
                    />
                </div>
                <div>
                    <label id='event-size-label' htmlFor='size-input'>Event Size</label>
                    <input
                        id='size-input'
                        type='text'
                        onChange={e => setEventSize(e.target.value)}
                        value={eventSize}
                    />
                </div>
                <button className='submit-btn'>Submit</button>
            </form>
            <button onClick={handleDiscard} className='discard-btn'>Discard</button>
        </>
    )
}