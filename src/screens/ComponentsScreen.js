import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const ComponentsScreen = () => {
    const greeting = ["Hi there!", 123];
    const devDetails = {
        name: "Vivek Anand",
        age: 26
    };
    const jsxVariable = <Text>I'm a JSX Variable</Text>


    return <View>
        <Text style={styles.textStyle}>Component Screen 1</Text>
        <Text>{greeting}</Text>
        <Text style={styles.textXl}>{devDetails.name}</Text>
        <Text>{devDetails.age}</Text>
        {jsxVariable}
    </View>
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 30,
    },
    textXl:{
        fontSize: 45,
    }
})

export default ComponentsScreen
