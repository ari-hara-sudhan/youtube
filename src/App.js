import React ,{useEffect, useState} from 'react'
import {Container} from "react-bootstrap"
import Header from './components/header/Header'
import HomeScreen from './components/screen/HomeScreen'
import Login from './components/screen/login/Login'
import Sidebar from './components/sidebar/Sidebar'
import "./_app.scss"
import { Route,Switch, useHistory} from "react-router-dom"
import { useSelector } from 'react-redux'
import WatchScreen from './components/screen/watchscreen/WatchScreen'
const Layout=({children})=>{
  const [sidebar,toggleSidebar]=useState(false)
  const handleToggle=()=>toggleSidebar(value=>!value)
  return(
    <div className="app">
  <Header handleToggle={handleToggle}/>
      <div className="app__container">
        <Sidebar sidebar={sidebar}  handleToggle={handleToggle}/>
       
        <Container fluid className="app__main">
        {children}
        </Container>
      </div>
      </div>
  )

}

const App = () => { 
  const {accessToken,loading}=useSelector(state=>state.auth)
  const history =useHistory()

  useEffect(()=>{
    if(!loading && !accessToken) {
      history.push('/auth')

    }

  },[accessToken,loading,history])
  return (
    <Switch>
   <Route  path="/" exact>
      <Layout>
        <HomeScreen/>
      </Layout>
    </Route>
    <Route path="/auth">
      <Login />
    </Route>
    <Route path="/search">
      <Layout>
        <h3>search page</h3>
      </Layout>
    </Route>
     <Route path="/watch/:id">
      <Layout>
        <WatchScreen/>
      </Layout>
     </Route>
 
  
   </Switch>

  )
   
  
  
}

export default App
