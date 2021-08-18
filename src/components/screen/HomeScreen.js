import React, { useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { getpopularVideos, getVideosCategory } from '../../redux/actions/videos.action'
import Categary from '../categary/Categary'
import Video from '../videos/Video'
import "./_home.scss"
import Skeleton from 'react-loading-skeleton'
import InfiniteScroll from "react-infinite-scroll-component"
import SkeletonVideo from '../skeleton/SkeletonVideo'
const HomeScreen = () => {
    const dispatch =useDispatch()


    useEffect(()=>{
        dispatch(getpopularVideos())

    },[dispatch])
    const {videos,activeCategory,loading} =useSelector(state=>state.video)

console.log(loading)
    const fetchData=()=>{
        if(activeCategory=== 'All')
        dispatch(getpopularVideos())
        else{
            dispatch(getVideosCategory(activeCategory))
        }

    }

    return (
        <div className="homescreen">
            <Container>
                <Categary/>
              
                   
                        <InfiniteScroll
                        dataLength={videos.length}
                        next={fetchData}
                        hasmore={true}
                        Loader={
                            <div className="spinner-border text-danger d-block mx-auto">

                            </div>
                        }
                        className="row"
                        >
                            
                        {loading ?  [...Array(20)].map(()=>
                            <Col lg={3} md={4}>
                           <SkeletonVideo/>
                            </Col>
                           
                        ):(
                            videos.map((video)=>(
                                <Col lg={3} md={4}>
                                <Video video={video} key={video.id}/>
                                </Col>
                         
                            ))
                            
                        )
                    }
                 

                         
                        </InfiniteScroll>
                        
               
            </Container>
        </div>
    )
}

export default HomeScreen
