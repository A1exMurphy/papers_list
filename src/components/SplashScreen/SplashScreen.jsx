import react, { useEffect } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import "./SplashScreen.css";

export default function SplashScreen() {
    const history = useHistory();
    const handleSubmit = () => {
        console.log("Stuff");
        history.push("/home");
    }
    return (
        <>
            <div className="icon-container">
                <img className="animate-pop-in" src="/favicon.ico" />
            </div>
            <div className="splash-b">
                <h1 className="header">Welcome to your curated list of local networking events</h1>
                <div className="parent-wrap">
                    <button className="button" onClick={handleSubmit}>Browse</button>
                </div>
            </div>
        </>
    )
}