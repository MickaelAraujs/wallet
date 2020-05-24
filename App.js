import React from 'react'
import { View, Text } from 'react-native'

export default function App() {
  return (
    <View style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <Text style={{
        fontSize: 18,
        fontFamily: 'Ranchers-Regular'
      }}>Wallet</Text>
    </View>
  )
}