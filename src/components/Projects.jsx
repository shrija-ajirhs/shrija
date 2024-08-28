import { Link } from "react-router-dom";
import CSS from "./projects.module.css";

const Projects=()=>{
    return(
        <div className={CSS.pro}>
                <h3>Some of my basic projects links are:</h3>
                <div> Basic To-dos app  =  
            <Link to="https://todos-jenisha-shresthas-projects-74291468.vercel.app/">Link to To-dos app</Link>
        
            </div>
            <img className={CSS.todo} src= "/image/todos.png" />
            <div>
                <p>Basic Login Page  =  
            <Link to="https://github.com/Jnishha/login-pages?tab=readme-ov-file">Link to login page Codes</Link>
            </p>
            <img className={CSS.logg} src= "/image/login.png" />
            </div>
        </div>
    )

}

export default Projects;