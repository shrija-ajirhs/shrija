import React from "react";
import { Link } from "react-router-dom";
import CSS from "./contacts.module.css";

    const Contacts = () => {
        return (
            <div className={CSS.cons}>
                <div className="github">
                    <p>Github id :
                        <Link to="https://github.com/Jnishha">@Jnishha</Link>
                    </p>
                </div>
                <div className="linkedin">
                    <p>LinkedIn id :
                        <Link to="https://www.linkedin.com/in/jenisha-shrestha-011a16301/">@Jnishha Shrestha</Link>
                    </p>
                </div>
                <div>
                    <p>Phone Number = +977-9841700000</p>
                </div>
                <div>
                    <p>Email id :
                        <Link to="jnishha@gmail.com">@jnishha@gmail.com</Link>
                    </p>


                </div>


            </div>
        )

    }

export default Contacts;