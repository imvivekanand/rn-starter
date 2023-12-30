import React from "react";;
import {View, Text, StyleSheet} from 'react-native';
import ImageDetail from "../components/ImageDetail";

const ImageScreen = () => {
    return <View>
        <Text>Image Screen</Text>
        <ImageDetail title="Forest" imageSource={require("../../assets/forest.jpg")} imageScore="4"/>
        <ImageDetail title="Beach" imageSource={require("../../assets/beach.jpg")} imageScore="8"/>
        <ImageDetail title="Mountain" imageSource={require("../../assets/mountain.jpg")} imageScore="7"/>
        <ImageDetail title="Desert" imageSource={require("../../assets/desert.jpg")} imageScore="9"/>
    </View>
}

const styles = StyleSheet.create({

})

export default ImageScreen;