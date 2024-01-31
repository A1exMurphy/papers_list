
import { useState } from 'react';


export default function SubmitContactInfo() {
    let [email, setEmail] = useState('');
    let [phone, setPhone] = useState('');
    let [linkedIn, setLinkedIn] = useState('');
    let [additionalInfo, SetadditionalInfo] = useState('');


    const handleSubmit = (e) => {
        e.preventDefault();
        
        const newContact = {
            email: email, 
            phone: phone,
            linkedIn: linkedIn,
            additional_info: additionalInfo,
        }
        
        dispatchEvent({
            type: 'ADD_CONTACT_INFO',
            payload: newContact
        })
        console.log("Handling submit");
    }

    const handleDiscard = () => {
        console.log("Handling discard");
    }
    return (
        <>
            <h1 id='pg-title-create'>Contact Info for Admin</h1>

            <form onSubmit={handleSubmit}>
                <div>
                    <label id='name-label' htmlFor='event-name-input'>Email</label>
                    <input
                        id='event-name-input'
                        type='text'
                        onChange={e => setEmail(e.target.value)}
                        value={email}
                    />
                    <label id='host-label' htmlFor='event-host-input'>Phone</label>
                    <input
                        id='event-host-input'
                        type='text'
                        onChange={e => setPhone(e.target.value)}
                        value={phone}
                    />
                </div>
                <div>
                    <label id='location-label' htmlFor='event-location-input'>linkedIn</label>
                    <input
                        id='event-location-input'
                        type='text'
                        onChange={e => setLinkedIn(e.target.value)}
                        value={linkedIn}
                    />
                </div>
                <div>
                    <label id='date-label' htmlFor='event-date-input'>Additional Info</label>
                    <input
                        id='event-date-input'
                        type='text'
                        onChange={e => SetadditionalInfo(e.target.value)}
                        value={additionalInfo}
                    />
                </div>
                <button className='submit-btn'>Submit</button>
            </form>
            <button onClick={handleDiscard} className='discard-btn'>Discard</button>
        </>
    )
}