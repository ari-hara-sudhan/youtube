import React from 'react'
import "./_sidebar.scss"
import { 
    MdSubscriptions,
    MdThumbUp,
    MdHistory,
    MdLibraryBooks,
    MdHome,
    MdSentimentDissatisfied,
    MdExitToApp,
} from "react-icons/md"
import { useDispatch } from 'react-redux'
import { log_out } from '../../redux/actions/auth.action'
import { useHistory } from 'react-router-dom'
const Sidebar = ({sidebar,handleToggle}) => {
    const dispatch=useDispatch()

    const logout=()=>{
        dispatch(log_out())

    }
    const history =useHistory()
    return (
        <nav
        onClick={()=>handleToggle(false)}
         className={sidebar ? "sidebar open" :"sidebar"}>
            <li onClick={()=>history.push("/")}>
                <MdHome size={23}/>
                <span>Home</span>
            </li>
            <li>
                <MdSubscriptions size={23}/>
                <span>Subcribe</span>
            </li>
            <li>
                <MdHistory size={23}/>
                <span>History</span>
            </li>
            <li>
                <MdThumbUp size={23}/>
                <span>Like</span>
            </li>
            <li>
                <MdLibraryBooks size={23}/>
                <span>Libary</span>
            </li>
            <li>
                < MdSentimentDissatisfied size={23}/>
                <span>Emoji</span>
            </li>
            <hr/>
            <li onClick={logout}>
                <MdExitToApp size={23}/>
                <span>Logout</span>
            </li>

        </nav>
    )
}

export default Sidebar
