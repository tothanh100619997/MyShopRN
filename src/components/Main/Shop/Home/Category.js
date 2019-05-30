import React, * as react from "react";
import { View, Text, StyleSheet, Dimensions, ImageBackground, TouchableOpacity } from "react-native";
import Swiper from 'react-native-swiper'


const { width } = Dimensions.get("window");
//411
//683
const url = "http://192.168.1.18:8888/api/images/type"
export default class Category extends react.Component {
    _goToListProductScreen = (id) => {
        this.props.nav.push("ListProduct",{id})
        
    }
    render() {
        const { types } = this.props
        const { container, titleContainer, body, title } = styles;
        return (
            <View style={container}>
                <View style={titleContainer}>
                    <Text style={title}>LIST OF CATEGORY</Text>
                </View>
                <View style={body}>
                    <Swiper autoplay={true} width={imageWidth} height={imageHeight}>
                        {this.showImages(types)}
                    </Swiper>
                </View>
            </View>
        );
    }

showImages = (types) => {
    let jsx = <View></View>// image default    
    if (types.length > 0) {
    
        jsx = types.map(type => {
            return (
                <TouchableOpacity key={type.id} onPress={()=>this._goToListProductScreen(type.id)}>
                    <ImageBackground
                        source={{ uri: `${url}/${type.image}` }}
                        style={styles.categoryImage}>
                        <Text style={styles.insideImageCategory}>{type.name}</Text>
                    </ImageBackground>
                </TouchableOpacity>
            )
        })
    }
    return jsx
}
}

//800 x 400const 
const imageWidth = width - 40
const imageHeight = imageWidth / 2
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
    },
    titleContainer: {
        height: 40,
        justifyContent: "center"
    },
    body: {

        justifyContent: 'flex-end',
        overflow: "hidden"
    },
    categoryImage: {
        width: imageWidth,
        height: imageHeight,
        justifyContent: "center",
        alignItems: "center",
    },
    title: {
        fontSize: 20,
        color: "#AFAEAF",
        fontWeight: '500'
    },
    insideImageCategory: {
        fontSize: 30,
        color: "#AFAEAF",
        fontWeight: "bold",
    }
});
