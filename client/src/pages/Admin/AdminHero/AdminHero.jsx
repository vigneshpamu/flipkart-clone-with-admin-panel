/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import './style.css'
import { useSelector } from 'react-redux'
import { RxDashboard } from 'react-icons/rx'
import { BiCartAdd } from 'react-icons/bi'
import { MdUpdate } from 'react-icons/md'
import { MdOutlineReviews } from 'react-icons/md'
import { HiOutlineDocumentText } from 'react-icons/hi'
import { AiOutlineUsergroupAdd } from 'react-icons/ai'
import { FaUserEdit } from 'react-icons/fa'
import { FiLogOut } from 'react-icons/fi'

import AdminDashboard from '../AdminHero/components/Dashboard/AdminDashboard'
import AdminAddProducts from './components/Add Products/AdminAddProducts'
import AdminUpdateProducts from './components/Update Products/AdminUpdateProducts'

const AdminHero = () => {
  const { adminData } = useSelector((state) => state.admin)
  const [data, setData] = useState(JSON.parse(adminData))
  const [activeTab, setActiveTab] = useState(1)

  const Navdata = [
    {
      id: 1,
      icon: <BiCartAdd />,
      text: 'Add Products',
    },
    {
      id: 2,
      icon: <RxDashboard />,
      text: 'Dashboard',
    },
    {
      id: 3,
      icon: <MdUpdate />,
      text: 'Update Products',
    },

    {
      id: 4,
      icon: <MdOutlineReviews />,
      text: 'Reviews',
    },
    {
      id: 5,
      icon: <HiOutlineDocumentText />,
      text: 'All Orders',
    },
    {
      id: 6,
      icon: <AiOutlineUsergroupAdd />,
      text: 'Users',
    },
    {
      id: 7,
      icon: <FaUserEdit />,
      text: 'My Profile',
    },
    {
      id: 8,
      icon: <FiLogOut />,
      text: 'Logout',
    },
  ]

  const handleActiveTab = (id) => {
    setActiveTab(id)
  }
  return (
    <div className="adminHeroMainDiv">
      <div className="adminHeroMainHalf">
        <div className="adminHeroLeft">
          <div>
            <div className="adminProfileData">
              <div className="adminImage">
                <img src={data?.avatar} alt="" />
              </div>
              <div className="adminContent">
                <h3>{data.name}</h3>
                <p>{data.email}</p>
              </div>
            </div>
            <div className="allAdminNavItem">
              {Navdata.map((item) => {
                return (
                  <div
                    key={item.id}
                    className={
                      activeTab === item.id
                        ? 'activeTab singleDivNavItem'
                        : 'singleDivNavItem'
                    }
                    onClick={() => handleActiveTab(item.id)}
                  >
                    <h2>{item.icon}</h2>
                    <p>{item.text}</p>
                  </div>
                )
              })}
            </div>
          </div>
          <div className="downsideAdminHero">
            <h2>Developed By Vignesh ❤️</h2>
          </div>
        </div>
        <div className="adminHeroRight">
          {activeTab === 1 && <AdminAddProducts />}
          {activeTab === 2 && <AdminDashboard />}
          {activeTab === 3 && <AdminUpdateProducts />}
        </div>
      </div>
    </div>
  )
}

export default AdminHero
