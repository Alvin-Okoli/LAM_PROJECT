import { useState } from 'react'
import './App.css'
import UserForm from './forms/UsersForm'
import Login from './forms/Login'
import UserConfirmation from './components/UserConfirmation'
import AdminForm from './forms/AdminForm'

import {createBrowserRouter, createRoutesFromElements, RouterProvider, Route} from 'react-router-dom'

function App() {
  const [signup, setSignup] = useState(1)
  const changePage = ()=>{
    setSignup(prev => prev === 4? 1 : prev+1)
    console.log(signup)
  }

  const router =  createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path='/' element={<Login/>}/>
        <Route path='leader' element={<UserForm/>}/>
        <Route path='approved' element={<UserConfirmation/>}/>
        <Route path='admin' element={<AdminForm/>}/>
      </>
    )
  )

  return (
    <div className='bg-[#FFFDF3] '>
    <RouterProvider router={router}/>
    </div>
  )
}

export default App
