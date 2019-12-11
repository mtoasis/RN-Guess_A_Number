import React, { useState } from 'react'
import {
    StartGameScreenContainer,
    ButtonViewContainer,
    TitleContainer,
    ButtonContainer

} from './start-game-screen.styles'
import {
    Text,
    Button,
    TouchableWithoutFeedback,
    Keyboard,
    Alert,
} from 'react-native'
import Card from '../card/card.component'
import { colors } from '../../theme/colors'
import Input from '../Input/Input.component'
import NumberContainer from '../number-container/number-container.component'
import CustomButton from '../custom-button/custom-button.component'


const StartGameScreen = ({ startGameHandler }) => {

    const [enteredNumber, setEnteredValue] = useState('')
    const [confirmed, setConfirmed] = useState(false)
    const [selectedNumber, setSelectedNumber] = useState('')

    const numberInputHandler = (inputText) => {
        setEnteredValue(inputText.replace(/[^0-9]/g, ''))
    }

    const dismissKeyboard = () => {
        Keyboard.dismiss()
    }

    const resetInputHandler = () => {
        setEnteredValue("")
    }

    const confirmInputHandler = () => {
        const chosenNumber = parseInt(enteredNumber);
        if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
            Alert.alert(
                'Invalid number',
                `Number has to be a number between 1 and 99`,
                [{ text: 'Okay', style: 'destructive', onPress: resetInputHandler }])
            return;
        }
        setConfirmed(true)
        setSelectedNumber(parseInt(enteredNumber))
        resetInputHandler()
        Keyboard.dismiss()
    }


    return (
        <TouchableWithoutFeedback onPress={() => dismissKeyboard()} >
            <StartGameScreenContainer>
                <TitleContainer>Start a New Game!</TitleContainer>

                <Card>
                    <Text>
                        Select a Number
                </Text>

                    <Input
                        additionalStyles={
                            {
                                width: 50,
                                textAlign: 'center'
                            }
                        }
                        blurOnSubmit
                        autoCapitalize='none'
                        autoCorrect={false}
                        keyboardType="number-pad"
                        maxLength={2}
                        onChangeText={(inputText) => numberInputHandler(inputText)}
                        value={enteredNumber}
                    />
                    <ButtonViewContainer>

                        <ButtonContainer>
                            <Button title="Reset" onPress={resetInputHandler} color={colors.subColor} />
                        </ButtonContainer>

                        <ButtonContainer>
                            <Button title="Confirm" onPress={confirmInputHandler} color={colors.primary} />
                        </ButtonContainer>

                    </ButtonViewContainer>

                </Card>

                {
                    selectedNumber ?
                        <Card
                            additionalStyles={
                                {
                                    marginTop: 20,
                                    width: 'auto'
                                }
                            }
                        >
                            <Text>You selected</Text>
                            <NumberContainer>
                                {selectedNumber}
                            </NumberContainer>

                            <CustomButton
                                onPress={() => startGameHandler(selectedNumber)}
                                large
                            >
                                START GAME
                            </CustomButton>
                        </Card>
                        : null
                }

            </StartGameScreenContainer>
        </TouchableWithoutFeedback>
    )
}



export default StartGameScreen