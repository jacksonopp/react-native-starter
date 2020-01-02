import React from 'react';
import { View, Text, StyleSheet } from 'react-native'

const AlignScreen = () => {
  return (
    <>
      <View style={styles.viewStyle}>
        <Text style={styles.appStyle}>App</Text>
        <View style={styles.rowStyle}>
          <Text style={styles.redStyle}>red</Text>
          <Text style={styles.greenStyle}>green</Text>
          <Text style={styles.purpleStyle}>purple</Text>
        </View>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  viewStyle: {
    alignItems: 'center',
    borderColor: 'orange',
    borderWidth: 1,
    height: 200
  },
  rowStyle: {
    width: "100%",
    flexDirection: "row",
    justifyContent: 'space-around',
    borderWidth: 1
  },
  appStyle: {
    borderColor: 'black',
    borderWidth: 2,
    alignSelf: 'stretch',
    paddingVertical: 10,
  },
  redStyle: {
    width: 100,
    padding: 5,
    marginTop: 5,
    borderWidth: 2,
    borderColor: 'black',
    backgroundColor: 'red'
  },
  greenStyle: {
    width: 100,
    padding: 5,
    marginTop: 25,
    borderWidth: 2,
    borderColor: 'black',
    backgroundColor: 'green',
    // top: 20
  },
  purpleStyle: {
    width: 100,
    padding: 5,
    marginTop: 5,
    borderWidth: 2,
    borderColor: 'black',
    backgroundColor: 'rebeccapurple'
  },
})

export default AlignScreen;