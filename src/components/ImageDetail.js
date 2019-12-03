import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const ImageDetail = ({ title, imageSource, imageScore }) => {
  return (
    <View>
      <Image
        source={imageSource}
      />
      <Text>{title || 'no title given'}</Text>
      <Text>{`Image Score - ${imageScore}` || 'no score given'}</Text>
    </View>
  )
}

const styles = StyleSheet.create({

})

export default ImageDetail