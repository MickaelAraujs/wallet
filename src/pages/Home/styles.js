import styled from 'styled-components/native'
import { getStatusBarHeight } from 'react-native-status-bar-height'

export const Welcome = styled.View`
    margin-top: ${45 + getStatusBarHeight()}px;
    padding: 10px;
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
`

export const TextContainer = styled.View`
    margin-left: 35px;
    margin-top: 10px;
`

export const WelcomeText = styled.Text`
    font-family: 'Roboto-Thin';
    font-size: 36px;
    letter-spacing: 1px;
`

export const Name = styled.Text`
    font-size: 40px;
    font-family: 'Roboto-BoldItalic';
    letter-spacing: 1px;
    color: #0BB24E;
`

export const Balance = styled.View`
    width: 100%;
    padding: 15px 25px;
`

export const BalanceText = styled.Text`
    font-family: 'Roboto-LightItalic';
    font-size: 24px;
    letter-spacing: 1px;
`

export const BalanceContainer = styled.View`
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

export const BalanceValue = styled.Text`
    font-family: 'Roboto-Bold';
    font-size: 36px;
    letter-spacing: 1px;
`

export const HideButton = styled.TouchableOpacity`
    justify-content: center;
    align-items: center;
`

export const GreenTextContainer = styled.View`
    width: 100%;
    padding-left: 25px;
    padding-bottom: 10px;
    flex-direction: row;
    align-items: baseline;
`

export const FilterDateButton = styled.TouchableOpacity`
    justify-content: center;
    align-items: center;
`

export const GreenText = styled.Text`
    margin-left: 5px;
    font-size: 18px;
    font-family: 'Roboto-Bold';
    color: #0BB24E;
`

export const ActivityContainer = styled.View`
    width: 100%;
    flex: 1;
    align-items: center;
    position: relative;
`

export const ActivityStatus = styled.View`
    width: 100%;
    padding-top: 10px;
    padding-left: 25px;
    z-index: 3;
`

export const StatusContainer = styled.View`
    margin-top: 15px;
`

export const StatusText = styled.Text`
    font-family: 'Roboto-Light';
    font-size: 24px;
`

export const StatusValue = styled.Text`
    font-family: 'Roboto-BoldItalic';
    font-size: 40px;
    color: ${props => props.value === 'low' ? '#E71A1A' : '#01933B'}
`

export const ActivityCard = styled.View`
    position: absolute;
    bottom: 0; 
    flex: 1;
    background: #fff;
    width: 95%;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    z-index: 9;
    elevation: 15
`

export const MinimizeButton = styled.TouchableOpacity`
    align-self: flex-end;
    padding: 15px 15px;
`