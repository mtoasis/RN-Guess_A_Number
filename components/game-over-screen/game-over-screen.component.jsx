import React from 'react'
import { GameOverScreenContainer, TitleText, GameOverImageContainer, BodyText } from './game-over-screen.styles'
import CustomButton from '../custom-button/custom-button.component'

const GameOverScreen = ({ guessRounds, userNumber, newGameHandler }) => {

    return (
        <GameOverScreenContainer>
            <TitleText>The Game is over</TitleText>

            <GameOverImageContainer
                source={require('../../assets/images/gameover.jpg')}
            />

            <BodyText>Number of rounds:
                <BodyText color='red' bold>{guessRounds}</BodyText>
            </BodyText>

            <BodyText>Number was:
                <BodyText color='red' bold>{userNumber}</BodyText>
            </BodyText>

            <CustomButton onPress={() => newGameHandler()} large>NEW GAME</CustomButton>

        </GameOverScreenContainer>
    )
}

export default GameOverScreen