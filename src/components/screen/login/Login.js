import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import login from '../../../redux/actions/auth.action'
import './login.scss'
import {useHistory} from "react-router-dom"
const Login = () => {
    const dispatch =useDispatch()
  

    const accessToken=useSelector(state=>state.auth.accessToken)
    const handleLogin = () => {
        dispatch(login())
      

    }
    const history=useHistory()

    useEffect(()=>{
        if(accessToken){
            history.push("/")
        }

    },[accessToken,history])
    return (
        <div className="login">
            <div className="login__container">
            <h2>Youtube Clone</h2>
            <img src="https://www.transparentpng.com/thumb/youtube-logo/hd-youtube-logo-image-0.png"/>
            <div >
               
                <button onClick={handleLogin}>Login with Google</button>
                <p>Its a yt-api project</p>

            </div>
            </div>
           
            
        </div>
    )
}

export default Login
