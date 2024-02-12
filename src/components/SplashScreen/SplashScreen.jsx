import react, { useEffect } from "react";
import "./SplashScreen.css";

export default function SplashScreen() {
    const handleSubmit = () => {
        console.log("Stuff");
    }
    return (
        <>
            <div className="splash-b">
                <h1>Welcome to your curated list of local networking events</h1>
                <button onClick={handleSubmit}>Browse</button>
            </div>
        </>
    )
}