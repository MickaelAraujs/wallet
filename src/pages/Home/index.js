import React, { useState } from 'react'
import { Image, Animated, FlatList } from 'react-native'
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
import Info from '../../components/Info'
import logo from '../../assets/Logo1.png'

export default function Home() {
    const [hide, setHide] = useState(false)
    const [isMinimized, setIsMinimized] = useState(false)

    const [ opacity ] = useState(new Animated.Value(1))
    const [ height ] = useState(new Animated.Value(-170))
    const [ cardOpacity ] = useState(new Animated.Value(1))

    const AnimatedText = Animated.createAnimatedComponent(BalanceValue)
    const AnimatedCard = Animated.createAnimatedComponent(ActivityCard)
    const AnimatedInfo = Animated.createAnimatedComponent(ActivityStatus)

    function handleHide() {
        setHide(!hide)

        if (!hide) {
            Animated.timing(opacity, {
                toValue: 0,
                duration: 900,
                useNativeDriver: true
            }).start()
        } else {
            Animated.timing(opacity, {
                toValue: 1,
                duration: 900,
                useNativeDriver: true
            }).start()
        }
    }

    function handleAnimation() {
        if (!isMinimized) {
            Animated.parallel([
                Animated.timing(height, {
                    toValue: 30,
                    duration: 900,
                    useNativeDriver: true
                }),

                Animated.timing(cardOpacity, {
                    toValue: 1,
                    duration: 900,
                    useNativeDriver: true
                })
            ]).start()
        } else {
            Animated.parallel([
                Animated.timing(height, {
                    toValue: -170,
                    duration: 900,
                    useNativeDriver: true
                }),

                Animated.timing(cardOpacity, {
                    toValue: 0,
                    duration: 900,
                    useNativeDriver: true
                })
            ]).start()
        }

        setIsMinimized(!isMinimized)
    }

    return (
        <Container>
            <DrawerToggler />

            <Welcome>
                <Image
                style={{ marginTop: 20 }}
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
                        <Icon name='eye' size={32} color='#000000' />
                        ) : (
                        <Icon name='eye-off' size={32} color='#000000' />
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
                <AnimatedInfo style={{ opacity: cardOpacity }}>
                    <StatusContainer>
                        <StatusText>total gastos:</StatusText>
                        
                        <StatusValue value='low'>R$ 865,50</StatusValue>
                    </StatusContainer>

                    <StatusContainer>
                        <StatusText>total ganhos:</StatusText>

                        <StatusValue>R$ 3267,27</StatusValue>
                    </StatusContainer>
                </AnimatedInfo>

                <AnimatedCard
                style={{ transform: [{ translateY: height }] }}
                >
                    <MinimizeButton
                    onPress={handleAnimation}
                    >
                        { isMinimized ? (
                            <Icon name='maximize-2' size={26} color='#000000' />
                        ) : (
                            <Icon name='minimize-2' size={26} color='#000000' />
                        ) }
                    </MinimizeButton>

                    <FlatList
                    style={{ width: '100%', height: '100%'}}
                    data={[1,2,3,4,5,6,7,8,9,10]}
                    keyExtractor={item => item}
                    renderItem={({ item }) => <Info />}
                    />
                </AnimatedCard>
            </ActivityContainer>
        </Container>
    )
}