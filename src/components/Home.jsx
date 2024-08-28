import React from "react";
import CSS from "./Home.module.css"

const Home=()=>{

    return(
        <div className={CSS.Home}>
            <h1 >Jenisha Shrestha</h1>
           <img className={CSS.profile} src= "/image/profile.png" />
           <h3>Bsc. CSIT student</h3>
           <p>I am Jenisha Shrestha, student of Bsc. CSIT of Tribhuvan University studing at Padmakanya Multiple Campus.</p>

        </div>
    )
}

export default Home;