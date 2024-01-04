import PropTypes from 'prop-types'
import { createContext, useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { app } from "../firebase/firebase.config";

export const AuthContext = createContext(null); 
const auth = getAuth(app);

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null); 
    const [loading, setLodaing] = useState(true);

    // user management 
    useEffect( () => {
        onAuthStateChanged(auth, currentUser => {
            setUser(currentUser); 
            console.log('current user =>', currentUser); 
            setLodaing(false)
        })
    }, [])

    const authData = {
        user, 
        loading
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