import React, { useState, useRef, useEffect } from 'react'
import NumberContainer from '../number-container/number-container.component'
import Card from '../card/card.component'
import { GameScreenContainer, ButtonContainer } from './game-screen.styles'
import { Text, Alert } from 'react-native'
import CustomButton from '../custom-button/custom-button.component'
import { Ionicons } from '@expo/vector-icons'

const generateRandomBetween = (min, max, exclude) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    const randomNumber = Math.floor(Math.random() * (max - min)) + min;

    if (randomNumber === exclude) {
        return generateRandomBetween(min, max, exclude)
    }
    return randomNumber
}

const GameScreen = ({ userNumber, gameOverHandler }) => {

    const [currentGuess, setCurrentGuess] = useState(generateRandomBetween(1, 100, userNumber))
    const [rounds, setRounds] = useState(0);


    const currentLow = useRef(1);
    const currentHigh = useRef(100);

    useEffect(() => {
        if (currentGuess === userNumber) {
            gameOverHandler(rounds)
        }
    }, [currentGuess, userNumber, gameOverHandler])

    const nextGuessHandler = (direction) => {
        if ((direction === 'lower' && currentGuess < userNumber) || direction === 'greater' && currentGuess > userNumber) {
            Alert.alert(
                `Don't cheat!`,
                `You know this is wrong...`,
                [{ text: `try again`, style: 'cancel' }]
            )
            return;
        }
        if (direction === 'lower') {
            currentHigh.current = currentGuess
        }
        else {
            currentLow.current = currentGuess + 1
        }
        // console.log(`current bound is [${currentLow.current}, ${currentHigh.current}]`)            

        setCurrentGuess(generateRandomBetween(currentLow.current, currentHigh.current, currentGuess))
        setRounds(currentRounds => currentRounds + 1)
    }

    return (
        <GameScreenContainer>
            <Text>Opponent's Guess</Text>
            <NumberContainer>{currentGuess}</NumberContainer>
            <Card>
                <ButtonContainer>
                    <CustomButton onPress={() => nextGuessHandler('lower')}>
                        <Ionicons name="md-remove" size={24} color="white" />
                    </CustomButton>

                    <CustomButton onPress={() => nextGuessHandler('greater')}>
                        <Ionicons name="md-add" size={24} color="white" />
                    </CustomButton>
                </ButtonContainer>
            </Card>
        </GameScreenContainer>
    )
}

export default GameScreen