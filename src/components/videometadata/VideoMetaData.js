import moment from 'moment'
import React, { useEffect } from 'react'
import "./videometadata.scss"
import numeral from 'numeral'
import ShowMoreText from 'react-show-more-text'
import {MdThumbUp,MdThumbDown} from 'react-icons/md'
import { useDispatch, useSelector } from 'react-redux'
import { checkSubscribtionstatus, getChannelDatabyId } from '../../redux/actions/channel.action'
const VideoMetaData = ({video:{snippet,statistics},videoId}) => {



        const {channelId,channelTitle,description,title,publishedAt}=snippet;
     

     const {viewCount,likeCount,dislikeCount}=statistics;
    const dispatch =useDispatch()

    const {snippet:channelsnippet,statistics:channelstatistics}
    =useSelector(state=>state.channelVideo)
    const subscriptionstatus=useSelector(state=>state.channelVideo.subcriptionstatus)
 
     useEffect(()=>{
        dispatch(getChannelDatabyId(channelId));
        dispatch(checkSubscribtionstatus(channelId))

     },[channelId,dispatch])
    return (
        <div className="videometadata py-2">
            <div className="videometadata__top">
               <h5>{title}</h5>
               <div className="d-flex align-items-center
               justify-content-between py-2">
               <span>{numeral(viewCount).format("0.a")}views•
               {moment(publishedAt).fromNow()}</span>
              
               <div className="px-3">
                   <span className="mx-2">
                       <MdThumbUp size={26} />{numeral(likeCount).format("0.a")}
                   </span>
                   <span>
                       <MdThumbDown size={26} />{numeral(dislikeCount).format("0.a")}
                   </span>
               </div>
               </div>
            </div>
            <div className="videometadata__channel d-flex align-items-center justify-content-between my-2 py-3 ">
                <div className="d-flex align-items-center ">
                    <img  height="40px" src={channelsnippet?.thumbnails?.default?.url}
                    className="rounded-circle mr-3"
                    
                    />
                    <div className="d-flex flex-column mx-3">
                        <span>{channelTitle}</span>
                        <span>{numeral(channelstatistics?.subscriberCount).format("0.a")}Subscriber</span>

                    </div>
                </div>
                <button className="border-0 p-2 m-2">{subscriptionstatus ? 'subcribed':'subcribe'}</button>

            </div>
            <div className="videometadata__description">
                <ShowMoreText lines={2}
                more="SHOW MORE"
                less="SHOW LESS"
                anchorClass='showMoreText'
                expanded={false}>{description}
                </ShowMoreText>
                 
            </div>
        </div>
    )
}

export default VideoMetaData
