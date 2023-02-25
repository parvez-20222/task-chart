// import React, { useState ,useEffect} from "react";
// import { useNavigate } from "react-router-dom";

// export default function Login() {
//     const [name,setName]=useState("")
//     const [email,setEmail]=useState("")
//     const [password,setPassword]=useState("")
//     const navigate=useNavigate()

   
//   useEffect(()=>{
//     const path=localStorage.getItem('user')
//     if(path){
//       navigate('/')
//     }
//   })

// //   var { User, SetUser } = useState({
// //     username: "",
// //     email: "",
// //     password: "",
// //   });
// //   function getData(e) {
// //     var name = e.target.name;
// //     var value = e.target.value;
// //     SetUser((old) => {
// //       return {
// //         ...old,
// //         [name]: value,
// //       };
// //     });
// //   }
//   const collectData=async(e)=> {
//     e.preventDefault()
//     // console.warn(`
//     //     name:${name}
//     //     name:${email}
//     //     name:${password}
//     //     `);
//     var result=fetch('http://localhost:7000/data',{
//         method:'post',
//         body:JSON.stringify({name,email,password}),
//         headers:{
//             'content-type':'application/json'
//         }
//     })
//     result=await result.json()
//     localStorage.setItem('user',JSON.stringify(result))
//         navigate("/")
//   }

//   return (
//     <>
//       <h2 className="text-primary text-center">LOGIN FORM</h2>
//       <form className="mt-3 mx-3">
//         <div className="mb-3 row">
//           <label htmlFor="inputName" className="col-sm-2 col-form-label  ">
//             Name
//           </label>
//           <div className="col-sm-10">
//             <input
//               type="text"
//               className="form-control"
//               id="inputName "
//               value={name}
//               onChange={(e)=>setName(e.target.value)}
//             />
//           </div>
//         </div>
//         <div className="mb-3 row">
//           <label htmlFor="inputEmail" className="col-sm-2 col-form-label ">
//             Email
//           </label>
//           <div className="col-sm-10">
//             <input
//               type="email"
//               className="form-control"
//               id="inputEmail"
//               value={email}
//               onChange={(e)=>setEmail(e.target.value)}
//             />
//           </div>
//         </div>
//         <div className="mb-3 row">
//           <label htmlFor="inputPassword" className="col-sm-2 col-form-label ">
//             Password
//           </label>
//           <div className="col-sm-10">
//             <input
//               type="password"
//               className="form-control"
//               id="inputPassword"
//               value={password}
//               onChange={(e)=>setPassword(e.target.value)}
//             />
//           </div>
//         </div>
//       </form>
//       <button  type="button" onClick={collectData} className=" text-center text-light bg-success btnStyle"> signUP
//       </button>
//     </>
//   );
//  }

 
 
