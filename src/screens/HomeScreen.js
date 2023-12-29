import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = () => {
  return <View>
    <Text style={styles.text}>Vivek Anand</Text>
    <Button 
    onPress={()=>console.log('Button Pressed')}
    title="Go to components Demo"/>

    <TouchableOpacity></TouchableOpacity>
    </View>
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;