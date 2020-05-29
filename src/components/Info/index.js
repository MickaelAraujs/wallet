import React from 'react'
import Icon from 'react-native-vector-icons/Feather'

import {
    InfoContainer, Row, BadgeContainer,
    Badge, BadgeText, Value, Date, Comment
} from './styles'

export default function Info({ data }) {
    return (
        <InfoContainer>
            <Row>
                <BadgeContainer>
                    <Badge type={data.type}>
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