import React, { useReducer } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';

const reducer = (state, action) => {
  // state === {counter: number}
  // action === {type: change_counter, payload: number}
  switch (action.type) {
    case 'incr':
      return { ...state, counter: state.counter + action.payload }
    case 'decr':
      return { ...state, counter: state.counter - action.payload }
    default:
      return state
  }
}

const AMMOUNT = 10

const CounterScreen = () => {
  const [state, dispatch] = useReducer(reducer, { counter: 0 })
  const { counter } = state

  return (
    <View>
      <Button
        title="Increase"
        onPress={() => { dispatch({ type: "incr", payload: AMMOUNT }) }}
      />
      <Button
        title="Decrease"
        onPress={() => { dispatch({ type: "decr", payload: AMMOUNT }) }}

      />
      <Text>Current Count:</Text>
      <Text>{counter}</Text>
    </View>
  )
}

const styles = StyleSheet.create({})

export default CounterScreen