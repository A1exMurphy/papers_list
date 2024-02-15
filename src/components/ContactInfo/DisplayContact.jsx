import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";


export default function DisplayContact(eventContact)  {
    const dispatch = useDispatch();
    const history = useHistory();

    const fetchContact = () => {
        dispatch({
            type: "FETCH_CONTACT",
            payload: eventContact.id
        })
    }

    return (
        <div>
        <h1>Contact Info</h1>
        <h3>{eventContact.host}</h3>
        </div>
    )
}