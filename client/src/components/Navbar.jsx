import React from "react";
import { Link} from "react-router-dom";

const Navbar = () => {
    return (
      <div className="flex justify-between items-center  ">
        <ul className="flex bg-slate-600 justify-between w-full p-5 text-white">
          <span>
            <Link to={"/"}>
              <li>Home</li>
            </Link>
          </span>
          <span className="flex gap-5">
            <Link to={"/login"}>
              <li>Login</li>
            </Link>
            <Link to={"/register"}>
              <li>Register</li>
            </Link>
          </span>
        </ul>
      </div>
    );
  };
  
  export default Navbar;


  // { isAdmin ? hello admin : you are not admin}
// if(isAdmin){
//   hello admin
// }else{
//   you are not admin
// }

// {token ? (<></>):(<></>)}

// {
//   token ? (
//     <>
//       <li>Welcome</li>
//       <button onClick={handleLogout}>Logout</button>
//     </>
//   ) : (
//     <>
//       <Link to={"/login"}>
//         <li>Login</li>
//       </Link>
//       <Link to={"/register"}>
//         <li>Register</li>
//       </Link>
//     </>
//   );
// }