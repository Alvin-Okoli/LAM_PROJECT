import React from 'react'
import Button from './Button'

function AdminGenInfo() {
    const generalInfo = [
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
      info: ''
    },
    {
      title: 'Department',
      select: ["Brand Management", "Service Coordination", "Spiritual Maturity", "Sports", "Church Management", "Protocol", "Ushering", "Admin", "Dance", "Stage Act"]
    },
    {
      title: 'Department Leader',
      info: ''
    },
    {
      title: 'Assistant Department Leader',
      info: ''
    },
    {
      title: 'Current Membership Strength',
      info: ''
    }
  ]
  return (
    <div className='px-6'>
        <div>
            {
                generalInfo.map((info, i)=>(
                    <div key={i}>
                        <div className='text-sm font-normal my-1'>{info.title}</div>
                        {info.select&& <select name={info.title}>
                            {info.select.map((option, index)=>(
                                <option value={option} key={index}  className='text-lg text-gray-500 mb-4 p-2 px-4 bg-gray-50 border border-gray-300 rounded-lg'>{option}</option>
                        ))}
                        </select>
                        }
                    </div>
                ))
            }
        </div>
      <Button text='Save'/>
    </div>
  )
}

export default AdminGenInfo