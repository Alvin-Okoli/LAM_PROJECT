import React from 'react'

function AdminReport() {
  return (
    <div className='p-6'>
      <div>Week 2 (Mon 8 Sep - Sun 14 Sep)</div>
      <div className='p-6 my-4 grid gap-6 border border-[#F6A0A0] rounded-2xl bg-[#F8F6EB]'>
        <div>LAM Department Assessment Report :: Sept Week 2 Summary</div>
        <div className='flex gap-3 '>
            <button className=' border rounded-2xl p-1 border-[#0AABBF] w-full'>View</button>
            <button className=' border rounded-2xl p-1 border-[#F12130] w-full'>Download</button>
        </div>
      </div>
    </div>
  )
}

export default AdminReport
