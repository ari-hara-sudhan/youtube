import React, { useEffect } from 'react'
import { Col, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getRelatedVideo, getVideoById } from '../../../redux/actions/videos.action'
import Comments from '../../comments/Comments'
import VideoHorizontal from '../../VideoHorizontal/VideoHorizontal'
import VideoMetaData from '../../videometadata/VideoMetaData'
import "./watchscreen.scss"
const WatchScreen = () => {



    const {id}=useParams()
    console.log(id)
    const dispatch =useDispatch()

    useEffect(()=>{
        dispatch(getVideoById(id))
        dispatch(getRelatedVideo(id))

    },[dispatch,id])

    const {video,loading}=useSelector(state=>state.selectedVideo)
    return (
        <Row>
            <Col lg={8}>
                <div className="watchscreen__player">
                    <iframe src={`https://www.youtube.com/embed/${id}`}frameborder="0"
                    title={video?.snippet?.title}
                    allowfullscreen
                    width="100%"
                    height="100%"
                    ></iframe>
                </div>

                {
                    !loading ?  <VideoMetaData video={video} videoId={id}/>:<h2>loading</h2>
                }
               
                <Comments id={id}/>
            </Col>
            <Col lg={4}>
           <VideoHorizontal id={id}/>

    
              
            </Col>
        </Row>
    )
}

export default WatchScreen
