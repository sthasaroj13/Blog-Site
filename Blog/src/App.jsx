
import { useState,useEffect } from 'react'
import {useDispatch} from 'react-redux'
import authService from "./appwrite/auth"
import {login,logout} from "./store/authSlice"
import Header from './components/header/Header'
import Footer from './components/Footer/Footer'




import './App.css'

function App() {
// console.log(import.meta.env.VITE_APPWRITE_URL);
const[loading,setLoading] = useState(true)
const  dispatch = useDispatch()
useEffect(()=>{
  authService.getCurrentUser()
  .then((userData)=>{
    if (userData) {
      dispatch(login(userData))
    }
    else{
      dispatch(logout())
    }
  })
  .finally(()=>setLoading(false))

},[])

  return !loading? (
    <>
     <div className=' min-h-screen flex flex-wrap content-between bg-gray-400'>

      <div className=' w-full  block'>
        <Header/>
        <main>
          TODO  {/* <OutLet/> */}
        </main>
        <Footer/>

      </div>
     </div>
    </>
  ):null
}

export default App
