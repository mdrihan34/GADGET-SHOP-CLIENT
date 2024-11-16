import { Link, NavLink } from "react-router-dom"
import useAuth from "../Hooks/useAuth"
import UserDropDown from "./UserDropDown"

const Navber = () => {
  const {user} = useAuth()
   const links = <>
  <li> <NavLink style={({isActive })=>({
     backgroundColor: isActive ? 'transparent' : '',
     color: isActive ? 'blue' : 'black',
     textDecoration: 'none',
     padding: '10px',
  })
  } className='uppercase font-semibold' to='/'>Home</NavLink>
  </li>
  <li> <NavLink style={({isActive })=>({
     backgroundColor: isActive ? 'transparent' : '',
     color: isActive ? 'blue' : 'black',
     textDecoration: 'none',
     padding: '10px',
  })
  } className='uppercase font-semibold' to='/products'>Products</NavLink>
  </li>
  <li> <NavLink style={({isActive })=>({
     backgroundColor: isActive ? 'transparent' : '',
     color: isActive ? 'blue' : 'black',
     textDecoration: 'none',
     padding: '10px',
  })
  } className='uppercase font-semibold' to='/about'>About</NavLink>
  </li>
  <li> <NavLink style={({isActive })=>({
     backgroundColor: isActive ? 'transparent' : '',
     color: isActive ? 'blue' : 'black',
     textDecoration: 'none',
     padding: '10px',
  })
  } className='uppercase font-semibold' to='/contact-us'>Contact us</NavLink>
  </li>
  

    </>
  return (
    <div>
        <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
         {links}
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">Gadget Shop</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
             {links}

    </ul>
  </div>
 {
  user? <div className="navbar-end">
    <UserDropDown></UserDropDown>
  </div> :  <div className="navbar-end">
  <div className="flex gap-2 items-center">
    
<Link to='/login'><button className="btn btn-outline btn-secondary">Login</button></Link>
 <Link to='/register'> <button className="btn btn-outline btn-accent ">Register</button></Link>
  </div>
</div>
 }
</div>
      
    </div>
  )
}

export default Navber
