import React, { Component } from "react";
import { View, Text, StyleSheet, Dimensions, Image, TouchableOpacity } from "react-native";

import sp1 from "../../../../media/temp/sp1.jpeg"

export default class Search extends Component {

    _goToDetail = () => {
        this.props.navigation.push("DetailProduct")

    }

    render() {
        const { container,
            listItems,
            item,
            imageStyle,
            infoContainer,
            row1,
            row2,
            row3,
            row4
        } = styles
        return (
            <View style={container}>
                <View style={listItems}>
                    <View style={item}>
                        <View style={imageStyle}>
                            <Image source={sp1} style={{ height: heightImage, width: widthImage }} />
                        </View>
                        <View style={infoContainer}>
                            <View style={row1}>
                                <Text style={{ fontSize: 20, color: "#B1B1B1" }}>Lace Sleeve Si</Text>

                            </View>
                            <View style={row2}>
                                <Text style={{ fontSize: 16, color: "#CA488A", }}>117$</Text>
                            </View>
                            <View style={row3}>
                                <Text style={{ color: "#000", fontSize: 16 }}>Material</Text>

                            </View>
                            <View style={row4}>
                                <View style={{ flexDirection: "row", alignContent: "center" }} >
                                    <Text style={{ color: "#000" }}>Color LimeGreen </Text>
                                    <View style={{ height: 20, borderRadius: 10, width: 20, backgroundColor: "blue" }}></View>
                                </View>
                                <TouchableOpacity onPress={this._goToDetail}><Text style={{ color: "#CA488A" }}>SHOW DETAILS</Text></TouchableOpacity>
                            </View>
                        </View>
                    </View>

                    <View style={item}>
                        <View style={imageStyle}>
                            <Image source={sp1} style={{ height: heightImage, width: widthImage }} />
                        </View>
                        <View style={infoContainer}>
                            <View style={row1}>
                                <Text style={{ fontSize: 20, color: "#B1B1B1" }}>Lace Sleeve Si</Text>

                            </View>
                            <View style={row2}>
                                <Text style={{ fontSize: 16, color: "#CA488A", }}>117$</Text>
                            </View>
                            <View style={row3}>
                                <Text style={{ color: "#000", fontSize: 16 }}>Material</Text>

                            </View>
                            <View style={row4}>
                                <View style={{ flexDirection: "row", alignContent: "center" }} >
                                    <Text style={{ color: "#000" }}>Color LimeGreen </Text>
                                    <View style={{ height: 20, borderRadius: 10, width: 20, backgroundColor: "blue" }}></View>
                                </View>
                                <TouchableOpacity onPress={this._goToDetail}><Text style={{ color: "#CA488A" }}>SHOW DETAILS</Text></TouchableOpacity>
                            </View>
                        </View>
                    </View>

                    <View style={item}>
                        <View style={imageStyle}>
                            <Image source={sp1} style={{ height: heightImage, width: widthImage }} />
                        </View>
                        <View style={infoContainer}>
                            <View style={row1}>
                                <Text style={{ fontSize: 20, color: "#B1B1B1" }}>Lace Sleeve Si</Text>

                            </View>
                            <View style={row2}>
                                <Text style={{ fontSize: 16, color: "#CA488A", }}>117$</Text>
                            </View>
                            <View style={row3}>
                                <Text style={{ color: "#000", fontSize: 16 }}>Material</Text>

                            </View>
                            <View style={row4}>
                                <View style={{ flexDirection: "row", alignContent: "center" }} >
                                    <Text style={{ color: "#000" }}>Color LimeGreen </Text>
                                    <View style={{ height: 20, borderRadius: 10, width: 20, backgroundColor: "blue" }}></View>
                                </View>
                                <TouchableOpacity onPress={this._goToDetail}><Text style={{ color: "#CA488A" }}>SHOW DETAILS</Text></TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
            </View>

        );
    }
}
const { height } = Dimensions.get("window")

const heightImage = height * 0.215 - 20
//361x452
const widthImage = (heightImage * 361) / 452
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        backgroundColor: "#9D9D9D",
        paddingVertical: 5,
        paddingHorizontal: 10,

    },

    listItems: {

        flex: 1,
        marginBottom: 5
    },
    item: {
        height: height * 0.215,
        backgroundColor: "#fff",
        marginBottom: 10,
        flexDirection: "row",
        paddingHorizontal: 5,
        paddingVertical: 10
    },
    imageStyle: {
        flex: 2,
        overflow: "hidden",
    },
    infoContainer: {
        flex: 5,
        marginLeft: 10,
        justifyContent: "space-between"
    },
    row1: {

    },
    row2: {

    },
    row3: {

    },
    row4: {
        flexDirection: "row",
        justifyContent: "space-between"
    }

})