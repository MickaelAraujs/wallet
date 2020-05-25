import styled from 'styled-components/native'
import { getStatusBarHeight } from 'react-native-status-bar-height'

export const DrawerButton = styled.TouchableOpacity`
    position: absolute;
    top: ${props => !props.register ? 16 : -10}px;
    left: ${props => !props.register ? 16 : -10}px;
    margin-top: ${0 + getStatusBarHeight()}px;
`