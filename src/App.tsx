import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const diceImages: Record<number, any> = {
  1: require('./assets/dice/dice1.png'),
  2: require('./assets/dice/dice2.png'),
  3: require('./assets/dice/dice3.png'),
  4: require('./assets/dice/dice4.png'),
  5: require('./assets/dice/dice5.png'),
  6: require('./assets/dice/dice6.png'),
};

const App = () => {
  const [dice1, setDice1] = useState(1);
  const [dice2, setDice2] = useState(2);

  const rollDice = () => {
    setDice1(Math.floor(Math.random() * 6) + 1);
    setDice2(Math.floor(Math.random() * 6) + 1);
  };

  const getResult = () => {
    if (dice1 > dice2) return 'Player 1 Wins!';
    if (dice2 > dice1) return 'Player 2 Wins!';
    return 'It\'s a Draw!';
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🎲 Dice Game</Text>
      <View style={styles.diceContainer}>
        <Image source={diceImages[dice1]} style={styles.diceImage} />
        <Image source={diceImages[dice2]} style={styles.diceImage} />
      </View>
      <TouchableOpacity onPress={rollDice} style={styles.button}>
        <Text style={styles.buttonText}>Roll Dice</Text>
      </TouchableOpacity>
      <Text style={styles.resultText}>{getResult()}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  diceContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  diceImage: {
    width: 100,
    height: 100,
    marginHorizontal: 10,
  },
    button: {
    backgroundColor: '#f42708ff',
    paddingHorizontal: 30,
    paddingVertical: 15,
    borderRadius: 10,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#f42708ff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 6, 
  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
  },
  resultText: {
    fontSize: 24,
    fontWeight: '500',
    color: '#333',
  },
});

export default App;
