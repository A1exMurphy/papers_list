import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom/cjs/react-router-dom.min";
import "./DisplayContact.css";

export default function DisplayContact(eventContact)  {
    const dispatch = useDispatch();
    const history = useHistory();
    const params = useParams();
    
    useEffect(() => {
        dispatch({
            type: "FETCH_CONTACT",
            payload: params.id
        })
    }, []);
    
    const contact = useSelector((store) => store.selectedContact);
    // console.log(contact, "Display contact's info")

    return (
        <div className="contact-post-it">
        <h1 className="contact-header">Contact Info</h1>
            <div className="grid-container">
                
                    <div className="grid-item1">EMAIL</div>
                    <div className="grid-item2">:</div>
                    <div className="grid-item3"> {contact[0]?.email}</div>
                
                
                    <div className="grid-item1">PHONE</div>
                    <div className="grid-item2">:</div>
                    <div className="grid-item3"> {contact[0]?.phone}</div>
                
                
                    <div className="grid-item1">LINKEDIN</div>
                    <div className="grid-item2">:</div>
                    <div className="grid-item"> {contact[0]?.linkedIn}</div>
                
                
                    <div className="grid-item1">INFO</div>
                    <div className="grid-item2">:</div>
                    <div className="grid-item3"> {contact[0]?.additional_info}</div>
                
            </div>
        </div>
    )
}