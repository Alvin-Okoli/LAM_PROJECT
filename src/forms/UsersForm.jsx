import React, {useState} from 'react'
import { jsx } from 'react/jsx-runtime'
import UserReport from './UserReport'

function UserForm() {
  const[team, setteam]= useState(true)
  const[month, setMonth]= useState('')

   const getDatePerWeek = () => {
    const day = new Date().toLocaleString('default', { weekday : 'short' });
    const date = new Date().toLocaleString('default', { day : '2-digit' });
    const month = new Date().toLocaleString('default', { month : 'short' });
    const currentDate = `${day}, ${date} ${month}`;

    const endOfWeek = new Date()
    endOfWeek.setDate(new Date().getDate() + 6);
    const endDay = endOfWeek.toLocaleString('default', { weekday : 'short' });
    const endDates = endOfWeek.toLocaleString('default', { day : '2-digit' });
    const endMonth = endOfWeek.toLocaleString('default', { month : 'short' });
    const endDate = `${endDay}, ${endDates} ${endMonth}`;

    return `${currentDate} - ${endDate}`;
  }

  const generalInfo = [
    {
      title: 'Year',
      info: new Date().toLocaleString('default', { year: 'numeric' })
    },
    {
      title: 'Month',
      info: new Date().toLocaleString('default', { month: 'long' })
    },
    {
      title: 'Week',
      info: `Week (${getDatePerWeek()})`
    },
    {
      title: 'Specific LAM Church',
      info: ''
    },
    {
      title: 'Directorate',
      info: ''
    },
    {
      title: 'Director',
      info: ''
    },
    {
      title: 'Department',
      info: ''
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

  const HandleSubmit = (e)=>{
    e.preventDefault()
  }
  return (
    <div className='mb-80 px-6 bg-inherit w-full'>
      <div>
        <div className='mt-4 mb-8 text-xl font-semibold'>GENERAL INFO</div>
        {
          generalInfo.map((info, i)=>(
              <div key={i}>
                <div className='font-normal my-1'>{info.title}</div>
                <div className='text-lg text-gray-500 mb-4 p-2 px-4 bg-gray-50 border border-gray-300 rounded-lg'>{info.info? info.info: 'Halo'}</div>

                {i === 6 &&
                  <div>
                    <div className='font-normal my-1'>Team</div>
                    <div  className='grid grid-cols-2 gap-4'>
                      <div 
                      className={`text-lg text-black mb-4 p-2 px-4 bg-gray-50 border ${team? 'border-orange-500' : 'border-gray-300'} rounded-lg flex justify-between hover:cursor-pointer`}
                      onClick={()=>setteam(true)}
                      >
                        <div>1</div>
                        {team&&<img src="Property 1=checked.png" alt="selected" className='h-4 mt-2'/>}
                      </div>

                      <div 
                      className={`text-lg text-black mb-4 p-2 px-4 bg-gray-50 border ${!team? 'border-orange-500' : 'border-gray-300'} rounded-lg flex justify-between hover:cursor-pointer`}
                      onClick={()=>setteam(false)}
                      >
                        <div>2</div>
                        {!team&&<img src="Property 1=checked.png" alt="selected" className='h-4 mt-2'/>}
                      </div>
                    </div>
                  </div>
                }
              </div>
          ))
        }
      </div>
      <form onSubmit={HandleSubmit}>
        <UserReport/>
      </form>
    </div>
  )
}

export default UserForm
