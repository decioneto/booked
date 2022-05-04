import { createContext, Dispatch, ReactNode, SetStateAction, useEffect, useState } from 'react'
import { auth, provider } from '../services/firebase'
import { signInWithPopup, onAuthStateChanged, signOut } from 'firebase/auth'
import light from '../styles/themes/light';
import dark from '../styles/themes/dark';
import { DefaultTheme } from 'styled-components';

import { BooksListProps } from '../models/BooksListResponse'

interface AuthContextProps {
  user: UserData | undefined;
  signInWithGoogle: () => void;
  logout: () => void;
}

interface AuthContextProviderProps {
  children: ReactNode;
}

export interface UserData {
  id: string;
  name: string;
  avatar: string;
  email: string;
}

export const AuthContext = createContext({} as AuthContextProps)

export function AuthContextProvider({ children }: AuthContextProviderProps) {
  const [user, setUser] = useState<UserData>()

  useEffect(() =>{
    const unsubscribe = onAuthStateChanged(auth, user => {
      if(user) {
        const { uid, displayName, email, photoURL  } = user

        if(!displayName || !photoURL) {
          throw new Error('Missing information from Google Account')
        }

        setUser({
          id: uid,
          name: displayName,
          avatar: photoURL,
          email: String(email),
        })
      }
    })
    
    return () => unsubscribe()
  }, [user?.id])

  function signInWithGoogle() {
    signInWithPopup(auth, provider)
      .then((result) => {
        
        if(result.user) {
          const { uid, displayName, email, photoURL } = result.user

          if(!displayName || !photoURL) {
            throw new Error('Missing information from Google Account')
          }

          setUser({
            id: uid,
            name: displayName,
            avatar: photoURL,
            email: String(email),
          })
        
        }
      })
      .catch(err => console.error(err))
  }

  function logout() {
    signOut(auth)
      .then(() => {
        window.location.reload()
      })
  }
  
  return (
    <AuthContext.Provider value={{
      user,
      signInWithGoogle,
      logout
    }} >
      { children }
    </AuthContext.Provider>
  )
}