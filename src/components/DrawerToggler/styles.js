import styled from 'styled-components/native'
import { getStatusBarHeight } from 'react-native-status-bar-height'

export const DrawerButton = styled.TouchableOpacity`
    position: absolute;
    top: 16px;
    left: 16px;
    margin-top: ${0 + getStatusBarHeight()}px;
`