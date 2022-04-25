import { createContext, ReactNode, useState } from 'react'
import { auth, provider } from '../services/firebase'

interface AuthContextProps {
  user: User | undefined;
}

interface AuthContextProviderProps {
  children: ReactNode;
}

interface User {
  id: string
  name: string
  avatar: string
}

export const AuthContext = createContext({} as AuthContextProps)

export function AuthContextProvider({ children }: AuthContextProviderProps) {
  const [user, setUser] = useState<User>()
  
  return (
    <AuthContext.Provider value={{
      user,
    }} >
      { children }
    </AuthContext.Provider>
  )
}