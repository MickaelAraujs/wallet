import React, { createContext, useState } from 'react'
import firebase from '../services/firebase'

export const AuthContext = createContext()

export default function AuthProvider({ children }) {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(false)

    //cadastrar usuário
    async function signUp(name, email, password) {
        setLoading(true)

        await firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(async response => {
            const { uid, email } = response.user

            await firebase.database().ref('users').child(uid).set({
                name,
                balance: 0
            })
            .then(() => {
                const userData = {
                    uid,
                    name,
                    email
                }

                setUser(userData)
                setLoading(false)
            })   
        })
        .catch(error => {
            alert(error.code)
            setLoading(false)
        })
    }

    async function signIn(email, password) {
        setLoading(true)

        await firebase.auth().signInWithEmailAndPassword(email, password)
        .then(async response => {
           const { uid, email } = response.user

           await firebase.database().ref('users').child(uid)
           .once('value', snapshot => {
                const userData = {
                    uid,
                    name: snapshot.val().name,
                    email
                }

                setUser(userData)
                setLoading(false)
           })
        })
        .catch(error => {
            alert(error.code)
            setLoading(false)
        })
    }

    return (
        <AuthContext.Provider
        value={{
            signed: !!user,
            user,
            loading,
            signUp,
            signIn
        }}
        >
             {children}
        </AuthContext.Provider>
    )
}