/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { createContext, useContext, useReducer, useState } from 'react'

const UserContext = createContext()

function UserProvider({ children }) {
  const [user, setUser] = useState({})
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  )
}

function useUser() {
  const context = useContext(UserContext)
  if (context === undefined)
    throw new Error('AuthContext was used outside AuthProvider')
  return context
}

export { UserProvider, useUser }
