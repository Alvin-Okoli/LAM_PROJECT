import { useState } from 'react'
import './App.css'
import UserForm from './forms/UsersForm'
import Login from './forms/Login'
import Header from './Header'
import UserConfirmation from './components/UserConfirmation'

function App() {
  const [signup, setSignup] = useState(1)
  const changePage = ()=>{
    setSignup(prev => prev === 3? 1 : prev+1)
    console.log(signup)
  }

  return (
    <div className='bg-[#FFFDF3] pb-20'>
      <button onClick={changePage}>Switch page</button>
      <Header/>
      {signup === 1 && <Login/>}
      {signup === 2 && <UserForm/>}
      {signup === 3 && <UserConfirmation/>}
    </div>
  )
}

export default App
