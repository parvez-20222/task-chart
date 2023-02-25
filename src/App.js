// import React from 'react'
// import {BrowserRouter,Route,Routes} from 'react-router-dom'
// import Footer from './Component/Footer'
// import Navbar from './Component/Navbar'
// import Login from './Component/Login'
// import PrivateComp from './Component/PrivateComp'
// import "./index.css"

// export default function App() {
//   return (
//     <>
//       <BrowserRouter>
//       <Navbar/>
//         <Routes>
//         <Route element={<PrivateComp/>}>
//           <Route path='/' element={"<Home/>"}/>
//           <Route path='/addProduct' element={"<Add-Product/>"}/>
//           <Route path='/update' element={"<Update-Product/>"}/>
//           <Route path='/logout' element={"<Logout/>"}/>
//           <Route path='/profile' element={"<Profile/>"}/></Route>
//           <Route path='/login' element={<Login/>}/>

//         </Routes>
//         <Footer/>
//       </BrowserRouter>
//     </>
//   )
// }

import React, { useState } from 'react'
import Bar1 from './Bar1'
import './index.css'



function App(){
  const [val, setVal] = useState('')
  // const data = ["Stock1","Stock2","Stock3","Stock4"]

const [show,setShow] = useState(false)



  return (
    <>
      <div className='container'>
       <div className="show">
       <img src="OIP.jpg" height={100} width={100} className='img m-2' alt="Not found" />
       <div className="d-flex">
  <div className='main'>
  <div className="dropdown">
  <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Dropdown button
  </button>
  <ul class="dropdown-menu">
  <button onClick={()=>{setShow(!show)}} className="mx-2 mb-2  bb"> <li className="dropdown-item bb">  Stock1</li></button>
  <button onClick={()=>{setShow(!show)}} className="mx-2 mb-2 bb"> <li className="dropdown-item bb">  Stock2</li></button>
  <button onClick={()=>{setShow(!show)}} className="mx-2 mb-2 bb"> <li className="dropdown-item bb">  Stock3</li></button>
  <button onClick={()=>{setShow(!show)}} className="mx-2 mb-2 bb"> <li className="dropdown-item bb">  Stock4</li></button>
  </ul>
</div>
        <input list='data' onChange={(e) => setVal(e.target.value)} placeholder='Search Here'className='p-1 mb-2 mx-2' />
          {/* <datalist id='data'>
            <button onClick={()=>{setShow(!show)}}><option>Stock1</option></button>
            <button onClick={()=>{setShow(!show)}}><option>Stock2</option></button>
            <button onClick={()=>{setShow(!show)}}><option>Stock3</option></button>
            <button onClick={()=>{setShow(!show)}}><option>Stock4</option></button>
            <button onClick={()=>{setShow(!show)}}><option>Stock5</option></button>
          </datalist> */}
          
        </div>
          <button onClick={()=>{setShow(!show)}} className="mx-2 mb-2 button">Submit</button>
      </div>
      <h1 id='val' className='mb-2 text-light'>Welcome {val}</h1>

       </div>
       {show && <Bar1/>}
       </div>
      
          

    

    </>
  )
}


export default App;