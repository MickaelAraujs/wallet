import React from 'react'
import Icon from 'react-native-vector-icons/Feather'

import {
    InfoContainer, Row, BadgeContainer,
    Badge, BadgeText, Value, Date, Comment
} from './styles'

export default function Info() {
    const data = {
        type: 'gasto',
        value: '120',
        date: '25/05/2020',
    }
    return (
        <InfoContainer>
            <Row>
                <BadgeContainer>
                    <Badge type={data.type}>
                        <Icon name='arrow-down' size={18} color='#F3F3F3' />
                        <BadgeText>{data.type}</BadgeText>
                    </Badge>

                    <Value>R$ 120,00</Value>
                </BadgeContainer>

                <Date>25/05/2020</Date>
            </Row>

            <Comment>{data.comment ?? ''}</Comment>
        </InfoContainer>
    )
}