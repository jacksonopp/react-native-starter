import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput } from "react-native"

const TextScreen = () => {
  const [text, setText] = useState("")
  return (
    <View>
      <Text>Enter password:</Text>
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        value={text}
        onChangeText={(newValue) => setText(newValue)}
      />
      <Text>
        {text.length > 5 ? <Text>Your password is valid</Text> : <Text>Your password needs to be 5 or longer</Text>}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  input: {
    margin: 15,
    borderColor: 'black',
    borderWidth: 1
  }
})

export default TextScreen