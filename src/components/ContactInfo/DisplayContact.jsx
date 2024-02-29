import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom/cjs/react-router-dom.min";

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
    console.log(contact, "Display contact's info")

    return (
        <div>
        <h1>Contact Info</h1>
        <h3>{contact[0]?.email}</h3>
        <h3>{contact[0]?.phone}</h3>

        </div>
    )
}