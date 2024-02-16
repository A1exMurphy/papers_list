import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom/cjs/react-router-dom.min";

export default function DisplayContact(eventContact)  {
    const dispatch = useDispatch();
    const history = useHistory();
    const params = useParams();
    const contact = useSelector((store) => store.selectedContact);
 

    

    useEffect(() => {
        dispatch({
            type: "FETCH_CONTACT",
            payload: params.id
        })
        }, []);
    

    return (
        <div>
        <h1>Contact Info</h1>
        <h3>{contact.email}</h3>
        </div>
    )
}