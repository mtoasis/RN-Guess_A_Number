import React from 'react'
import {InputContainer} from './Input.styles'

const Input = ({additionalStyles, ...props}) =>(
    <InputContainer style={additionalStyles} {...props}/>
)

export default Input