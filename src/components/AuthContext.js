import React, { useContext, useEffect, useState } from "react";
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged, signOut, updateProfile, updateEmail, updatePassword } from "firebase/auth";
import { deleteDoc, doc } from "firebase/firestore";


const AuthContext = React.createContext();

export function useAuth() {
    return useContext(AuthContext);
}

export function AuthProvider({children}) {
    const auth = getAuth();
    const [currentUser, setCurrentUser] = useState();
    const [loading, setLoading] = useState(true);

    const login = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logout = () => {
        return signOut(auth);
    }

    const updateName = (name) => {
        return updateProfile(auth.currentUser, {
            displayName: name
        })
    }

    const updateUserEmail = (email) => {
        return updateEmail(auth.currentUser, email)
    }

    const changePassword = (password) => {
        return updatePassword(auth.currentUser, password)
    }

    const deleteExercise = (collRef, docId) => {
        return deleteDoc(doc(collRef, docId))
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, user => {
            
            setCurrentUser(user);
            setLoading(false);
        })
        return unsubscribe;
    }, [auth])

    const value = {
        currentUser,
        login,
        logout,
        updateName,
        updateUserEmail,
        changePassword,
        deleteExercise,
    }

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}

