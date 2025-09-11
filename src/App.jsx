import { useState } from 'react'
import './App.css'
import UserForm from './forms/UsersForm'
import Login from './forms/Login'
import Header from './Header'

function App() {
  const [signup, setSignup] = useState(true)

  return (
    <div className='bg-[#FFFDF3] h-screen'>
      <button onClick={()=>setSignup(!signup)}>Switch page</button>
      <Header/>
      {signup?
        <Login/>
        :
        <UserForm/>
      }
    </div>
  )
}

export default App
