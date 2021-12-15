import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default class MostCommonSurname extends React.Component {
  render() {
    return (
      <View style={styles.bg }>
        <Text style={styles.text}>
          {
            'Top Ten Most Common Surname In The World:\n \n 1.SMITH \n 2.JHONSON \n 3.WILLIAMS \n 4.JONES \n 5.BROWN \n 6.DAVIS \n 7.MILLER \n 8.WILSON \n 9.MOORE \n 10.TAYLOR '
          }
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    color: '#A249FA',
    textAlign: 'center',
    textAlignVertical: "middle"
  },
  bg: {
    flex: 1,
    backgroundColor: '#343434'
  }
});
