import React, * as react from "react";
import { View, Text, StyleSheet, Dimensions, Image } from "react-native";

import bannerImage from "../../../../media/temp/banner.jpg";
const { width, height } = Dimensions.get("window");
//411
//683
export default class Collection extends react.Component {
  render() {
    const { container, titleContainer, body, collectionImage, title } = styles;
    return (
      <View style={container}>
        <View style={titleContainer}>
          <Text style={title}>SPRING COLLECTION</Text>
        </View>
        <View style={body}>
          <Image style={collectionImage} source={bannerImage} />
        </View>
      </View>
    );
  }
}
//933 x 465
const imageWidth = width - 40;
const imageHeight = (imageWidth / 933) * 465;

const styles = StyleSheet.create({
  container: {
    width:width-20,
    backgroundColor: "#FFFFFF",
    padding: 10,
    margin: 10,
    //its for ios
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.2,
    //its for android
    elevation: 5,
    position: "relative"
  },
  titleContainer: {
    height:40,
    justifyContent: "center"
  },
  body: {
  
    justifyContent:'flex-end'
  },
  collectionImage: {
    width: imageWidth,
    height: imageHeight
  },
  title: {
    fontSize: 20,
    color: "#AFAEAF",
    fontWeight: '500'

  }
});
