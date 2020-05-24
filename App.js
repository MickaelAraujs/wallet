import React from 'react'
import { StatusBar } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'

import AuthProvider from './src/contexts/auth'
import Routes from './src/routes'

console.disableYellowBox = true

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar
      backgroundColor='#F3F3F3'
      barStyle='dark-content'
      translucent={true}
      />

      <AuthProvider>
        <Routes />
      </AuthProvider>
    </NavigationContainer>
  )
}