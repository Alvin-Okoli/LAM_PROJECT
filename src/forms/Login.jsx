import React, { useState } from 'react'
import Button from '../components/Button'

function Login() {
    const [stayLogged, setStayLogged] = useState(false)
    const [firstname, setFirstname] = useState(false)
    const [lastName, setLastName] = useState(false)

  const HandleSubmit = (e)=>{
    e.preventDefault()
  }
  return (
    <div className='px-6'>
      <h3 className='text-2xl font-semibold py-6'>Login</h3>

      <form onSubmit={HandleSubmit} className='text-xl'>
        <div className='my-4'>
          <h5 className='my-2'>First Name</h5>
          <input 
          type="text" 
          placeholder='Enter your first name' 
          className='bg-white mb-1 w-full p-2.5 px-4 border border-gray-400 rounded-lg'
          value={firstname}
          onChange={(e)=>setFirstname(e.target.value)}
          />
          <div className='text-red-600 text-lg'>Please enter your first name</div>
        </div>

        <div className='my-4'>
          <h5 className='my-2'>Last Name</h5>
          <input 
          type="text" 
          placeholder='Enter your last name' 
          className='bg-white  w-full p-2.5 px-4 border border-gray-400 rounded-lg'
          value={firstname}
          onChange={(e)=>setLastName(e.target.value)}
          />
          <div  className='text-red-600 text-lg'>Please enter your last name</div>
        </div>

        <div className='my-4'>
          <h5 className='my-2'>Department</h5>
          <select id="" className='bg-white w-full p-2.5 px-4 border border-gray-400 rounded-lg'>
                {/* <option value="Workers Training">Workers Training</option> */}
                <option value="Brand Management">Brand Management</option>
                <option value="Service Coordination">Service Coordination</option>
                <option value="Spiritual Maturity">Spiritual Maturity</option>
                <option value="Sports">Sports</option>
                <option value="Church Management">Church Management</option>
                <option value="Protocol">Protocol</option>
                <option value="Ushering">Ushering</option>
                <option value="Admin">Admin</option>
                <option value="Dance">Dance</option>
                <option value="Stage Act">Stage Act</option>
            </select>
        </div>

        <div className=' mt-6 mb-14' onClick={()=>setStayLogged(!stayLogged)}>
            <img src={stayLogged? 'Property 1=checked.png': 'Property 1=unchecked.png'} alt="check button" className='h-5 inline mr-2'/>
            <span className=''>Stay logged in.</span>
        </div>

        <Button/>

      </form>
    </div>
  )
}

export default Login
