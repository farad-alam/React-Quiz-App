import React, { useContext, useEffect, useState } from "react";
import { getAuth, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
import app from "../../firebase"


// initilize new context
const AuthContext = React.createContext();

// wrap the AuthContext with authenticated values
export function AuthProvider({ children }) {
    const [loading, setLoading] = useState(true)
    const [currentUser, setCurrentUser] = useState();

    useEffect(()=>{
        const auth = getAuth()
        console.log("funtions called")
        const unsubscribe = onAuthStateChanged(auth, (user)=>{
            setCurrentUser(user)
            setLoading(false)
            console.log("loading set")
        })

        return unsubscribe
    }, [])

  async function signUp(email, password, username) {
    const auth = getAuth();
    await createUserWithEmailAndPassword(auth, email, password)

    await updateProfile(auth.currentUser, {displayName: username})

    const user = auth.currentUser
    setCurrentUser({
        ...user,
    })
    
  }

  function logIn(email, password){
    const auth = getAuth()
    return signInWithEmailAndPassword(auth, email, password)
  }

  function logOut(){
    const auth = getAuth()
    return signOut(auth)
  }

  const value = {
    currentUser,
    signUp,
    logIn,
    logOut,
  };
  return (
  <AuthContext.Provider value={value}>

    {children}
    
    </AuthContext.Provider>
);
}

// creating a hook to use the authentication on any page
function useAuth() {
  return useContext(AuthContext);
}

export default useAuth;
