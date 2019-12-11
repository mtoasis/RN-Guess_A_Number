import styled from 'styled-components'

export const GameOverScreenContainer = styled.View`
    flex:1;
    justify-content:center;
    align-items:center;
`

export const TitleText = styled.Text`
    font-size:20px;
    margin: 10px 0;
    font-family: 'open-sans-bold';
`
export const GameOverImageContainer = styled.Image`
    width:80%;
    height:300px;
`
export const BodyText = styled.Text`
    font-size:20px;
    font-family: ${({bold})=>bold? 'open-sans-bold': 'open-sans'};
    color: ${({color})=>color? color: `black`};
`