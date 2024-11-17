import { createContext, useEffect, useState } from "react"
import app from "../firebase/firebase.config";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";

export const AuthContext = createContext();

export default function AuthProvider({children}) {
    const auth = getAuth(app);

    const [user,setUser] = useState(null);


    const creaateNewUser = (email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const userLogin =(email,password)=>{
      return signInWithEmailAndPassword(auth,email,password)

    }

    const logOut = ()=>{
      return signOut(auth)
    }

    const authInfo = {
        user,
        setUser ,
        creaateNewUser,
        logOut,
        userLogin,
    }

    useEffect(()=>{
       const unsubscribe = onAuthStateChanged(auth, currentUser=>{
          setUser(currentUser)
        })
        return ()=>{
            unsubscribe()
        }
    },[auth]);

    console.log(user);
  return (
    <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
  )
}
