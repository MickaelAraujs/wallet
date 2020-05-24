import React, { useContext } from 'react'
import {View, ActivityIndicator} from 'react-native'

import AuthRoute from './auth.route'
import AppRoute from './app.route'

import { AuthContext } from '../contexts/auth'

export default function Routes() {
    const { signed, authLoading } = useContext(AuthContext)

    if (authLoading) {
        return (
            <View
            style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center'
            }}
            >
               <ActivityIndicator
                size={60}
                color='#0BB24E'
               />
            </View>
        )
    }

    return (
        <>
        { signed ? <AppRoute /> : <AuthRoute /> }
        </>
    )
}