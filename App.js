import React, { useState } from 'react';
import * as Font from 'expo-font'
import { AppLoading } from 'expo'

import Header from './components/header/header.component'
import { AppContainer } from './App.styles'
import StartGameScreen from './components/start-game-screen/start-game-screen.component'
import GameScreen from './components/game-screen/game-screen.component'
import GameOverScreen from './components/game-over-screen/game-over-screen.component'

//fetching fonts
const fetchFonts = () => {
  return Font.loadAsync({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
  });
};

const App = () => {

  const title = "Guess A Number"
  const [userNumber, setUserNumber] = useState(null);
  const [guessRounds, setGuessRounds] = useState(0)
  const [dataLoaded, setDataLoaded] = useState(false)

  //Loading all data needed to initialize the app.
  if (!dataLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setDataLoaded(true)}
        onError={(error)=>console.log(error)}
      />)
  }

  const startGameHandler = (selectedNumber) => {
    setUserNumber(selectedNumber);
    setGuessRounds(0);
  }

  const gameOverHandler = (numberOfRounds) => {
    setGuessRounds(numberOfRounds);
  }

  const newGameHandler = () => {
    setGuessRounds(0)
    setUserNumber(null)
  }

  const Contents = () => {
    if (userNumber && guessRounds <= 0) {
      return (
        <GameScreen
          userNumber={userNumber}
          gameOverHandler={gameOverHandler}
        />
      )
    }
    else if (guessRounds > 0) {
      return (
        <GameOverScreen
          guessRounds={guessRounds}
          userNumber={userNumber}
          newGameHandler={newGameHandler}
        />
      )
    }
    return (
      <StartGameScreen
        startGameHandler={startGameHandler}
      />
    )
  }

  return (
    <AppContainer>
      <Header title={title} />
      <Contents />
    </AppContainer>
  );
}

export default App
