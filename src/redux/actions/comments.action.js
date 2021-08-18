import request from "../../api"
import { CHANNEL_DETAILS_FAIL, CHANNEL_DETAILS_REQUEST, CHANNEL_DETAILS_SUCESS } from "../reducers/actionTypes"

export const getCommentsById=(id)=>async dispatch=>{
    try {
        dispatch({
            type:CHANNEL_DETAILS_REQUEST,
        })
        const {data}=  await request.get("/commentThreads",{
            params:{
                part:"snippet",
                VideoId:id
              

            }
        })

        dispatch({
            type:CHANNEL_DETAILS_SUCESS,
            payload:data.items,
        })
    } catch (error) {
        
        console.log(error)
        dispatch({
            type:CHANNEL_DETAILS_FAIL,
            message:error.message,
        })
    }
}