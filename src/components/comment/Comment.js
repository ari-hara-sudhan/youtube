import moment from 'moment'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getCommentsById } from '../../redux/actions/comments.action'
import "./comment.scss"


const Comment = ({id,comment}) => {
    console.log(id)

    const dispatch =useDispatch()

    useEffect(()=>{
        dispatch(getCommentsById(id))

    },[dispatch,id])
    return (
        <div className="comment p-2 d-flex align-items-center   ">
              <img className="rounded-circle m-3 " height="40px" src="https://yt3.ggpht.com/ytc/AKedOLQ1IkePr9q5BHgj3WLQcL8Xn1cm7ScXo2NU-Gz7eQ=s88-c-k-c0x00ffffff-no-rj"/>
              <div className="comment__body">
                  <p className="comment__header">Submit • {moment('2021-06-6').fromNow()}</p>
                  <p>{comment}</p>
              </div>
        </div>
    )
}

export default Comment
