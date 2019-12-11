import React from 'react'
import { TouchableOpacity } from 'react-native'
import {ButtonContainer, ButtonText} from './custom-button.styles'

const CustomButton = ({onPress, large, ...props}) => {
    return (
        <TouchableOpacity onPress={()=>onPress()}>
            <ButtonContainer>
                <ButtonText large={large}>{props.children}</ButtonText>
            </ButtonContainer>
        </TouchableOpacity>
    )
}

export default CustomButton