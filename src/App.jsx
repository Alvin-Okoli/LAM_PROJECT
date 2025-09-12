import { useState } from 'react'
import './App.css'
import UserForm from './forms/UsersForm'
import Login from './forms/Login'
import Header from './Header'
import UserConfirmation from './components/UserConfirmation'
import AdminForm from './forms/AdminForm'
import AdminGenInfo from './components/AdminGenInfo'

function App() {
  const [signup, setSignup] = useState(1)
  const changePage = ()=>{
    setSignup(prev => prev === 4? 1 : prev+1)
    console.log(signup)
  }

  return (
    <div className='bg-[#FFFDF3] pb-20'>
      <button onClick={changePage}>Switch page</button>
      <Header/>
      {/* <AdminForm/> */}
      {signup === 1 && <Login/>}
      {signup === 2 && <UserForm/>}
      {signup === 3 && <UserConfirmation/>}
      {signup === 4 && <AdminForm/>}
      {/* {signup === 5 && <AdminGenInfo/>}       */}
    </div>
  )
}

export default App
