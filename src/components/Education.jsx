import MessageBar from "./MessageBar"
import CSS from "./education.module.css"
const Education=()=>{
    return(
        <div className={CSS.edu}>
        <h3>My Education Background is given as:</h3>
          <MessageBar message="SEE - Gyanodaya Secondary School"/>
          <MessageBar message = "SLC - Kathmandu Model Secondary School"/>
        </div>
    )
}

export default Education;