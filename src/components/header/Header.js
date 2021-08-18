import React, { useState } from 'react'
import "./_header.scss"
import {FaBars} from "react-icons/fa"
import {AiOutlineSearch} from "react-icons/ai"
import {MdNotifications,MdApps} from "react-icons/md"
import {Link} from "react-router-dom"
import { useDispatch } from 'react-redux'
import { getVideosCategory } from '../../redux/actions/videos.action'
const Header = ({handleToggle}) => {
    const [input,setInput]=useState()
    const dispatch =useDispatch()
    

    const handleSubmit = (e) =>{
        e.preventDefault()
        dispatch(getVideosCategory(input))
        setInput("")

    }
    return (
        <div className="header">
          <FaBars
          onClick={()=>handleToggle()}
          className="header__menu"
          size={26}
          />
          <Link to="/">
          <img className="header__logo" src="https://www.transparentpng.com/thumb/youtube-logo/hd-youtube-logo-image-0.png" alt="yt-lg"/>
          </Link>
     
          <form onSubmit={handleSubmit}>
              <input value={input} onChange={e=>setInput(e.target.value)} placeholder="Search"  />
              <button type="submit"><AiOutlineSearch size={22}/></button>
          </form>
          <div className="header__icons">
              <MdNotifications size={28}/>
              <MdApps size={28}/>
          
 

          </div>

            
        </div>
    )
}

export default Header