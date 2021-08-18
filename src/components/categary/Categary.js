import React,{useState} from 'react'
import { useDispatch } from 'react-redux'
import { getpopularVideos, getVideosCategory } from '../../redux/actions/videos.action'
import "./_categary.scss"
const keywords=[
    "All",
    "U1 songs",
    "React",
    "AngularJS",
    "React Native",
    "Songs",
    "movies",
    "itemsongs",
    "shichan",
    "cartoon",
    "new song",
    "alubum",
    "java",
    "sports",
    "newmovies",
    "python",
    "tamil",
    "bike racing"
]
const Categary = () => {
    const[activeElement,setActiveElement]=useState('All')
    console.log(activeElement)
  
    const dispatch=useDispatch()
    const handleclick= value =>{
        setActiveElement(value)
        if(value==='All'){
            dispatch(getpopularVideos())
        }
        else{
            dispatch(getVideosCategory(value))
        }
       
        
    }
    return (
        <div className="category" >
           {
             keywords.map((value,i)=>(
                 <span onClick={()=>handleclick(value)} 
                 className={activeElement === value?'active':''}
                 key={i}>{value}</span>
                 
             )) 
           }
        </div>
    )
}

export default Categary
