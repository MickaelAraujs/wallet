import styled from 'styled-components/native'
import { getStatusBarHeight } from 'react-native-status-bar-height'

export const RegisterContainer = styled.View`
    margin-top: ${45 + getStatusBarHeight()}px;
`

export const Title = styled.Text`
    text-align: center;
    font-family: 'Ranchers-Regular';
    font-size: 24px;
    letter-spacing: 1px;
    margin-top: 20px;
`