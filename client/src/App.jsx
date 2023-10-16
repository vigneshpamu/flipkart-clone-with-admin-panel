/* eslint-disable no-unused-vars */
import { useState } from 'react'
import Home from './pages/Home/Home'
import { Outlet } from 'react-router-dom'
import { UserProvider } from './context/UserContext'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <UserProvider>
        <Outlet />
      </UserProvider>
    </div>
  )
}

export default App
