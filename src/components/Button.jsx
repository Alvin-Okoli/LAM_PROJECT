import React from 'react'

function Button({text='login'}) {
  return (
    <button className='text-white text-2xl font-semibold rounded-2xl bg-orange-500 block border w-full p-3 shadow'>{text}</button>
  )
}

export default Button
