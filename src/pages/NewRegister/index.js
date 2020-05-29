import React, { useState, useContext } from 'react'
import { 
    KeyboardAvoidingView,
    Keyboard ,
    TouchableWithoutFeedback,
    Alert
} from 'react-native'

import firebase from '../../services/firebase'
import { format } from 'date-fns'
import { useNavigation } from '@react-navigation/native'

import {
    Container,
    Actions,
    InputBox,
    Label,
    Input,
    ButtonGreen,
    ButtonText
} from '../../styles/global'

import { RegisterContainer, Title } from './styles'

import { AuthContext } from '../../contexts/auth'

import DrawerToggler from '../../components/DrawerToggler'
import Dropdown from '../../components/Dropdown'

export default function NewRegister() {
    const [value, setValue] = useState('')
    const [type, setType] = useState(null)
    const [comment, setComment] = useState('')

    const { user } = useContext(AuthContext)

    const navigation = useNavigation()

    function handleSubmit() {
        Keyboard.dismiss()

        if (value === '' || type === null) {
            Alert.alert('Operação Inválida', 'preencha os campos necessários!')
            return
        }

        Alert.alert(
            'confirmando registro',
            `verifique se os dados estão corretos (valor: ${value} - tipo: ${type})`,
            [
                {
                    text: 'cancelar',
                    style: 'cancel'
                },

                {
                    text: 'confirmar',
                    onPress: () => handleNewRegister(),
                }
            ]
        )
    }

    async function handleNewRegister() {
        const key = await firebase.database().ref('history').push().key

        await firebase.database().ref('history').child(user.uid).child(key).set({
            value: parseFloat(value),
            type,
            date: format(new Date(), 'dd/MM/yyyy'),
            comment
        })

        const userRef = await firebase.database().ref('users').child(user.uid)
        
        await userRef.once('value', snapshot => {
            let balance = parseFloat(snapshot.val().balance)

            if (type === 'ganho') {
                balance += parseFloat(value)
            } else {
                balance -= parseFloat(value)
            }

            userRef.child('balance').set(balance)
        })

        setValue('')
        setType(null)
        setComment('')

        navigation.navigate('Home')
    }
    
    return (
        <TouchableWithoutFeedback
        onPress={() => Keyboard.dismiss()}
        >
            <Container>
                <KeyboardAvoidingView behavior='position' style={{ paddingBottom: 10 }}>
                    <DrawerToggler register={true} />

                    <RegisterContainer>
                        <Title>NOVO REGISTRO</Title>

                        <Actions>
                            <InputBox>
                                <Label>valor</Label>

                                <Input
                                size={300}
                                placeholder='informe o valor do registro'
                                autoCorrect={false}
                                value={value}
                                onChangeText={text => setValue(text)}
                                />
                            </InputBox>

                            <Dropdown
                            value={type}
                            onChange={setType}
                            />
                
                            <Input
                            style={{ marginTop: 20 }}
                            size={300}
                            placeholder='comentário (opcional)'
                            autoCorrect={false}
                            value={comment}
                            onChangeText={text => setComment(text)}
                            />

                            <ButtonGreen
                            size={300}
                            onPress={handleSubmit}
                            >
                                <ButtonText>REGISTRAR</ButtonText>
                            </ButtonGreen>
                        </Actions>
                    </RegisterContainer>
                </KeyboardAvoidingView>
            </Container>
        </TouchableWithoutFeedback>
    )
}