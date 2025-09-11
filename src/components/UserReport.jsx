 import React, { useState } from 'react'
 
 function UserReport() {
    const [reportOption, setReportOption] = useState('')

    const reports = [
        {
            title: 'Active Departmental Leaders',
            questions: [
                {title: 'Was Departmental Leader Active This Week',
                options: [
                    {
                        answer: 'Yes',
                    },
                    {
                        answer: 'No',
                    },
                    {
                        answer: 'Travelled',
                    },
                ]},
                {title: 'Was Asst.Departmental Leader Active This Week',
                options: [
                    {
                        answer: 'Yes',
                    },
                    {
                        answer: 'No',
                    },
                    {
                        answer: 'Travelled',
                    },
                ]},
                {
                    title: 'Number of Actives Department Officers This Week',
                    input: true
                }
        ]
        },
        {
            title: 'Wednesday Service Report',
            questions: [
                {
                    title: 'Total Number of Members Present in Service',
                    input: true
                },
                {
                    title: 'Total Numbers of Members That Actively Served In Service (If on duty)',
                    input: true
                }
            ]
        },
         {
            title: 'Sunday Service Report',
            questions: [
                {
                    title: 'Total Number of Members Present in Service',
                    input: true
                },
                {
                    title: 'Total Numbers of Members That Actively Served In Service (If on duty)',
                    input: true
                }
            ]
        },
         {
            title: 'Members Weekly Follow-up',
            questions: [
                {
                    title: 'Total Numbers of Members Not In Services & Meetings This Week',
                    input: true
                },
                {
                    title: 'Total Numbers of Members Officially Called or Visited This Week',
                    input: true
                }
            ]
        },
         {
            title: 'Departmental Funds',
            questions: [
                {
                    title: 'Total Departmental Funds Raised',
                    input: true
                },
                {
                    title: 'Total Dues Collected This Week',
                    input: true
                },
                {
                    title: 'Total Amount Raised By The Department This Week',
                    input: true
                },
                {
                    title: 'Names of Givers & Amount Given',
                    text: true
                },
            ]
        },
        {
            title: 'Departmental Budget & Projects',
            questions: [
                {
                    title: 'Total Minor Expenditures This Week',
                    input: true
                },
                {
                    title: 'Total Major Projects Funding This Week',
                    input: true
                },
                {
                    title: 'Details of Expenses and Exact Amount Spent',
                    text: true
                },
            ]
        },
        {
            title: 'Excellent Departmental Uniforms',
            questions: [
                {
                    title: 'Did Your Team Wear Uniform This Week?',
                    options: [{
                        answer: 'Yes',
                    },
                    {
                        answer: 'No',
                    }]
                },
                {
                    title: 'If Yes, Specify The Uniform',
                    input: true
                },
                {
                    title: 'Is the Uniform a New One?',
                    options: [{
                        answer: 'Yes',
                    },
                    {
                        answer: 'No',
                    }]
                },
            ]
        },
        {
            title: 'Excellent Delivery and Fresh Innovations',
            questions: [
                {
                    title: `How Do You Rate the Departmental Team's Performance This Week?`,
                    options: [{
                        answer: 'Bad',
                    },
                    {
                        answer: 'Poor',
                    },
                    {
                        answer: 'Good',
                    },
                    {
                        answer: 'Excellent',
                    }]
                },
                {
                    title: 'What Fresh Innovations Did the Team Add To Service Delivery This Week',
                    input: true
                },
                {
                    title: 'Details of Fresh Innovations For the Week',
                    text: true
                },
            ]
        }
    ]

   return (
     <div className='bg-inherit w-full mb-24'>
       <div>THE REPORTS</div>

       <div>
        {
            reports.map((report, i)=>(
                <div key={i}>
                    <div  className='text-orange-500'>{i+1}. {report.title}</div>
                    <div>
                        {
                            report.questions.map((question,index)=>(
                                <div key={index}>
                                    <div className='font-normal my-1'>{question.title}</div>
                                    <div>
                                        {question.options && question.options.map((option, indexOption)=>(
                                        <span 
                                            key={indexOption} 
                                            className={`text-lg text-black mb-4 p-2 px-4 bg-gray-50 border ${reportOption === option.answer? 'border-orange-500' : 'border-gray-300'} rounded-lg flex justify-between hover:cursor-pointer`}
                                            onClick={()=>setReportOption(option.answer)}
                                        >
                                            {option.answer}
                                            </span>
                                            ))}
                                    </div>
                                    <div>
                                        {question.input && 
                                        <input 
                                            type='text'
                                            className='w-full bg-white rounded-lg text-lg text-gray-300 mb-4 p-2 px-4 border'
                                        />}
                                    </div>
                                    <div>
                                        {question.text && 
                                        <textarea 
                                            type='text'
                                            className='w-full bg-white rounded-lg text-lg text-gray-300 mb-4 p-2 px-4 border'
                                        />}
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    <div></div>
                </div>
            ))
        }
       </div>

       <div>
        <div>Retain entries for next session</div>
       </div>
     </div>
   )
 }
 
 export default UserReport
 