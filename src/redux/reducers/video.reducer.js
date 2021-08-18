import { HOME_VIDEOS_FAIL, HOME_VIDEOS_REQUEST, HOME_VIDEOS_SUCESS, RELATED_VIDEO_FAIL, RELATED_VIDEO_REQUEST, RELATED_VIDEO_SUCESS, SELECTED_VIDEOS_FAIL, SELECTED_VIDEOS_REQUEST, SELECTED_VIDEOS_SUCESS } from "./actionTypes";

export const videoReducer=(state={
    videos:[],
    loading:false,
    nextPageToken:null,
    activeCategory:'All'
},action)=>{

    const {type,payload}=action;

    switch(type){
        case HOME_VIDEOS_SUCESS :return{
            ...state,
            videos:state.activeCategory === payload.category?[...state.videos,...payload.videos]:payload.videos
            ,
            loading:false,
            nextPageToken:payload.nextPageToken,
            activeCategory:payload.category,

        }
        case HOME_VIDEOS_FAIL :return{
            ...state,
            loading:false,
            error:payload,

        }
        case HOME_VIDEOS_REQUEST :return{
            ...state,
            loading:true,

        }

        default: return state
    }


}

export const selectedVideoReducer=(
    state={
    loading:true,
    video:null,
},action)=>{
    const{payload,type}=action;

    switch(type){
        case SELECTED_VIDEOS_REQUEST: return{
            ...state,
            loading:true,
        }
        case SELECTED_VIDEOS_SUCESS : return{
            ...state,
            video:payload,
            loading:false,
        }
        case SELECTED_VIDEOS_FAIL : return{
            ...state,
            video:null,
            loading:false,
            error:payload,
        }
        default : return state
    }

}

export const RelatedVideoReducer=(
    state={
    loading:true,
    videos:[],
},action)=>{
    const{payload,type}=action;

    switch(type){
        case RELATED_VIDEO_REQUEST: return{
            ...state,
            loading:true,
        }
        case RELATED_VIDEO_SUCESS : return{
            ...state,
            SELECTED_VIDEOS_FAIL:payload,
            loading:false,
        }
        case RELATED_VIDEO_FAIL : return{
            ...state,
            videos:null,
            loading:false,
            error:payload,
        }
        default : return state
    }

}