import React, { useState, useContext, useEffect } from 'react'
import { Image, Animated, FlatList, ActivityIndicator } from 'react-native'
import Icon from 'react-native-vector-icons/Feather'
import firebase from '../../services/firebase'
import { format } from 'date-fns'

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
import { AuthContext } from '../../contexts/auth'
import logo from '../../assets/Logo1.png'

export default function Home() {
    const [hide, setHide] = useState(false)
    const [isMinimized, setIsMinimized] = useState(false)

    const [ opacity ] = useState(new Animated.Value(1))
    const [ height ] = useState(new Animated.Value(-170))
    const [ cardOpacity ] = useState(new Animated.Value(1))

    const [balance, setBalance] = useState(0)
    const [history, setHistory] = useState([])
    const [high, setHigh] = useState(0)
    const [low, setLow] = useState(0)
    const [isLoading, setIsLoading] = useState(true)

    const { user } = useContext(AuthContext)

    useEffect(() => {
        async function loadUserData() {
            await firebase.database().ref('users').child(user.uid).on('value', snapshot => {
                setBalance(snapshot.val().balance)
            })

            firebase.database().ref('history').child(user.uid)
                .orderByChild('date')
                .equalTo(format(new Date, 'dd/MM/yyyy'))
                .limitToLast(10)
                .on('value', snapshot => {
                    setHistory([])
                    snapshot.forEach(child => {
                        const { comment, date, type, value } = child.val()
                        const data = {
                            key: child.key,
                            comment,
                            date,
                            type,
                            value
                        }
                        setHistory(oldArray => [...oldArray, data].reverse())
                    })
                })
        }

        loadUserData()
    }, [])

    useEffect(() => {
        async function loadTotalValues() {
            await firebase.database().ref('history').child(user.uid)
            .orderByChild('type')
            .equalTo('gasto')
            .once('value', snapshot => {
                let valueArray = []

                snapshot.forEach(child => {
                    valueArray.push(child.val().value)
                })

                if (valueArray.length === 0) return

                const total = valueArray.reduce((current, next) => current + next)

                setLow(total)
            })

            await firebase.database().ref('history').child(user.uid)
            .orderByChild('type')
            .equalTo('ganho')
            .once('value', snapshot => {
                let valueArray = []

                snapshot.forEach(child => {
                    valueArray.push(child.val().value)
                })

                if (valueArray.length === 0) return

                const total = valueArray.reduce((current, next) => current + next)

                setHigh(total)
            })

            setIsLoading(false)
        }

        loadTotalValues()
    }, [balance])

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
                    toValue: 60,
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

                    <Name>{user.name}!</Name>
                </TextContainer>
            </Welcome>

            { isLoading ? (
            <ActivityIndicator
            style={{ marginTop: 25 }}
            size={45}
            color='#0BB24E'
            />
            ) : (
            <Balance>
                <BalanceText>saldo:</BalanceText>

                <BalanceContainer>
                    <AnimatedText
                    style={{ opacity: opacity }}
                    >
                        {Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(balance)}
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
            ) }

            <GreenTextContainer>
                <FilterDateButton>
                    <Icon name='calendar' size={32} color='#0BB24E' />
                </FilterDateButton>

                <GreenText>últimas movimentações</GreenText>
            </GreenTextContainer>

            { isLoading ? (
            <ActivityIndicator
            style={{ marginTop: 45 }}
            size={45}
            color='#0BB24E'
            />
            ) : (
            <ActivityContainer>
                <AnimatedInfo style={{ opacity: cardOpacity }}>
                    <StatusContainer>
                        <StatusText>total gastos:</StatusText>
                        
                        <StatusValue value='low'>
                            {Intl.NumberFormat('pt-BR', {
                                style: 'currency',
                                currency: 'BRL'
                            }).format(low)}
                        </StatusValue>
                    </StatusContainer>

                    <StatusContainer>
                        <StatusText>total ganhos:</StatusText>

                        <StatusValue>
                            {Intl.NumberFormat('pt-BR', {
                                style: 'currency',
                                currency: 'BRL'
                            }).format(high)}
                        </StatusValue>
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
                    style={{
                        marginBottom: 45
                    }}
                    data={history}
                    keyExtractor={item => String(item.key)}
                    renderItem={({ item }) => <Info data={item}/>}
                    />
                </AnimatedCard>
            </ActivityContainer>
            ) }
        </Container>
    )
}