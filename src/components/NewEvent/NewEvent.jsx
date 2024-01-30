
import { useState } from 'react';
import './NewEvent.css';

export default function NewEvent() {
    let [titleInput, setTitleInput] = useState('');
    let [hostInput, setHostInput] = useState('');
    let [locationInput, setLocationInput] = useState('');
    let [dateInput, setDateInput] = useState('');
    let [costInput, setCostInput] = useState('');


    const handleSubmit = (e) => {
        e.preventDefault();

        dispatchEvent({
            type: 'ADD_EVENT',
            payload: {
                title: titleInput, 
                host: hostInput,
                date: dateInput,
                cost: costInput,
                location: locationInput
            }
        })
        console.log("Handling submit");
    }

    const handleDiscard = () => {
        console.log("Handling discard");
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
                        onChange={e => setTitleInput(e.target.value)}
                        value={titleInput}
                    />
                </div>
                <div>
                    <label id='date-label' htmlFor='event-date-input'>Name</label>
                    <input
                        id='event-date-input'
                        type='text'
                        onChange={e => setTitleInput(e.target.value)}
                        value={titleInput}
                    />
                </div>
                <div>
                    <label id='cost-label' htmlFor='event-cost-input'>Cost</label>
                    <input
                        id='event-cost-input'
                        type='text'
                        onChange={e => setTitleInput(e.target.value)}
                        value={titleInput}
                    />
                </div>
                <button className='submit-btn'>Submit</button>
            </form>
            <button onClick={handleDiscard} className='discard-btn'>Discard</button>
        </>
    )
}