import React from 'react'
import {useDispatch} from 'react-redux'
import  authService from '../../appwrite/auth'
import {logout} from '../../store/authSlice'

function LogoutBtn() {
    const dispatch = useDispatch()
    const LogoutHandler =()=>{
        authService.logout().then(()=>{
            dispatch(logout())
        })
    }
  return (
   <button  onClick={LogoutHandler} className=' inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'>
    Logout
   </button>
  )
}

export default LogoutBtn
