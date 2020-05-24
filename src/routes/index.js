import React, { useContext } from 'react'

import AuthRoute from './auth.route'
import AppRoute from './app.route'

import { AuthContext } from '../contexts/auth'

export default function Routes() {
    const { signed } = useContext(AuthContext)

    return (
        <>
        { signed ? <AppRoute /> : <AuthRoute /> }
        </>
    )
}