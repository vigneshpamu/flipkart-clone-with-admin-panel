import React, { useState } from 'react'
import './style.css'
import { useSelector } from 'react-redux'
const AdminHeader = () => {
  const { adminData } = useSelector((state) => state.admin)
  const [data, setData] = useState(JSON.parse(adminData))
  return (
    <div className="adminHeaderMain">
      <div className="adminHeaderHalf">
        <div className="adminHeaderLeft">
          <h2>Admin Panel</h2>
        </div>
        <div className="adminHeaderRight">
          <img src={data?.avatar} alt="" />
        </div>
      </div>
    </div>
  )
}

export default AdminHeader
