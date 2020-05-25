import React, { useState } from 'react'
import { 
    KeyboardAvoidingView,
    Keyboard ,
    TouchableWithoutFeedback
} from 'react-native'

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

import DrawerToggler from '../../components/DrawerToggler'
import Dropdown from '../../components/Dropdown'

export default function NewRegister() {
    const [value, setValue] = useState('')
    const [type, setType] = useState(null)
    const [comment, setComment] = useState('')


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
                                size={350}
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
                            size={350}
                            placeholder='comentário (opcional)'
                            autoCorrect={false}
                            value={comment}
                            onChangeText={text => setComment(text)}
                            />

                            <ButtonGreen
                            size={350}
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