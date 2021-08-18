import request from "../../api"
import { HOME_VIDEOS_FAIL, HOME_VIDEOS_REQUEST, HOME_VIDEOS_SUCESS, RELATED_VIDEO_FAIL, RELATED_VIDEO_REQUEST, RELATED_VIDEO_SUCESS, SELECTED_VIDEOS_FAIL, SELECTED_VIDEOS_REQUEST, SELECTED_VIDEOS_SUCESS } from "../reducers/actionTypes"

export const getpopularVideos=()=>async (dispatch,getState)=>{
    try {
        dispatch({
            type:HOME_VIDEOS_REQUEST,
        })
        const {data}=  await request.get("/videos",{
            params:{
                part:"snippet,contentDetails,statistics",
                chart:"mostPopular",
                regionCode:"IN",
                maxResults:20,
              

            }
        })

        dispatch({
            type:HOME_VIDEOS_SUCESS,
            payload:{
                videos:data.items,
                nextPageToken:data.nextPageToken,
                category:'All'
            }
        })
    } catch (error) {
        
        console.log(error)
        dispatch({
            type:HOME_VIDEOS_FAIL,
            message:error.message,
        })
    }
}
export const getVideosCategory=(keyword)=>async(dispatch,getState)=>{
    try {
        dispatch({
            type:HOME_VIDEOS_REQUEST,
        })
        const {data}=  await request.get("/search",{
            params:{
                part:"snippet",
                maxResults:20,
                q:keyword,
                type:'video',
                
            }
        })
        

        dispatch({
            type:HOME_VIDEOS_SUCESS,
            payload:{
                videos:data.items,
                nextPageToken:data.nextPageToken,
                category:keyword,
        
            }
        })
    } catch (error) {
        
        console.log(error)
        dispatch({
            type:HOME_VIDEOS_FAIL,
            message:error.message,
        })
    }
}


export const getVideoById = (id) =>async dispatch=>{
    try {
        dispatch({
            type:SELECTED_VIDEOS_REQUEST,

        })
      const {data} = await request('/videos',{
            params:{
                part:'snippet,statistics',
                id:id
            }
        })
        dispatch({type:SELECTED_VIDEOS_SUCESS,
        payload:data.items[0]})
        
    } catch (error) {
        console.log(error.message)

        dispatch({type:SELECTED_VIDEOS_FAIL,
        payload:error.message})
        
    }
}
export const getRelatedVideo = (id) =>async dispatch=>{
    try {
        dispatch({
            type:RELATED_VIDEO_REQUEST,
            

        })
      const {data} = await request('/videos',{
            params:{
                part:'snippet',
                reletedToVideoId:id,
                maxResults:15,
                type:'video'
            }
        })
        dispatch({type:RELATED_VIDEO_SUCESS,
        payload:data.items})
        
    } catch (error) {
        console.log(error.message)

        dispatch({type:RELATED_VIDEO_FAIL,
        payload:error.message})
        
    }
}