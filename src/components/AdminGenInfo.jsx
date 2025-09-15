import React, { useState } from 'react'
import Button from './Button'

function AdminGenInfo() {
  const [genInfo, setGenInfo] = useState({})
    const generalInfo = [
    {
      title: 'Timeframe for report submission',
      select: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    },
    {
      title: 'Specific LAM Church',
      select: ["Brand Management", "Service Coordination", "Spiritual Maturity", "Sports", "Church Management", "Protocol", "Ushering", "Admin", "Dance", "Stage Act"]
    },
    {
      title: 'Directorate',
      select: ["Brand Management", "Service Coordination", "Spiritual Maturity", "Sports", "Church Management", "Protocol", "Ushering", "Admin", "Dance", "Stage Act"]
    },
    {
      title: 'Director',
      input: true
    },
    {
      title: 'Department',
      select: ["Brand Management", "Service Coordination", "Spiritual Maturity", "Sports", "Church Management", "Protocol", "Ushering", "Admin", "Dance", "Stage Act"]
    },
    {
      title: 'Department Leader',
      input: true
    },
    {
      title: 'Assistant Department Leader',
      input: true
    },
    {
      title: 'Current Membership Strength',
      input: true
    }
  ]
  return (
    <div className='px-6'>
      <div className='px-5 py-2 w-28 text-sm text-center mx-auto my-4 shadow rounded-2xl bg-[#FFEEBA]'>Admin</div>
      <div className=' border-t-2 border-t-gray-300 pt-8 mb-10 font-bold'>GENERAL INFO</div>
      <div>
        {generalInfo.map((info, i)=>(
          <div key={i}>
              <div className='text-sm text-gray-600 font-semibold my-1'>{info.title}</div>
              {info.select&& <select name={info.title} className='w-full bg-white rounded-lg text-lg mb-4 p-2 px-3 border border-gray-400'>
                  {info.select.map((option, index)=>(
                      <option value={option} key={index} className='w-5/6'>{option}</option>
              ))}
              </select>
              }
              {info.input&& <input type="text" className='w-full bg-white rounded-lg text-lg mb-4 p-3 -3 border border-gray-300'/>}
          </div>
            ))
        }
      </div>
      <Button text='Save'/>
    </div>
  )
}

export default AdminGenInfo