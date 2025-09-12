import React, { useState } from 'react'
import AdminReport from '../components/AdminReport'
const menuDisplay = [
    {
        title: '',
        link: ''
    }
]

function AdminForm() {
  const [report, setReport] = useState(false)
  return (
    <div>
      <div className='flex justify-between px-6 my-2'>
        <div className='text-lg font-semibold'>Submissions</div>
        <div className='px-4 pt-0.5 text-sm shadow rounded-2xl bg-[#FFEEBA]'>Admin</div>
      </div>
      <div className='flex justify-between px-6 mt-4 text-lg text-orange-500'>
        <div>{'<'}</div>
        <div 
        className='text-gray-400 font-semibold'
        onClick={()=>setReport(!report)}
        >
          September
        </div>
        <div>{'>'}</div>
      </div>
      {report?
        <div className='text-center py-20 text-lg'>
          <div>Nothing to show yet</div>
          <img src="42430 1.png" alt="note" className='h-48 mx-auto'/>
        </div>
        :
        <>
          <AdminReport/>
          <AdminReport/>
        </>
      }
    </div>
  )
}

export default AdminForm
