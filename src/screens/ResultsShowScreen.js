import React, {useState, useEffect} from 'react';
import { View, Image, Text, StyleSheet, FlatList } from 'react-native';
import yelp from '../api/yelp';

//const ResultsList = (props) => {  is actually this, but destructure
// images will be empty/hidden by default, unless a style is applied
const ResultsShowScreen = ({navigation}) => {
  const [result, setResult] = useState(null);

  const id = navigation.getParam('id')
  const getResult = async (id) => {
    const response = await yelp.get(`/${id}`)
    setResult(response.data);
  };

  useEffect(() => {
    getResult(id);
  }, [])

  if (!result) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Text>{result.name}</Text>
      <FlatList data={result.photos}
      keyExtractor={(photo) => photo}
      renderItem={({item}) => {
        return <Image style={styles.imageStyle} source={{uri: item}} />
      }}
      />

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

export default ResultsShowScreen;
