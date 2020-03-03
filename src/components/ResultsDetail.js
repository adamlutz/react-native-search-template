import React from 'react';
import { View, Image, Text, StyleSheet, FlatList } from 'react-native';


//const ResultsList = (props) => {  is actually this, but destructure
// images will be empty/hidden by default, unless a style is applied
const ResultsDetail = ({result}) => {
  return (
    <View style={styles.container}>
      <Text>{result.name}</Text>
      <Image style={styles.imageStyle} source={{ uri: result.image_url}} />
      <Text>{result.rating} Stars, {result.review_count} Reviews</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginLeft: 15
  },
  titleStyle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  imageStyle : {
    width: 250,
    height: 120,
    borderRadius: 4,
    marginBottom: 5
  }
})

export default ResultsDetail;
