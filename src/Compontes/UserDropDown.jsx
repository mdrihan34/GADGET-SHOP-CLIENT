import { Link, NavLink } from "react-router-dom"
import useAuth from "../Hooks/useAuth"

const UserDropDown = () => {
    const {user,Logout} = useAuth()
    const handleLogOut = ()=>{
        Logout()
    }
  return (
    <div>
      <div className="dropdown dropdown-bottom dropdown-end">
  <div tabIndex={0} role="button" className="btn m-1"><div className="avatar">
  <div className=" w-10 rounded-full ring ring-offset-2">
    <img src={`${user?.photoURL || '/user.jpg' }`} />
  </div>
</div></div>
  <ul tabIndex={0} className="dropdown-content w-52 menu bg-base-100 rounded-box z-[1] space-y-2  p-4 shadow">
    <li><NavLink to='/'>Dashbord</NavLink></li>
    <li>
        <button onClick={handleLogOut} className="btn btn-primary btn-outline btn-sm">LogOut</button>
    </li>

  </ul>
</div>
    </div>
  )
}

export default UserDropDown
