import React from 'react'
import { View, Text } from 'react-native'
import { HeaderContainer, HeaderTitleContainer } from './header.styles'


const Header = ({ title }) => {

    return (
        <HeaderContainer>
            <HeaderTitleContainer>
                {title}
            </HeaderTitleContainer>
        </HeaderContainer>
    )
}

export default Header