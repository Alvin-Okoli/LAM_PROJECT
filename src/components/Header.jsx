import React, { useState } from 'react'

export function LoginHeader() {
  return (
    <div className='py-10 px-4'>
      <img src="LAM LOGO.png" alt="LAM LOGO" className=''/>
    </div>
  )
}


export function AdminHeader({option=['Submissions', 'General Info']}) {
  const [view, setView] = useState(false)
  return (
    <div className='relative h- bg-white'>
      <div className='py-10 px-2 bg-white w-full flex justify-between items-center '>
        <img src="Frame 139.png" alt="LAM LOGO" className='w-76 h-14'/>
        <img src={view? 'cancel-blacksvgrepo-com.svg': 'burger-menu-svgrepo-com.svg'} alt="menu"  className='h-10' onClick={()=>setView(!view)}/>
      </div>
      {view && <div className='px-4 bg-white h-svh w-full absolute'>
        <div>
          {option.map((options, index)=>(
              <div key={index} className='my-4 p-4 bg-[#FAFAFA] text-xl rounded-xl border border-[#FAFAFA]'>{options}</div>
            ))
          }
          <img src="Frame 71655.png" alt="log out" className='fixed bottom-10 right-1/3 w-28'/>
        </div>
      </div>}
    </div>
  )
}

export function UserHeader() {
  return (
    <div className='py-8 px-2 bg-white w-full flex justify-between items-center '>
      <img src="Frame 139.png" alt="LAM LOGO" className='w-76 h-14'/>
      <img src='mdi_user-key-outline.png' alt="user"  className='h-10'/>
    </div>
  )
}