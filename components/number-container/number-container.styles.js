import styled from 'styled-components'
import {colors} from '../../theme/colors'

export const NumberContainerBox = styled.View`
    border-width: 2px;
    border-color: ${colors.subColor};
    border-radius:10px;
    padding:10px;
    margin: 10px 0;
    align-items:center;
    justify-content:center;
`

export const NumberText = styled.Text`
    color: ${colors.subColor};
    font-size:22px;    
`