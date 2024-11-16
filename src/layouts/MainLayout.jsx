import { Outlet } from "react-router-dom"
import Footer from "../Compontes/Footer"
import Navber from "../Compontes/Navber"

const MainLayout = () => {
  return (
    <div className="">
      <Navber></Navber>
      <div className="min-h-screen">
      <Outlet></Outlet>

      </div>
      <Footer></Footer> 
    </div>
  )
}

export default MainLayout
