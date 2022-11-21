import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword} from 'firebase/auth';
import app from '../Firebase/firebase.config'

export const AuthContext = createContext(app)
const auth = getAuth()

const AuthProvider = ({children}) => {
    const [user, setUser] = useState('')

    // user create with email and password 
    const createUser =(email,password)=>{
        return createUserWithEmailAndPassword(auth, email,password)
    }
    //user login 
    const loginUser =(email,password)=>{
        return signInWithEmailAndPassword(auth, email, password)
    }

    // createOnAuthStateChange
    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser)
        })
        return ()=>{
            unSubscribe()
        }
    },[])

    const authInfo = {
        user,
        createUser,
        loginUser
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;