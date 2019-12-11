import React from 'react'
import {CardContainer} from './card.styles'


const Card = ({additionalStyles, ...props}) =>(
    <CardContainer style={additionalStyles} {...props}>
        {props.children}
    </CardContainer>
)

export default Card