import styled from 'styled-components/native'
import { getStatusBarHeight } from 'react-native-status-bar-height'


export const Container = styled.SafeAreaView`
    flex: 1;
    align-items: center;
    background-color: #F3F3F3;
    padding-top: ${0 + getStatusBarHeight()}px;
`

export const LogoAuth = styled.Image`
    margin-top: 45px;
`

export const InputBox = styled.View`
    margin: 5px 0;
`

export const Label = styled.Text`
    font-size: 18px;
    margin-left: 3px;
    margin-top: 10px;
    font-family: 'Roboto-Regular';
`

export const Input = styled.TextInput`
    width: 288px;
    height: 53px;
    background-color: #E2DFDF;
    border-radius: 5px;
    margin-top: 5px;
    font-size: 18px;
    padding-left: 10px;
`

export const ButtonGreen = styled.TouchableOpacity`
    width: 288px;
    height: 53px;
    background-color: #0BB24E;
    border-radius: 5px;
    justify-content: center;
    align-items: center;
    margin-top: 15px;
    align-self: center;
`

export const ButtonText = styled.Text`
    color: #F3F3F3;
    font-size: 18px;
    font-family: 'Ranchers-Regular';
    letter-spacing: 3px;
`