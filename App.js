import React, { useState } from 'react'
import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import { greeting } from './assets/greeting'

const [ count, setCount ] = useState(0)

let randomGreeting = Math.floor(Math.random() * greeting.length)
console.log(randomGreeting)

const onButtonClick = () => {
  displayGreeting = setCount(greeting[Math.floor(Math.random() * greeting.length)])
}

const displayGreeting = greeting[randomGreeting]

const images = {
  atlantic: require('./assets/earth-11652.png'),
  asia: require('./assets/asia-australia.png')
}

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{displayGreeting.hello}</Text>
      <Image
        style={styles.image}
        source={images.atlantic}
      />
      <Text style={styles.text}>{displayGreeting.world}</Text>
      <Pressable 
        style={styles.button}
        onPress={onButtonClick}
      >
        <Text style={styles.textButton}>{displayGreeting.translate}</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    fontSize: 84,
    color: 'white',
    lineHeight: 85
  },
  image: {
    height: 180,
    width: 180
  },
  button: {
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'blue'
  },
  textButton: {
    fontSize: 32,
    lineHeight: 32,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white'
  }
})


export default App