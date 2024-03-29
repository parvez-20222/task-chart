import React, { useState ,useEffect} from "react";
  import { useNavigate } from "react-router-dom";

export default function Login() {
    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const [CPassword,setCPassword]=useState("")
    const navigate=useNavigate()

   
  useEffect(()=>{
    const path=localStorage.getItem('user')
    if(path){
      navigate('/')
    }
  })
  const collectData=async(e)=> {
    e.preventDefault()
    console.warn(`
        Name:${name}
        Email:${email}
        password:${password}
        Conform password:${CPassword}
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
    <h2 className="text-primary text-center">SIGNUP FORM</h2>
    <form className="mt-3 mx-3" onClick={collectData} >
      <div className="mb-3 row">
        <label htmlFor="inputName" className="col-sm-2 col-form-label  ">
          Name
        </label>
        <div className="col-sm-10">
          <input 
            type="text"
            name="name"
           
            className="form-control"
            id="inputName "
            value={name}
            onChange={(e)=>setName(e.target.value)}
            required
          />
        </div>
      </div>
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
        <div className="mb-3 row">
        <label htmlFor="inputPassword" className="col-sm-2 col-form-label ">
          Conform Password
        </label>
        <div className="col-sm-10">
          <input 
            type="password"
            name="CPassword"
            className="form-control  "
            id="inputPassword"
            value={CPassword}
            onChange={(e)=>setCPassword(e.target.value)}
            required
          />
        </div>
      </div>
      <button  type="button" className=" text-center text-light bg-success btnStyle"> SIGNUP
    </button>
    </form>
   
  </>
  )
}
