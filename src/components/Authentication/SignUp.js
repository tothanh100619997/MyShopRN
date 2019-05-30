import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native'


export default class SignUp extends Component {
    constructor(props){
        super(props)
        this.state={
            name:"",
            email:"",
            password:"",
            passwordR:""
        }
    }
    render() {
        const {email, password, name, passwordR} = this.state
        const {
            inputStyle,
            container,
            bigButton,
            txtButton
        } = styles;
        return (
            <View style={container} >
                <TextInput 
                    style={inputStyle}
                    placeholder="Enter your Name"
                    value={name}
                    onChangeText={text=>this.setState({name:text})}

                />
                <TextInput
                    style={inputStyle}
                    placeholder="Enter your email"
                    value={email}
                    onChangeText={text => this.setState({ email: text })}

                />
                <TextInput
                    style={inputStyle}
                    placeholder="Enter your Password"
                    value={password}
                    onChangeText={text => this.setState({ password: text })}
                    secureTextEntry={true}
                />
                <TextInput
                    style={inputStyle}
                    placeholder="Enter your Password"
                    value={passwordR}
                    onChangeText={text => this.setState({ passwordR: text })}
                    secureTextEntry={true}
                />
                <TouchableOpacity style={bigButton}>
                    <Text style={txtButton}>SIGN UP NOW</Text>
                </TouchableOpacity>
                
            </View>

        );
    }
}
3
const styles = StyleSheet.create({

    container:{
     padding:25
    },
    inputStyle:{
        borderRadius:20,
        backgroundColor:"#fff",
        fontFamily:"avenir",
        fontSize:18,
        height:46,
        paddingLeft:20,
        marginBottom:20
      
        
    },
    bigButton:{
        borderRadius: 20, 
        height: 46,       
        marginBottom: 20,
        borderWidth:1,
        borderColor:"#fff",   
        justifyContent:"center" ,
        alignItems:"center", 
        

    },
    txtButton:{
        fontFamily: "avenir",
        fontSize: 18,
        color:"#fff"
    },

});
