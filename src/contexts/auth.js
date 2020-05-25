import React, { createContext, useState, useEffect } from 'react'
import firebase from '../services/firebase'
import AsyncStorage from '@react-native-community/async-storage'

export const AuthContext = createContext()

export default function AuthProvider({ children }) {
    const [user, setUser] = useState(null)
    const [authLoading, setAuthLoading] = useState(true)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        async function getDataFromStorage() {
            const authUser = await AsyncStorage.getItem('user_auth')

            if (authUser) {
                setUser(JSON.parse(authUser))
            }

            setAuthLoading(false)
        }

        getDataFromStorage()
    }, [])

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
                saveDataToStorage(userData)
                setLoading(false)
            })   
        })
        .catch(error => {
            alert(error.code)
            setLoading(false)
        })
    }

    //logar usuário
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
                saveDataToStorage(userData)
                setLoading(false)
           })
        })
        .catch(error => {
            alert(error.code)
            setLoading(false)
        })
    }

    async function signOut() {
        setLoading(true)

        await firebase.auth().signOut()
        await AsyncStorage.clear().then(() => {
            setLoading(false)
            setUser(null)
        })
    }

    async function saveDataToStorage(data) {
        await AsyncStorage.setItem('user_auth', JSON.stringify(data))
    }

    return (
        <AuthContext.Provider
        value={{
            signed: !!user,
            user,
            loading,
            authLoading,
            signUp,
            signIn,
            signOut
        }}
        >
             {children}
        </AuthContext.Provider>
    )
}