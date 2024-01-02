import { createContext, useState } from "react";
import { getAuth } from "firebase/auth";
import { app } from "../firebase/firebase.config";

export const AuthContext = createContext(null); 
const auth = getAuth(app);

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null); 
    const [loading, setLodaing] = useState(true);

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