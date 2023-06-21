import React from 'react'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Footer from './Component/Footer'
import Navbar from './Component/Navbar'
import Login from './Component/SighUp'
import PrivateComp from './Component/PrivateComp'
import "./index.css"
import SighUp from './Component/Login'

export default function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar/>
        <Routes>
        <Route element={<PrivateComp/>}>
          <Route path='/' element={"<Home/>"}/>
          <Route path='/addProduct' element={"<Add-Product/>"}/>
          <Route path='/update' element={"<Update-Product/>"}/>
          <Route path='/logout' element={"<Logout/>"}/>
          <Route path='/profile' element={"<Profile/>"}/></Route>
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<SighUp/>}/>

        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  )
}
