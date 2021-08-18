import React, { useState } from 'react'
import Comment from '../comment/Comment'
import "./comments.scss"
const Comments = ({id}) => {
    const [input,setInput]=useState()
    const [comments,setComments]=useState([])
    const  handlesubmit=(e)=>{
        e.preventDefault()
        setComments([...comments,input])
        setInput("")


    }
    return (
        <div className="comments">
            <p>1233 commnets</p>
            <div className="comment__form d-flex align-items-center ">
                <img  className="rounded-circle m-3 " height="40px" src="https://yt3.ggpht.com/ytc/AKedOLQ1IkePr9q5BHgj3WLQcL8Xn1cm7ScXo2NU-Gz7eQ=s88-c-k-c0x00ffffff-no-rj"/>
                <form onSubmit={handlesubmit} className="d-flex flex-grow-1">
                    <input  value={input} onChange={e=>setInput(e.target.value)} type="text " placeholder= " Enter your comments.."  className="flex-grow-1" />
                    <button>Comment</button>


                </form>

            </div>
            <div className="commnets__list">
                {
                    comments.map(comment=>(
                        <Comment comment={comment} id={id}/>
                    ))
                 
                }
            </div>
            
        </div>
    )
}

export default Comments
