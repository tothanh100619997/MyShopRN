import React, { Component } from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions } from 'react-native'
import { Header } from 'react-navigation'

import IconBack from "../../../../media/appIcon/back.png"
import IconCart from "../../../../media/appIcon/cartfull.png"

import _addToCart from '../../../../api/_addToCart'
import _getCart from '../../../../api/_getCart'
import {url} from '../../../../actions/types'
import { addToCart } from '../../../../actions/index'
import {connect} from 'react-redux'
class DetailProduct extends Component {
   
    goBack = () => {
        this.props.navigation.pop()
    }
    addToCart =(product)=>{
        this.props.addToCart(product)
     
    }
    render() {
        const product = this.props.navigation.getParam('product','noProduct')
        
        const { container, wrapper, headerContainer, iconStyle,
            detailProductContainer, imageContainer, descProduct, footer,
            imageStyle, titleContainer, textTitle, textPrice } = styles
        return (
            <View style={container}>
                <View style={wrapper}>
                    <View style={headerContainer}>
                        <TouchableOpacity onPress={this.goBack}>
                            <Image style={iconStyle} source={IconBack} />
                        </TouchableOpacity>
                        <View style={{ width: 30 }}></View>
                        <TouchableOpacity onPress ={()=>this.addToCart(product)}>
                            <Image style={iconStyle} source={IconCart} />
                        </TouchableOpacity>
                        
                    </View>                    
                    <View style={detailProductContainer}>
                        <View style={imageContainer}>
                            <Image style={imageStyle} source={{uri:`${url}/${product.images[0]}`}} />
                            <Image style={imageStyle} source={{uri:`${url}/${product.images[1]}`}} />
                        </View>
                        <View style={footer}>
                            <View style={titleContainer}>
                                <Text style={textTitle}>{product.name.toUpperCase()}</Text>
                                <Text style={textPrice}> / {product.price}$</Text>
                            </View>
                            <View style={descProduct}>
                                <Text style={{ fontSize: 15, color: "gray" }}>
                                   {product.description}
                                </Text>
                            </View>
                            <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                                <Text style={{ color: "red", fontSize: 16 }}>{product.material}</Text>
                                <View style={{ flexDirection: "row", alignItems: "center" }}>
                                    <Text style={{ marginRight: 10, fontSize: 16, color: "red" }}>
                                        {product.color}
                                    </Text>
                                    <View style={{ width: 16, height: 16, borderRadius: 8, backgroundColor: "red" }}></View>
                                </View>
                            </View>
                        </View>

                    </View>

                </View>
            </View>

        )
    }
}
const mapDispatchToProps = dispatch =>{
    return{
        addToCart:(item)=>dispatch(addToCart(item))
    }
}
export default connect(null,mapDispatchToProps)(DetailProduct)
const { width } = Dimensions.get("window")
const heightHeader = Header.HEIGHT - 10
const widthImage = width / 2 - 25
const heightImage = (widthImage * 452) / 361
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#D6D6D6",
    },
    wrapper: {
        margin: 10,
        marginBottom: 5,
        flex: 1,
        backgroundColor: "#fff",
        borderRadius: 5,
        padding: 10,
    },
    headerContainer: {

        height: heightHeader,
        flexDirection: "row",
        justifyContent: "space-between",

    },
    iconStyle: {
        height: heightHeader - 20,
        width: heightHeader - 20,
    },
    detailProductContainer: {
        flex: 1,
    },
    imageContainer: {
        flex: 6,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",

    },
    descProduct: {
        borderColor: "gray",
        borderTopWidth: 1,
        paddingTop: 5,
    },
    footer: {
        flex: 5,
        justifyContent:"space-between",
    },
    imageStyle: {
        width: widthImage,
        height: heightImage,
    },
    titleContainer: {
        flexDirection: "row",
        justifyContent: "center",
        paddingVertical: 10,
    },
    textTitle: {
        fontSize: 20,
        fontWeight: "500",
        color: "#000"
    },
    textPrice: {
        fontSize: 20,
    }


})