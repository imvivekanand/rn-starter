import React from 'react';
import {Text, StyleSheet} from 'react-native';

const ComponentsScreen = () => {
  return (
    <div>
      <Text style={styles.textStyle}>Component Screen 1</Text>;
    </div>
  )
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 30,

    }
})

export default ComponentsScreen
