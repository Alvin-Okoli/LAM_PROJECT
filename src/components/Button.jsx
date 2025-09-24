import React from 'react'

function Button({text='login'}) {
  return (
    <button className='text-white text-2xl font-semibold rounded-2xl bg-[linear-gradient(243.06deg,#F12130_-39.09%,#FB8F0E_114.34%,#FFE42B_248.8%)] block border w-full p-3 shadow'>{text}</button>
  )
}

export default Button
