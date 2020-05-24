import React, { useState, useContext } from 'react'
import { 
    KeyboardAvoidingView,
    TouchableWithoutFeedback,
    Keyboard,
    Animated,
    View,
    ActivityIndicator
} from 'react-native'

import { useNavigation } from '@react-navigation/native'
import Icon from 'react-native-vector-icons/Feather'

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
    GoBackButton,
    GoBackText
} from './styles'

import { AuthContext } from '../../contexts/auth'

export default function SignUp() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [ position ] = useState(new Animated.Value(1000))

    const { signUp, loading } = useContext(AuthContext)

    const navigation = useNavigation()

    Animated.timing(position, {
        toValue: 0,
        duration: 700,
        useNativeDriver: false
    }).start()

    function handleSignUp() {
        Keyboard.dismiss()

        signUp(name, email, password)
        
        setName('')
        setEmail('')
        setPassword('')
    }

    return (
        <TouchableWithoutFeedback
        onPress={() => Keyboard.dismiss()}
        >   
            <Animated.View
            style={{
                marginTop: position,
                paddingBottom: 10,
                flex: 1
            }}
            >
            <Container>
                <KeyboardAvoidingView
                behavior='position'
                >   
                    <GoBackButton
                    onPress={() => navigation.goBack()}
                    >
                        <Icon name='arrow-left' color='#000000' size={35} />
                        <GoBackText>Login</GoBackText>
                    </GoBackButton>

                    <LogoAuth
                    source={logo}
                    style={{ marginTop: 75 }}
                    />
                    
                    <View style={{
                         alignItems: 'center',
                         marginTop: 30
                    }}>
                        <InputBox>
                            <Label>nome</Label>
                            <Input
                            underlineColorAndroid='transparent'
                            value={name}
                            onChangeText={text => setName(text)}
                            textAlignVertical='top'
                            />
                        </InputBox>

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
                        onPress={handleSignUp}
                        >
                            { loading ? (
                                <ActivityIndicator size={25} color='#F3F3F3' />
                            ) : (
                                <ButtonText>CADASTRAR</ButtonText>
                            ) }
                        </ButtonGreen>
                    </View>
                </KeyboardAvoidingView>
            </Container>
            </Animated.View>
        </TouchableWithoutFeedback>
    )
}