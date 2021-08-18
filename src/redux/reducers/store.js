import {createStore,applyMiddleware,combineReducers} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import  authReducer from './auth.reducer'
import { ChannelVideoReducer } from './channel.reducer'
import { commentListReducer } from './comments.reducer'
import { RelatedVideoReducer, selectedVideoReducer, videoReducer } from './video.reducer'
const rootReducer=combineReducers({
    auth:authReducer,
    video:videoReducer,
    selectedVideo:selectedVideoReducer,
    channelVideo:ChannelVideoReducer,
    commentList:commentListReducer,
    relatedVideo:RelatedVideoReducer,
})
const store =createStore(rootReducer,{},
    composeWithDevTools(applyMiddleware(thunk)))

export default store