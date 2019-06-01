import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native'
import saveToken from '../../api/saveToken'
import _login from '../../api/_login'
import {connect} from 'react-redux'
import { logged } from '../../actions';

class SignIn extends Component {
    constructor(props){
        super(props)
        this.state={
            email:"",
            password:""
        }
    }
    onSignIn =()=>{
        const { email, password } = this.state;
        _login(email, password)
            .then(res => {     
                this.props.goBack();          
                this.props.openDraw();
                this.props.sendUser(res.user)
                saveToken(res.token);
            })
            .catch(err => console.log(err));
    }
    render() {
       
        const {email, password} = this.state
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
                    placeholder="Enter your email"
                    value={email}
                    onChangeText={text=>this.setState({email:text})}

                />
                <TextInput
                    style={inputStyle}
                    placeholder="Enter your Password"
                    value={password}
                    onChangeText={text => this.setState({ password: text })}
                    secureTextEntry={true}
                />
                <TouchableOpacity  style={bigButton} onPress = {this.onSignIn}>
                    <Text style={txtButton}>SIGN IN NOW</Text>
                </TouchableOpacity>
                
            </View>

        );
    }
}
const mapDispatchToProps = dispatch=>{
    return{
        sendUser: (user) => dispatch(logged(user))
    }
}
export default connect(null,mapDispatchToProps)(SignIn)
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
