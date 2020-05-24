import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'

import Icon from 'react-native-vector-icons/Feather'

import Home from '../pages/Home'
import NewRegister from '../pages/NewRegister'
import Profile from '../pages/Profile'

import CustomDrawer from '../components/CustomDrawer'

const Drawer = createDrawerNavigator()

export default function AppRoute() {
    return (
        <Drawer.Navigator
        initialRouteName='Home'

        drawerStyle={{
            backgroundColor: '#1A1818',
            width: 196
        }}

        drawerContent={CustomDrawer}

        drawerContentOptions={{
            labelStyle: {
                fontWeight: 'bold',
                marginLeft: -20
            },

            activeTintColor: '#F3F3F3',
            activeBackgroundColor: '#0BB24E',
            
            inactiveTintColor: '#F3F3F3', 
            itemStyle: {
                marginTop: 10,
                marginLeft: 0,
                width: '100%',
                borderRadius: 0
            },
            contentContainerStyle: {
                marginTop: 60
            }
        }} 
        >
            <Drawer.Screen
            name='Home'
            component={Home}
            options={{
                title: 'Início',
                drawerIcon: (({ focused, color, size }) => <Icon name='home' size={26} color='#F3F3F3' />)
            }}
            />

            <Drawer.Screen
            name='NewRegister'
            component={NewRegister}
            options={{
                title: 'Novo Registro',
                drawerIcon: ({ focused, color, size }) => <Icon name='plus-square' size={26} color='#F3F3F3' />
            }}
            />

            <Drawer.Screen
            name='Profile'
            component={Profile}
            options={{
                title: 'Perfil',
                drawerIcon: ({ focused, color, size }) => <Icon name='user' size={26} color='#F3F3F3' />
            }}
            /> 
        </Drawer.Navigator>
    )
}