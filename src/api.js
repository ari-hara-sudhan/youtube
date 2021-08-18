import axios from "axios"



const request =axios.create({
    baseURL:"https://youtube.googleapis.com/youtube/v3/",
    params:{
        key:"AIzaSyAOyC9Fv7eBsvBjlA577vyL3dj2EVECQPo"
    },
})

export default request