import PropTypes from 'prop-types'
import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { app } from "../firebase/firebase.config";

export const AuthContext = createContext(null); 
const auth = getAuth(app);

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null); 
    const [loading, setLodaing] = useState(true);

    // user management 
    useEffect( () => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser); 
            console.log('current user =>', currentUser); 
            setLodaing(false)
        }); 
        return () => {
            return unSubscribe(); 
        }; 
    }, [])

    // creating a new user with email and password
    const createUser = (email, password) => {
        setLodaing(true); 
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // signIn existing user using email and password
    const signIn = (email, password) => {
        setLodaing(true); 
        return signInWithEmailAndPassword(auth, email, password)
    }

    // sign out an user 
    const logOut = () => {
      setLodaing(true); 
      return signOut(auth); 
    }

    const authData = {
        user, 
        loading, 
        createUser, 
        signIn, 
        logOut
    }

    return (
        <AuthContext.Provider value={authData}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;

AuthProvider.propTypes = {
    children: PropTypes.node.isRequired
}