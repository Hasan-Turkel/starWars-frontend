import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import useAuthCalls from "../hooks/useAuthCalls";

const Navbar = () => {

  const {user} = useSelector((state)=>state.auth)
  const { logout } = useAuthCalls()

  return (
    <nav className="navbar navbar-expand-lg bg-black p-2 sticky-top ">
    <div className="container-fluid w-100 align-items-center  ">
      <NavLink className="navbar-brand text-white fs-2 " to="/">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/1024px-Star_Wars_Logo.svg.png" alt="starwars" width={150}/>
      </NavLink>
      <button
        className="navbar-toggler bg-white"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>     
      <div className="collapse navbar-collapse " id="navbarNavAltMarkup">
        <div className="navbar-nav d-flex justify-content-end gap-4 w-100">
            
            <NavLink className="nav-link text-white fs-4" aria-current="page" to="/planets">
            PLANETS 
          </NavLink> 
          <NavLink className="nav-link text-white fs-4" to="/characters">
            CHARACTERS
          </NavLink>

          {user&&<NavLink className="nav-link text-white fs-4" to="/favorites">
           FAVORITES
          </NavLink> }
               
          {!user? <NavLink className="nav-link text-white fs-4 " to="/login">
            LOGİN
          </NavLink> :<p className="nav-link text-white fs-4 " role="button" onClick={()=>logout()}>
            LOGOUT
          </p>}   
         
          
        </div>
      </div>
    </div>
  </nav>
  
  )
}

export default Navbar