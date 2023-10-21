import { createContext, useEffect, useState } from 'react'
import app from '../config/firebase.config'
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth"

export const AuthContext = createContext()
const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider();

export default function AuthProvider({children}) {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    

    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, currentUser => {
        setUser(currentUser);
        setLoading(false)

      })

      return () => unsubscribe();
    }, [])

    const createUser = (email, pass) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, pass);
    }

    const signInGoogleUser = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
      }

    const updateUserProfile = (uname, url) => {
      setLoading(true)
      return updateProfile(auth.currentUser, {
        displayName: uname, photoURL: url
      });
    }

    const signInUser = (email, pass) => {
      setLoading(true)
      return signInWithEmailAndPassword(auth, email, pass);
    }



    const signOutUser = () => {
      setLoading(true)
      return signOut(auth);
    }

    const authInfo = {
        user,
        loading,
        createUser,
        signInUser,
        signOutUser,
        updateUserProfile,
        signInGoogleUser
    }
  return (
    <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
  )
}