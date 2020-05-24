import React, { useState } from 'react'
import { 
    KeyboardAvoidingView,
    TouchableWithoutFeedback,
    Keyboard,
    Animated
} from 'react-native'

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

export default function SignIn() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [ position ] = useState(new Animated.Value(1000))

    Animated.timing(position, {
        toValue: 0,
        duration: 700,
        useNativeDriver: false
    }).start()

    function handleClick() {
        Animated.timing(position, {
            toValue: -1000,
            duration: 700,
            useNativeDriver: false
        }).start()
    }

    const AnimatedContainer = Animated.createAnimatedComponent(KeyboardAvoidingView)

    return (
        <TouchableWithoutFeedback
        onPress={() => Keyboard.dismiss()}
        >
            <Container>
                <AnimatedContainer
                behavior='position'
                style={{ marginTop: position, paddingBottom: 10 }}
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
                        onPress={handleClick}
                        >
                            <ButtonText>ENTRAR</ButtonText>
                        </ButtonGreen>
                    </SignInContainer>
                    
                    <SignUpText>ainda não possui uma conta?</SignUpText>

                    <ButtonGreen
                    onPress={handleClick}
                    >
                        <ButtonText>CADASTRE-SE</ButtonText>
                    </ButtonGreen>
                </AnimatedContainer>
            </Container>
        </TouchableWithoutFeedback>
    )
}