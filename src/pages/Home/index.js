import React, { useState } from 'react'
import { Image, Animated } from 'react-native'
import Icon from 'react-native-vector-icons/Feather'

import { Container } from '../../styles/global'
import {
    Welcome, TextContainer, WelcomeText,
    Name, Balance, BalanceText, BalanceContainer,
    BalanceValue, HideButton, GreenTextContainer,
    FilterDateButton, GreenText, ActivityContainer,
    ActivityStatus, StatusContainer, StatusText,
    StatusValue, ActivityCard, MinimizeButton
} from './styles'

import DrawerToggler from '../../components/DrawerToggler'
import logo from '../../assets/Logo1.png'

export default function Home() {
    const [hide, setHide] = useState(false)
    const [ opacity ] = useState(new Animated.Value(1))

    const AnimatedText = Animated.createAnimatedComponent(BalanceValue)

    function handleHide() {
        setHide(!hide)

        if (!hide) {
            Animated.timing(opacity, {
                toValue: 0,
                duration: 400
            }).start()
        } else {
            Animated.timing(opacity, {
                toValue: 1,
                duration: 400
            }).start()
        }
    }

    return (
        <Container>
            <DrawerToggler />

            <Welcome>
                <Image
                source={logo}
                />

                <TextContainer>
                    <WelcomeText>
                        Bem Vindo,
                    </WelcomeText>

                    <Name>Mickael!</Name>
                </TextContainer>
            </Welcome>

            <Balance>
                <BalanceText>saldo:</BalanceText>

                <BalanceContainer>
                    <AnimatedText
                    style={{ opacity: opacity }}
                    >
                        R$ 109,855,60
                    </AnimatedText>

                    <HideButton
                    onPress={handleHide}
                    >
                        { hide ? (
                        <Icon name='eye' size={26} color='#000000' />
                        ) : (
                        <Icon name='eye-off' size={26} color='#000000' />
                        ) }
                    </HideButton>
                </BalanceContainer>
            </Balance>

            <GreenTextContainer>
                <FilterDateButton>
                    <Icon name='calendar' size={32} color='#0BB24E' />
                </FilterDateButton>

                <GreenText>últimas movimentações</GreenText>
            </GreenTextContainer>

            <ActivityContainer>
                <ActivityStatus>
                    <StatusContainer>
                        <StatusText>total gastos:</StatusText>
                        
                        <StatusValue value='low'>R$ 865,50</StatusValue>
                    </StatusContainer>

                    <StatusContainer>
                        <StatusText>total ganhos:</StatusText>

                        <StatusValue>R$ 3267,27</StatusValue>
                    </StatusContainer>
                </ActivityStatus>

                <ActivityCard>
                    <MinimizeButton>
                        <Icon name='minimize-2' size={26} color='#000000' />
                    </MinimizeButton>
                </ActivityCard>
            </ActivityContainer>
        </Container>
    )
}