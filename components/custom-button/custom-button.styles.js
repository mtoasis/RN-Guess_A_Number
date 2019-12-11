import styled from 'styled-components'
import {colors} from '../../theme/colors'

export const ButtonContainer = styled.View`
    background-color:${colors.primary};
    padding: 10px 20px;
    border-radius:20px;
`

export const ButtonText = styled.Text`
    color: white;
    font-family:'open-sans';
    font-size:${({large})=>large? '18px':'12px'};    
`