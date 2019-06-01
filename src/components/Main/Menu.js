import React, { Component } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image, Dimensions } from "react-native";
import profile from '../../media/temp/avatar.jpg'
import {logged} from '../../actions'
import {connect} from 'react-redux'
import saveToken from '../../api/saveToken'
class Menu extends Component {
    
    componentDidMount() {
        //  this.props.navigation.openDrawer()
    }
    _goToOrderHistory =() =>{
      this.props.navigation.navigate("OrderHistory")
    }
    _goToChangeInfo =()=>{
       this.props.navigation.navigate("ChangeInfo")
    }
    _onSignOut =()=>{
      this.props.sendUser(null)
      saveToken("")
    }
    _gotoAuthentication =()=>{
        this.props.navigation.navigate("Authentication")
    }
    render() {
       const {user} = this.props
        
        const { container,
            profileContainer,
            loginContainer,
            avatarProfile,
            userNameText,
            btnLogin,
            textLogin,
            logoutContainer,
            btnLogOut } = styles
        let loginJsx = (
            <View style={loginContainer}>
                <TouchableOpacity onPress={this._goToOrderHistory} style={btnLogin} underlayColor="white">
                    <Text style={textLogin}>
                        Order History
                            </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={this._goToChangeInfo} style={btnLogin} underlayColor="white">
                    <Text style={textLogin}>
                        Change Info
                            </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress ={this._onSignOut} style={btnLogin} underlayColor="white">
                    <Text style={textLogin}>
                        Sign out
                            </Text>
                </TouchableOpacity>
            </View>
        )
        let logoutJsx = (
            <View style={logoutContainer}>
                <TouchableOpacity onPress={this._gotoAuthentication} style={btnLogOut} underlayColor="white">
                    <Text style={textLogin}>
                        SIGN IN
                    </Text>
                </TouchableOpacity>
            </View>
        )
        return (
            <View style={container}>
                <View style={profileContainer}>
                    <Image source={profile} style={avatarProfile} />
                    <Text style={userNameText}>{user ? user.name : ""}</Text>
                </View>
                {user ? loginJsx :logoutJsx }

            </View>
        );
    }
}
const mapDispatchToProps = dispatch => {
    return {
        sendUser: (user) => dispatch(logged(user))
    }
}
const mapStateToProps =state =>{
    return{
        user:state.loginReducer
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Menu)
const widthMenu = Dimensions.get("window").width * 0.6
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#2ABA99",
    },
    profileContainer: {

        flex: 1,
        alignItems: "center",
    },
    loginContainer: {
        flex: 1,
        alignItems: "center",
    }, logoutContainer: {
        flex:3,
        alignItems: "center",
       
    },

    avatarProfile: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginVertical: 20,
    },
    userNameText: {
        color: "#fff",
        fontSize: 18,
    },
    btnLogin: {
        backgroundColor: "#fff",
        width: widthMenu - 20,
        height: widthMenu / 5,
        justifyContent: "center",
        paddingLeft: 10,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.2,
        elevation: 10,
        marginBottom: 10

    },
    textLogin: {
        color: "#2ABA99",
    },
    btnLogOut:{
        backgroundColor: "#fff",
        width: widthMenu - 30,
        height: widthMenu / 5,
        justifyContent: "center",
        alignItems:"center",
        paddingLeft: 10,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.2,
        elevation: 10,
        marginBottom: 10
    },

})