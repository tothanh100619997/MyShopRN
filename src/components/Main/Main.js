import React, { Component } from "react";
import { View } from "react-native";

import BottomTab from "./BottomTab";
import Header from  './Header'



export default class Main extends Component {
  
  _onOpen =()=>{
    this.props.navigation.openDrawer()
  }
  render() {
    
    return (
      <View style={{ flex: 1 }}>
        <Header onOpen= {this._onOpen} />
        <BottomTab  />
      </View>
      
    );
  }
}
