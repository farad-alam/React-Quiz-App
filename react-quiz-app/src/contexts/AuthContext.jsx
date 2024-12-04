import React, { useContext, useEffect, useState } from "react";
import { getAuth, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
// import ".../firebase"
// initilize new context
const AuthContext = React.createContext();

// wrap the AuthContext with authenticated values
export function AuthProvider({ Children }) {
    const [loading, setLoading] = useState(true)
    const [currentUser, setCurrentUser] = useState();

    useEffect(()=>{
        const auth = getAuth()
        const unsubscribe = onAuthStateChanged(auth, (user)=>{
            setCurrentUser(user)
            setLoading(false)
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
    return signInWithEmailAndPassword(email, password)
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
  return (<AuthContext.Provider value={value}>{!loading && Children}</AuthContext.Provider>);
}

// creating a hook to use the authentication on any page
function useAuth() {
  return useContext(AuthContext);
}

export default useAuth;
