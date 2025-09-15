import React, { useState } from 'react'
import AdminReport from '../components/AdminSubmission'
import AdminGenInfo from '../components/AdminGenInfo'
import { AdminHeader } from '../components/Header'


function AdminForm() {
  const [switchs, setSwitch] = useState(false)
  const menuDisplay = ['Submissions', 'General info']
  return (
    <div>
      <AdminHeader option={menuDisplay}/>
      <button onClick={()=>setSwitch(!switchs)}>Switch</button>
      {
        switchs?<><AdminReport/><AdminReport/></>:<AdminGenInfo/>
      }
    </div>
  )
}

export default AdminForm
