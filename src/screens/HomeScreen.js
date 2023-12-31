import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({navigation}) => {
  return <View>
    
    <Text style={styles.text}>Vivek Anand</Text>
    <Button 
    onPress={()=> navigation.navigate("Components")}
    title="Go to components Demo"/>

    <Button
    title="Go to List Demo"
    onPress={() => navigation.navigate("List")}
    />

    <Button
    title="Go to ImageScreen Demo"
    onPress={() => navigation.navigate("Image")}
    />

    <Button
    title="Go to CounterScreen Demo"
    onPress={() => navigation.navigate("Counter")}
    />

<Button
    title="Go to ColorScreen Demo"
    onPress={() => navigation.navigate("Color")}
    />

    {/* <TouchableOpacity
    onPress={()=>props.navigation.navigate("List")}>
      <Text>Go To List Demo</Text>
    </TouchableOpacity> */}

    </View>
};


// const HomeScreen = (props) => {
//   console.log(props);
//   return <View>
    
//     <Text style={styles.text}>Vivek Anand</Text>
//     <Button 
//     onPress={()=> props.navigation.navigate("Components")}
//     title="Go to components Demo"/>

//     <Button
//     title="Go to List Demo"
//     onPress={() => props.navigation.navigate("List")}
//     />

//     {/* <TouchableOpacity
//     onPress={()=>props.navigation.navigate("List")}>
//       <Text>Go To List Demo</Text>
//     </TouchableOpacity> */}

//     </View>
// };

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;