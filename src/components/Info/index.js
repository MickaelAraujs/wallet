import React from 'react'
import { Alert } from 'react-native'
import Icon from 'react-native-vector-icons/Feather'

import firebase from '../../services/firebase'

import {
    InfoContainer, Row, BadgeContainer,
    Badge, BadgeText, Value, Date, Comment
} from './styles'

export default function Info({ data, uid }) {
    function handlePress() {
        Alert.alert(
            'ATENÇÃO! Essa ação não pode ser desfeita',
            'tem certeza que deseja deletar esse registro?',
            [
                {
                    text: 'cancelar',
                    style: 'cancel'
                },

                {
                    text: 'deletar',
                    onPress: () => handleDelete()
                }
            ]
        )
    }

    async function handleDelete() {
        await firebase.database().ref('users').child(uid)
            .once('value', snapshot => {
                let balance = snapshot.val().balance

                if (data.type === 'gasto') {
                    balance += parseFloat(data.value)
                } else {
                    balance -= parseFloat(data.value)
                }

                firebase.database().ref('users').child(uid)
                .child('balance').set(balance)
            }).then(async () => {
                await firebase.database().ref('history').child(uid)
                .child(data.key).remove()
            })
    }

    

    return (
        <InfoContainer>
            <Row>
                <BadgeContainer>
                    <Badge
                    type={data.type}
                    onLongPress={handlePress}
                    >
                        { data.type === 'gasto' ? (
                            <Icon name='arrow-down' size={18} color='#F3F3F3' />
                        ) : (
                            <Icon name='arrow-up' size={18} color='#F3F3F3' />
                        )}
                        <BadgeText>{data.type}</BadgeText>
                    </Badge>

                    <Value>{Intl.NumberFormat('pt-BR', {
                        style: 'currency', currency: 'BRL' }).format(data.value)
                    }</Value>
                </BadgeContainer>

                <Date>{data.date}</Date>
            </Row>

            <Comment>{data.comment ?? ''}</Comment>
        </InfoContainer>
    )
}