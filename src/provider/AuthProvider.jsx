import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";

import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";
import { ToastContainer, toast } from "react-toastify";

import 'react-toastify/dist/ReactToastify.css';
import auth from "../Firebase/firebase.config";

export const AuthContext = createContext(null)

const googleProvider = new GoogleAuthProvider();
const gitProvider = new GithubAuthProvider()

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const createUser = (email, password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
        
    }
    const loginUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const signInWithGoogle = () =>{
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }
    const signInWithGit = () =>{
        setLoading(true)
        return signInWithPopup(auth, gitProvider)
    }
    const updateUser = (displayName, photoURL) =>{
        setLoading(true)
       return updateProfile(auth.currentUser, {
            displayName: displayName, photoURL: photoURL
          })
    }
    const logOut =() =>{
        setLoading(true)
        toast('Log out successful')
        return signOut(auth)
    }

    useEffect(() =>{
        const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser)
            setLoading(false)
            console.log(currentUser)
        });

        return () => {
            unsubscribe()
        }
    },[])

    const AuthInfo = {user, createUser, loginUser, logOut, loading, signInWithGoogle, signInWithGit, updateUser}

    return (
        <AuthContext.Provider value={AuthInfo}>
            <ToastContainer/>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes ={
    children: PropTypes.node
}

export default AuthProvider;