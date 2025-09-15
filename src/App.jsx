import { useState } from 'react'
import './App.css'
import UserForm from './forms/UsersForm'
import Login from './forms/Login'
import UserConfirmation from './components/UserConfirmation'
import AdminForm from './forms/AdminForm'

function App() {
  const [signup, setSignup] = useState(1)
  const changePage = ()=>{
    setSignup(prev => prev === 4? 1 : prev+1)
    console.log(signup)
  }

  return (
    <div className='bg-[#FFFDF3] pb-20 font-'>
      <button onClick={changePage}>Switch page</button>
      {/* <UserForm/> */}
      {signup === 1 && <Login/>}
      {signup === 2 && <UserForm/>}
      {signup === 3 && <UserConfirmation/>}
      {signup === 4 && <AdminForm/>}
    </div>
  )
}

export default App
