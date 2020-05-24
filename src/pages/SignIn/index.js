import React, { useState, useContext } from 'react'
import { 
    KeyboardAvoidingView,
    TouchableWithoutFeedback,
    Keyboard,
    Animated, 
    ActivityIndicator 
} from 'react-native'

import { useNavigation } from '@react-navigation/native'

import logo from '../../assets/Logo2.png'

import {
    Container,
    LogoAuth,
    InputBox,
    Label,
    Input,
    ButtonGreen,
    ButtonText,
} from '../../styles/global'

import {
    SignInContainer,
    SignUpText
} from './styles'

import { AuthContext } from '../../contexts/auth'

export default function SignIn() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [ position ] = useState(new Animated.Value(1000))

    const { signIn, loading } = useContext(AuthContext)

    const navigation = useNavigation()

    Animated.timing(position, {
        toValue: 0,
        duration: 700,
        useNativeDriver: false
    }).start()

    function handleSignIn() {
        Keyboard.dismiss()

        signIn(email, password)

        setEmail('')
        setPassword('')
    }

    return (
        <TouchableWithoutFeedback
        onPress={() => Keyboard.dismiss()}
        >
            <Animated.View 
            style={{
                flex: 1,
                marginTop: position,
            }}
            >
            <Container>
                <KeyboardAvoidingView
                behavior='position' 
                >
                    <LogoAuth
                    source={logo}
                    />
                    
                    <SignInContainer>
                        <InputBox>
                            <Label>email</Label>
                            <Input
                            underlineColorAndroid='transparent'
                            value={email}
                            onChangeText={text => setEmail(text)}
                            textAlignVertical='top'
                            />
                        </InputBox>
                        
                        <InputBox>
                            <Label>senha</Label>
                            <Input
                            underlineColorAndroid='transparent'
                            value={password}
                            onChangeText={text => setPassword(text)}
                            textAlignVertical='top'
                            secureTextEntry={true}
                            />
                        </InputBox>

                        <ButtonGreen
                        onPress={handleSignIn}
                        >
                            { loading ? (
                                <ActivityIndicator size={25} color='#F3F3F3' />
                            ) : (
                                <ButtonText>ENTRAR</ButtonText>
                            )}
                        </ButtonGreen>
                    </SignInContainer>
                    
                    <SignUpText>ainda não possui uma conta?</SignUpText>

                    <ButtonGreen
                    onPress={() => navigation.navigate('SignUp')}
                    >
                        <ButtonText>CADASTRE-SE</ButtonText>
                    </ButtonGreen>
                </KeyboardAvoidingView>
            </Container>
            </Animated.View>
        </TouchableWithoutFeedback>
    )
}