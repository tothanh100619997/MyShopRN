import React, { Component } from 'react'
import { View, Text, StyleSheet, Image, Dimensions, TouchableOpacity, TextInput } from 'react-native'

import IconBack from '../../media/appIcon/back_white.png'
import IconLogo from '../../media/appIcon/ic_logo.png'

import SignIn from "./SignIn"
import SignUp from "./SignUp"


export default class Authentication extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isSignIn: true
        }
    }
    _goToSignIn =()=>{
        this.setState({
            isSignIn:true
        })
    }
    _goToSignUp =()=>{
        this.setState({
            isSignIn: false
        })
    }
    _goBackHome =()=>{
        this.props.navigation.goBack()
    }
    render() {
        const { isSignIn } = this.state
        const {
            headerContainer,
            iconStyle,
            textHeaderStyle,
            container,
            footerControl,
            btnSignIn,
            btnSignUp,
            textActive,
            textInActive
        } = styles;
        let bodyJSX = isSignIn ? <SignIn  /> : <SignUp  />
        return (
            <View style={container}>

                <View style={headerContainer}>
                    <TouchableOpacity onPress={this._goBackHome} style={iconStyle}>
                        <Image style={iconStyle} source={IconBack} />
                    </TouchableOpacity>
                    <Text style={textHeaderStyle}>Wearing a Dress</Text>
                    <Image style={iconStyle} source={IconLogo} />
                </View>
                {bodyJSX}
                <View style={footerControl}>
                    <TouchableOpacity onPress={this._goToSignIn} style={btnSignIn}>
                        <Text style={isSignIn?textActive:textInActive}>SIGN IN</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this._goToSignUp} style= {btnSignUp}>
                        <Text style={isSignIn ? textInActive : textActive}>SIGN UP</Text>
                    </TouchableOpacity>
                </View>

            </View>

        );
    }
}
const { width, height } = Dimensions.get("window");
//411
//683
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#29B998",
        padding: 10,
        justifyContent: "space-between"
    },
    headerContainer: {

        height: height / 8,
        justifyContent: "space-around",
        flexDirection: "row",
        padding: 10,
        justifyContent: "space-between"
    },

    iconStyle: {
        width: width / 12,
        height: width / 12
    },
    textHeaderStyle: {
        color: "#FCFDFD",
        fontSize: 24,
        fontWeight: "bold",
        fontFamily: "avenir"

    },
   
    footerControl: {
        margin:25,
        flexDirection:"row",
        alignSelf:"stretch",
        height:46,
      
    },
    btnSignIn:{
        backgroundColor:"#fff",
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        borderTopLeftRadius:20,
        borderBottomLeftRadius:20,
        marginRight:1
    },
    btnSignUp:{
        backgroundColor: "#fff",
        flex:1,
        justifyContent: "center",
        alignItems: "center",
        borderTopRightRadius: 20,
        borderBottomRightRadius: 20,
        marginLeft:1
    },
    textActive:{
        color:"#29B998",
        fontFamily:"avenir",
        fontSize:18,
    },
    textInActive:{
        color:"#787878",
        fontFamily: "avenir",
        fontSize: 18,
    }
});
