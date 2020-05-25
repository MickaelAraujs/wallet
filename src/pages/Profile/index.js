import React, { useContext } from 'react'
import { Image } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import { Container, ButtonGreen, ButtonText, Actions } from '../../styles/global'
import {
    ProfileContainer,
    Name,
    Email,
    SignOutButton
} from './styles'

import DrawerToggler from '../../components/DrawerToggler'
import { AuthContext } from '../../contexts/auth'

import avatar from '../../assets/AVATAR.png'

export default function Profile() {
    const navigation = useNavigation()

    const { signOut } = useContext(AuthContext)

    return (
        <Container>
            <DrawerToggler />

            <ProfileContainer>
                <Image
                source={avatar}
                />

                <Name>MICKAEL ARAUJO</Name>
                <Email>mickaelaraujo@fakeemail.com</Email>
            </ProfileContainer>

            <Actions>
                <ButtonGreen
                onPress={() => navigation.navigate('NewRegister')}
                >
                    <ButtonText>NOVO REGISTRO</ButtonText>
                </ButtonGreen>

                <SignOutButton
                onPress={() => signOut()}
                >
                    <ButtonText>SAIR DA CONTA</ButtonText>
                </SignOutButton>
            </Actions>
        </Container>
    )
}