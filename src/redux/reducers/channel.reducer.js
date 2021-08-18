import { CHANNEL_DETAILS_FAIL, CHANNEL_DETAILS_REQUEST, CHANNEL_DETAILS_SUCESS, SET_SUBSCRIPTION_STATUS } from "./actionTypes";

export const ChannelVideoReducer=(
    state={
    loading:true,
    channel:{},
    subscribtionstatus:false,
    

},action)=>{
    const{payload,type}=action;

    switch(type){
        case CHANNEL_DETAILS_REQUEST: return{
            ...state,
            loading:true,
        }
        case CHANNEL_DETAILS_SUCESS : return{
            ...state,
            channel:payload,
            loading:false,
        }
        case CHANNEL_DETAILS_FAIL : return{
            ...state,
            channel:null,
            loading:false,
            error:payload,
        }
        case SET_SUBSCRIPTION_STATUS: return{
            ...state,
            subscribtionstatus:payload,
        }
        default : return state
    }

}