import React, * as react from "react";
import { View, Text, StyleSheet, Dimensions, Image, TouchableOpacity, FlatList } from "react-native";

const url = "http://192.168.1.18:8888/api/images/product"
export default class TopProduct extends react.Component {
    _goToDetailScreen = (product) => {
        this.props.nav.push("DetailProduct", { product })
    }
    render() {
        const { products } = this.props
        const { container, titleContainer, title } = styles;
        return (
            <View style={container}>
                <View style={titleContainer}>
                    <Text style={title}>TOP PRODUCT</Text>
                </View>
                <FlatList

                    horizontal={false}
                    numColumns={2}
                    data={products}
                    keyExtractor={(item) => item.id}
                    columnWrapperStyle={styles.body}
                    renderItem={({ item }) => (
                        <TouchableOpacity onPress={() => this._goToDetailScreen(item)} style={styles.productContainer}>
                            <Image source={{ uri: `${url}/${item.images[0]}` }} style={styles.productImage} />
                            <Text style={styles.produceName}>{item.name.toUpperCase()}</Text>
                            <Text style={styles.producePrice}>{item.price}$</Text>
                        </TouchableOpacity>

                    )}
                />
            </View>
        );
    }


}

//933 x 465
const { width } = Dimensions.get("window");
//361 452
const imageWidth = width / 2 - 30
const ImageHeight = (imageWidth / 361) * 452
const styles = StyleSheet.create({
    container: {
        width: width - 20,
        backgroundColor: "#FFFFFF",
        padding: 10,
        margin: 10,
        //its for ios
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.2,
        //its for android
        elevation: 10,
        borderRadius: 10
    },
    titleContainer: {
        height: 30,
        justifyContent: "center"
    },
    title: {
        fontSize: 20,
        color: "#AFAEAF",
        fontWeight: '500'
    },
    productContainer: {
        width: imageWidth,
        overflow: 'hidden',
        //its for ios
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.3,
        shadowRadius: 10,
        //its for android
        elevation: 10,
        backgroundColor: "white",
        borderRadius: 10,
        margin: 5,
        justifyContent: "space-between",
        paddingHorizontal: 5,
        paddingVertical: 10
    },
    body: {
        // flexDirection: "row",
        // flexWrap: "wrap",
        //justifyContent: "space-between",
        //backgroundColor:"blue",

    },
    productImage: {
        width: imageWidth - 10,
        height: ImageHeight,
        borderRadius: 10,
    },
    produceName: {
        fontSize: 18,
        color: "#AFAEAF",
        marginVertical: 5,
        paddingLeft: 10,
        fontFamily: 'Avenir',
        fontWeight: '400'
    },
    producePrice: {
        fontSize: 18,
        color: "#C82862",
        marginLeft: 10,
        fontFamily: 'Avenir',
    }

});
