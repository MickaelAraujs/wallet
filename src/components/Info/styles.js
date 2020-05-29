import styled from 'styled-components/native'

export const InfoContainer = styled.View`
   margin: 5px;
`

export const Row = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: baseline;
`

export const BadgeContainer = styled.View`
    flex-direction: row;
    align-items: baseline;
`

export const Badge = styled.TouchableOpacity`
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    width: 75px;
    background: ${props => props.type === 'gasto' ? '#E71A1A ': '#01933B'};
    border-radius: 5px;
    margin-left: 10px;
    padding: 5px;
`

export const BadgeText = styled.Text`
    font-weight: bold;
    color: #F3F3F3;
`

export const Value = styled.Text`
    font-size: 18px;
    font-family: 'Roboto-Bold';
    margin-left: 10px;
`

export const Date = styled.Text`
    font-size: 16px;
    font-family: 'Roboto-LightItalic';
    color: #7C7878;
    margin-right: 10px;
`

export const Comment = styled.Text`
    margin-left: 10px;
    margin-top: 10px;
    color: #7C7878;
    font-style: italic;
`