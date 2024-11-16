// import React from 'react'

import { useNavigate } from "react-router-dom"
import useAuth from "../../Hooks/useAuth"
import { FcGoogle } from "react-icons/fc"

const SocicalLogin = () => {
    const {GoogleLogin} =useAuth()
    const navigate = useNavigate()
    const handleGoogleLogin = ()=>{
        GoogleLogin().then(()=>{
            navigate('/')
        })
      
    }
  return (
    <div>
          <div className="divider"></div>
          <div className="">
            <button  onClick={handleGoogleLogin} className="btn w-full flex gap-2 btn-primary btn-outline">
          <FcGoogle size={24}></FcGoogle>
          <p>Login with Google </p>
            </button>
          </div>
    </div>
  )
}

export default SocicalLogin
