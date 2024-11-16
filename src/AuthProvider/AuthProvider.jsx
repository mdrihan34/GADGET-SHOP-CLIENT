import { createContext, useEffect, useState } from "react"
import { app } from "../Firebase/firebase.config"
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth"
import { GoogleAuthProvider } from "firebase/auth/web-extension"
import axios from "axios"

export const AuthContext = createContext(null)
const auth = getAuth(app)
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const googleProvider = new GoogleAuthProvider()
    const createUser = (email,password)=> {
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const Login = (email, password) => {
       return signInWithEmailAndPassword (auth,email,password)
    }
 const Logout =()=>{
   return signOut(auth)
 }
 const GoogleLogin = ()=>{
    return signInWithPopup(auth, googleProvider)
 }
 useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
     if(currentUser){
      axios.post(`http://localhost:5000/authentication`,{email: currentUser.email,})
      .then(data=>{
        if(data.data){
          localStorage.setItem('access-token',data?.data?.token)
          setLoading(false)
        }
      })
     }
     else{
      localStorage.removeItem('access-token')
      setLoading(false)
     }
    });
  
    
    return () => {
      unsubscribe(); 
    };
  }, []); 
  
 const authInfo = {
    user,
    loading,
    createUser, 
    Login ,
     Logout, 
     GoogleLogin }
  return  <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  
}

export default AuthProvider
