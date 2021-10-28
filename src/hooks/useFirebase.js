import { useEffect, useState } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged,signOut } from "firebase/auth";
import initializeAuthentication from '../Pages/Login/Firebase/Firebase.init';



initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] =useState(true);
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    
    
    //signin with Google

    const signInWithGoogle =()=>{
        setIsLoading(true);
       return signInWithPopup(auth, googleProvider)     
    }


    const logout = () => {
        setIsLoading(true);
        signOut(auth)
            .then(() => {
                setUser({});
            })
            .finally( () => setIsLoading(false))
    }

    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            }
            setIsLoading(false);
        })
    }, []);

    return (
        {
            user,
            error,
            signInWithGoogle,
            logout,
            isLoading
        }
    );
};

export default useFirebase;