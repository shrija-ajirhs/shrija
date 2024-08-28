import React, { useState} from "react"; 
// import CSS from "./feedback.module.css"
import './feedback.modules.css'

function Feedback(){ 
    const[feedback, setFeedback]=useState("🤔"); 
    return( 
    <div className="feed"> 
        <p>Feedback: {feedback}</p> 
        <div className="gaps">
        <button className="button" onClick={() => setFeedback('👍')}>👍</button>
        <button className="button" onClick={() => setFeedback('😍')}>😍</button>  
        <button className="button" onClick={() => setFeedback('😒')}>😒</button> 
        <button className="button" onClick={() => setFeedback('😑')}>😑</button> 
        </div>
        </div> 
        ) 
    }; 

export default Feedback;