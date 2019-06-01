import React, { Component } from "react";
import { View } from "react-native";

import BottomTab from "./BottomTab";
import Header from  './Header'
import getToken from '../../api/getToken'
import checkLogin from '../../api/checkLogin'
import {logged} from '../../actions'
import {connect} from 'react-redux'
 class Main extends Component {
  
  _onOpen =()=>{
    this.props.navigation.openDrawer()
  }
  componentDidMount() {
    getToken()
      .then(token => checkLogin(token))
      .then(res=>this.props.sendUser(res.user)) 
      .catch(err => console.log('LOI CHECK LOGIN', err));
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
const mapDispatchToProps = dispatch =>{
 
    return{
      sendUser: (user) => dispatch(logged(user))
    }
  
}
export default connect(null,mapDispatchToProps)(Main)