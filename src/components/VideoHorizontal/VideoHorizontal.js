import React from 'react'
import "./videohorizontal.scss"
import {AiFillEye} from 'react-icons/ai'
import request from '../../api'
import moment from 'moment'
import numeral from 'numeral'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { Col, Row } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'

const VideoHorizontal = (id) => {
    const seconds= moment.duration(30000000000).asSeconds()
    const dur =moment.utc(seconds*1000).format("mm:ss")
    const {videos,activeCategory,loading} =useSelector(state=>state.video)
    console.log(videos)
    const history =useHistory()
    const videoId =id?.videoId || id
    const handleclick=()=>{
        alert("no vidos yt")


    }
   
    return (

        <div>
            {videos.map((video)=>(
              
                 
        <Row onClick={handleclick} className="viedohor m-1 py-12 d-flex justify-content-between
        align-items-center">
            <Col className="videohor__left px-10" md={4} xs={6}>
            <LazyLoadImage
                effect="blur"
                width="130px"
                src={video?.snippet?.thumbnails?.medium?.url}
                className="videohor__thumbnail"
                wrapperClassName="videohor__thumbnail-wrapper"
                 />
                <span className="videohor__duration">{dur}</span>

            </Col>
            <Col className="videhor__right mx-10" md={8} xs={6}>
                <p className="videohor__title mb-1">{video?.snippet?.channelTitle}</p>
                
                <div className="videohor__details">
                <span><AiFillEye/> {numeral(video?.statistics?.viewCount).format("0.a")}views• </span>
            <span>{moment(video.snippet.publishedAt).fromNow()}</span>
           

                </div>
                <div className="videohor__channel d-flex align-items-center my-1">
                <LazyLoadImage  className="rounded-circle "  height={40} 
                effect="blur"
                />
                <p className="mx-3">{video.snippet.channelTitle}</p>
                </div>

            </Col>

            
        </Row>

            ))}
        </div>
       

     
    )
}

export default VideoHorizontal
