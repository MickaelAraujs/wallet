import React from 'react'
import { Image } from 'react-native'

import {
    DrawerContentScrollView,
    DrawerItemList,
} from '@react-navigation/drawer'

import logo from '../../assets/Logo1.png'

import { LogoContainer } from './styles'

export default function CustomDrawer(props) {
    return (
        <DrawerContentScrollView {...props}>
            <LogoContainer>
                <Image
                source={logo}
                />
            </LogoContainer>

            <DrawerItemList  {...props} />
        </DrawerContentScrollView>
    )
}