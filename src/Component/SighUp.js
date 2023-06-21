// import React,{useState} from 'react'

// export default function SighUp() {
//   const [state,setState]=useState(0)
//   function Increment(){
// setState(state+1)
//   }
//   function Decrement(){
//     setState(state-1)
//   }
//   function Reset(){
//     setState(0)
//   }
//   return (
//     <>
//    <div className='first'>
//    <div className='second'>
//    <div className='text-center mt-5  border border-dark'>
//    <h1 className='text-success bg-dark'>State Manage</h1>
//     <h2>{state}</h2>
// <button className='btn1' onClick={Increment}><span className="material-symbols-outlined  icon ">
// thumb_up
// </span></button>
// <button className='btn2' onClick={Decrement}><span className="material-symbols-outlined icon">
// thumb_down
// </span></button>
// <button className='btn3' onClick={Reset}><span className="material-symbols-outlined icon">
// frame_reload
// </span></button>
//    </div>
//    </div>
//    </div>
//     </>
//   )
// }
import React, { useState } from "react";
  // import { useNavigate } from "react-router-dom";

export default function Login() {
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    // const navigate=useNavigate()

   
  // useEffect(()=>{
  //   const path=localStorage.getItem('user')
  //   if(path){
  //     navigate('/')
  //   }
  // })
  const collectData=async(e)=> {
    e.preventDefault()
    console.warn(`
        Email:${email}
        password:${password}
        `);
  //   var result=await fetch('http://localhost:8000/login',{
  //       method:'post',
  //       body:JSON.stringify({name,email,password}),
  //       headers:{
  //           'content-type':'application/json'
  //       },
  //   })
  //   result=await result.json()
  //   console.log(result);
  //   localStorage.setItem('user',JSON.stringify(result))
  //       navigate("/")
  }

  return (
    <>
    <h2 className="text-primary text-center">LOGIN FORM</h2>
    <form className="mt-3 mx-3" onClick={collectData} >
      <div className="mb-3 row">
        <label htmlFor="inputEmail" className="col-sm-2 col-form-label ">
          Email
        </label>
        <div className="col-sm-10">
          <input 
            type="email"
            name="email"
            
            className="form-control"
            id="inputEmail"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            required
          />
        </div>
      </div>
      <div className="mb-3 row">
        <label htmlFor="inputPassword" className="col-sm-2 col-form-label ">
          Password
        </label>
        <div className="col-sm-10">
          <input 
            type="password"
            name="password"
            className="form-control  "
            id="inputPassword"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            required
          />
        </div>
        </div>
      <button  type="button" className=" text-center text-light bg-success btnStyle"> Login
    </button>
    </form>
   
  </>
  )
}
