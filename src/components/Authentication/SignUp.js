import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, TextInput,Alert } from 'react-native'
import _register from '../../api/_register'

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
    removeEmail =()=>{
        this.setState({
            name: "",
            email: "",
            password: "",
            passwordR: ""
        })
    }
    onSuccess(){
        Alert.alert(
            'Notice',
            'Sign up successfully',
            [
                {text:'OK',onPress:()=>{
                    this.removeEmail
                    this.props.goToSignIn()
                }}
            ],
            {cancelable:false}
        )
    }
    onFail(){
        Alert.alert(
            'Notice',
            'Email has been used by other',
            [
                { text: 'OK', onPress: () => this.removeEmail.bind(this) }
            ],
            { cancelable: false }
        );
    }
    onSignUp =()=>{
        const { name, email, password } = this.state;
        _register(email, name, password)
            .then(res => {
                if (res === 'THANH_CONG') return this.onSuccess();
                this.onFail();
            });
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
                    placeholder="Enter your Password again"
                    value={passwordR}
                    onChangeText={text => this.setState({ passwordR: text })}
                    secureTextEntry={true}
                />
                <TouchableOpacity style={bigButton} onPress ={this.onSignUp}>
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
