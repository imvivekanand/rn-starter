import React,  { useState }  from 'react'
import {View, Text, StyleSheet, Button} from 'react-native'

const CounterScreen = () => {
    let [counter, setCounter] = useState(0)

    let increment =() => {
        setCounter (counter ++);
    }
    let decrement =() => {
        setCounter (counter --);
    }
  return (
    <View>
      <Text>Current Count: {counter}</Text>
      <Button title="+"  onPress={increment}/>
      <Button title="-" onPress={decrement}/>
    </View>
  )
}

export default CounterScreen
