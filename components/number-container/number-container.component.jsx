import React from 'react'
import {NumberContainerBox, NumberText} from './number-container.styles'

const NumberContainer = props =>{

    return(
        <NumberContainerBox>
            <NumberText>{props.children}</NumberText>
        </NumberContainerBox>
    )
}

export default NumberContainer