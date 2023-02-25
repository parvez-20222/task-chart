// import React from "react";
// import { Link,useNavigate } from "react-router-dom";
// export default function Navbar() {
//   const auth=localStorage.getItem('user')
// const navigate=useNavigate()
//   function post(){
//     localStorage.clear()
//     navigate("/login")
//   }

//   return (
//     <>
//       <nav className="navbar navbar-expand-lg  bg-primary ">
//   <div className="container-fluid ">
//     <div className="collapse navbar-collapse" id="navbarSupportedContent">
//       <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//         <li className="nav-item">
//           <Link className="nav-link active text-light" aria-current="page" to="/">Product</Link>
//         </li>
//         <li className="nav-item">
//           <Link className="nav-link px-3 text-light" to="/addProduct">Add-Product</Link>
//         </li>
//         <li className="nav-item">
//           <Link className="nav-link px-3 text-light" to="/update">Update-Product</Link>
//         </li>
//         <li className="nav-item">
//           <Link className="nav-link px-3 text-light" to="/profile">Profile</Link>
//         </li>
//         <li className="nav-item">
//           {auth?<Link onClick={post} className="nav-link px-3 text-light" to="/login">Logout</Link>:<Link className="nav-link px-3 text-light" to="/login">Login-up</Link>}
//         </li>
//      </ul>
//     </div>
//   </div>
// </nav>
//     </>
//   );
// }
