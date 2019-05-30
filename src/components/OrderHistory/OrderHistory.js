import React, { Component } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Dimensions, Image } from "react-native";


import IconBack from '../../media/appIcon/backs.png'


export default class OrderHistory extends Component {
    _goBackHome = () => {
        this.props.navigation.goBack()
    }
    render() {
        const { rowInfo,
            container,
            headerContainer,
            iconStyle,
            textHeaderStyle,
            body,
            orderRow,
            textBold,
            textValueId,
            textPrice,
            textDate
        } = styles
        return (
            <View style={container}>
                <View style={headerContainer}>
                    <View></View>
                    <Text style={textHeaderStyle}>Order History</Text>
                    <TouchableOpacity onPress={this._goBackHome} style={iconStyle}>
                        <Image style={iconStyle} source={IconBack} />
                    </TouchableOpacity>
                </View>
                <View style={body}>
                    <View style={orderRow}>
                        <View style={rowInfo}>
                            <Text style={textBold}>Order id:</Text>
                            <Text style={textValueId}>ORD15</Text>
                        </View>
                        <View style={rowInfo}>
                            <Text style={textBold}>Order time:</Text>
                            <Text style={textDate}>2017-04-19 08:30:13</Text>
                        </View>
                        <View style={rowInfo}>
                            <Text style={textBold}>Status:</Text>
                            <Text style={textValueId}>Pending</Text>
                        </View>
                        <View style={rowInfo}>
                            <Text style={textBold}>Total:</Text>
                            <Text style={textPrice}>392$</Text>
                        </View>
                    </View>
                    <View style={orderRow}>
                        <View style={rowInfo}>
                            <Text style={textBold}>Order id:</Text>
                            <Text style={textValueId}>ORD15</Text>
                        </View>
                        <View style={rowInfo}>
                            <Text style={textBold}>Order time:</Text>
                            <Text style={textDate}>2017-04-19 08:30:13</Text>
                        </View>
                        <View style={rowInfo}>
                            <Text style={textBold}>Status:</Text>
                            <Text style={textValueId}>Pending</Text>
                        </View>
                        <View style={rowInfo}>
                            <Text style={textBold}>Total:</Text>
                            <Text style={textPrice}>392$</Text>
                        </View>
                    </View>
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
    },
    orderRow: {
        height: width / 3,
        backgroundColor: "#fff",
        borderRadius: 5,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation: 10,
        justifyContent: "space-around",
        padding: 10,
        marginBottom:20



    },
    rowInfo: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    textBold: {
        fontSize: 18,
        fontFamily: "Avenir",
        fontWeight: "500",
        color: "#999999",
    },
    textValueId: {
        fontSize: 16,
        color: "#29B998"
    },
    textPrice: {
        color: "#CB4F8C",
        fontSize: 18,
        fontWeight: "500"

    },
    textDate: {
        color: "#CB4F8C",
        fontSize: 16
    }

})