import React, { Component } from "react";
import { View, TextInput, Text, TouchableOpacity, StyleSheet, Dimensions, Image } from "react-native";


import IconBack from '../../media/appIcon/backs.png'


export default class ChangeInfo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "Nguyen Thanh To",
            address: " 226/3 Linh Xuan, Thu Duc",
            phoneNumber: "0358983660",
           
        }
    }
    _goBackHome = () => {
        this.props.navigation.goBack()
    }
    render() {
        const { name, address, phoneNumber } = this.state
        const {
            container,
            headerContainer,
            iconStyle,
            textHeaderStyle,
            body,
            inputStyle,
            bigButton,
            txtButton

        } = styles
        return (
            <View style={container}>
                <View style={headerContainer}>
                    <View></View>
                    <Text style={textHeaderStyle}>User Information</Text>
                    <TouchableOpacity onPress={this._goBackHome} style={iconStyle}>
                        <Image style={iconStyle} source={IconBack} />
                    </TouchableOpacity>
                </View>
                <View style={body}>
                    <TextInput
                        style={inputStyle}
                        placeholder="Enter your  Name"
                        value={name}
                        onChangeText={text => this.setState({ name: text })}

                    />
                    <TextInput
                        style={inputStyle}
                        placeholder="Enter your address"
                        value={address}
                        onChangeText={text => this.setState({ address: text })}

                    />
                    <TextInput
                        style={inputStyle}
                        placeholder="Enter your number phone"
                        value={phoneNumber}
                        onChangeText={text => this.setState({ placeholder: text })}
                        
                    />
                   
                    <TouchableOpacity style={bigButton}>
                        <Text style={txtButton}>CHANGE YOUR INFORMATION</Text>
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
        backgroundColor: "#F2F2F2",
       
    },
    headerContainer: {

        height: height / 8,
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
        padding: 10,
        backgroundColor: "#29B998",
    },

    iconStyle: {
        width: width / 12,
        height: width / 12
    },
    textHeaderStyle: {
        color: "#FCFDFD",
        fontSize: 24,
        fontWeight: "bold",
        fontFamily: "avenir",

    },
    body: {
        flex: 1,
        padding: 10,
        justifyContent: "center"
    },
    inputStyle: {
        borderRadius: 20,
        borderColor:"#29B998",
        borderWidth:1,
        backgroundColor: "#fff",
        fontFamily: "avenir",
        fontSize: 18,
        height: 46,
        paddingLeft: 20,
        marginBottom: 20


    },
    bigButton: {
        borderRadius: 20,
        height: 46,
        marginBottom: 20,        
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#29B998",


    },
    txtButton: {
        fontFamily: "avenir",
        fontSize: 18,
        color: "#fff"
    },

})