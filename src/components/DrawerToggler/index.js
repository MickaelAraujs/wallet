import React from 'react'
import Icon from 'react-native-vector-icons/Feather'
import { useNavigation, DrawerActions } from '@react-navigation/native'

import { DrawerButton } from './styles'

export default function DrawerToggler() {
    const navigation = useNavigation()
    const { toggleDrawer } = DrawerActions

    return (
        <DrawerButton
        onPress={() => navigation.dispatch(toggleDrawer())}
        >
            <Icon name='menu' color='#000000' size={40} />
        </DrawerButton>
    )
}