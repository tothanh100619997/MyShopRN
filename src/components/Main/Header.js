import React, { Component } from "react";
import { View, Text, TouchableOpacity, Dimensions ,StyleSheet, Image, TextInput} from "react-native";

import IconMenu from '../../media/appIcon/ic_menu.png'
import IconLogo from '../../media/appIcon/ic_logo.png'



export default class Header extends Component {
  render() {
      
      const {
        wrapper,
        row1,
        row2,
        iconStyle,
        textStyle,
        inputStyle
      } = styles;
    return (
      <View style={wrapper}>
        <View style={row1}>
          <TouchableOpacity onPress={this.props.onOpen}>
            <Image style={iconStyle} source={IconMenu} />
          </TouchableOpacity>
          <Text style={textStyle}>Wearing a Dress</Text>
          <Image style={iconStyle} source={IconLogo} />
        </View>
        <View style={row2}>
            <TextInput 
               style={inputStyle}
               placeholder="Bạn muốn mua gì nào?" 
            />
        </View>
      </View>
    );
  }
}
const { width, height } = Dimensions.get("window");
//411
//683
const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: "#29B998",
    height: height / 8,
    justifyContent: "space-around",
    padding: 10
  },
  row1: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  row2: {},
  iconStyle: {
    width: width / 14,
    height: width / 14
  },
  textStyle: {
    color: "#FCFDFD",
    fontSize: 24,
    fontWeight: "bold",
    fontFamily: "avenir"
    
  },
  inputStyle: {
    height: width / 14,
    backgroundColor: "#FFFFFF",
    padding:5
   
  }
});
