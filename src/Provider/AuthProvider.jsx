import  { createContext, useEffect, useState } from 'react';
import { app } from '../Firebase/firebase.init';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";


export const AuthContext = createContext();
const auth = getAuth(app);
const AuthProvider = ({children}) => {
    const [user, setUser] =useState(null);
    const [loading, setLoading] = useState(true)

    const createUser =(email, password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    
    const emailLogin =(email, password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const updateUser= (updatedData)=>{
        return updateProfile(auth.currentUser, updatedData)
    }
    // console.log(user)
    const logout = ()=>{
        return signOut(auth)
    }


    useEffect(()=>{
        const unsubscribe =onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser);
            setLoading(false)
        });
            return ()=>{
                unsubscribe()
            }
    },[])
    const authInfo = {
        user,
        setUser,
        createUser,
        logout,
        emailLogin,
        loading, 
        setLoading,
        updateUser
    }
    return (
        <AuthContext value={authInfo}> {children}</AuthContext>
    );
};

export default AuthProvider;