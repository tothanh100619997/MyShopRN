import React, { Component } from 'react'
import { View,ScrollView,FlatList, Text, StyleSheet, Dimensions, TouchableOpacity, Image } from 'react-native'

import IconBack from "../../../../media/appIcon/backList.png"


import _getListProduct from '../../../../api/_getListProduct'


const url = "http://192.168.1.18:8888/api/images/product"

export default class ListProduct extends Component {
    constructor(props){
        super(props)
        this.state ={
            listProduct:[]
        }
    }
    goBack = () => {
        this.props.navigation.pop()
    }
    goToDetail = (item) => {
        this.props.navigation.push("DetailProduct",{product:item})
    }
    componentDidMount(){
        const id = this.props.navigation.getParam('id', 'NO-ID')
        _getListProduct(id)
        .then(dataJson=>{
            this.setState({
                listProduct:dataJson
            })
        })        
    }
    
    render() {
        const {listProduct}= this.state
        
        const { container, wrapper, header, IconBackStyle, titleStyle,
            } = styles
        return (
            <View style={container}>
                <ScrollView style={wrapper}>
                    <View style={header}>
                        <TouchableOpacity style={IconBackStyle} onPress={this.goBack}>
                            <Image style={IconBackStyle} source={IconBack} />
                        </TouchableOpacity>
                        <Text style={titleStyle}>Party Dress</Text>
                        <View style={{ width: 30 }} />
                    </View>
                    {this.showListProduct(listProduct)}
                </ScrollView>
            </View>
        )
    }
    showListProduct=(products)=>{
        let jsx = <View></View>
        
        if(products.length>0){
           jsx = <FlatList
                data={products}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={styles.productContainer}>
                        <Image source={{uri:`${url}/${item.images[0]}`}} style={styles.imageItem}></Image>
                        <View style={styles.infoProduct}>
                            <Text style={styles.textName}>{item.name.toUpperCase()}</Text>
                            <Text style={styles.textPrice}>{item.price}$</Text>
                            <Text style={styles.textMaterial}>{item.material}</Text>
                            <View style={styles.lastRowInfo}>
                                <Text  style={styles.textColor}>{item.color}</Text>
                                <View style={{ height: 20, width: 20, borderRadius: 11, backgroundColor: "blue" }} />
                                <TouchableOpacity onPress={() => this.goToDetail(item)}>
                                    <Text style={styles.textShow}>SHOW DETAILS</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                )}
            />
        }
        return jsx
    }
}

const { width, height } = Dimensions.get("window")
const heightProduct = height / 4
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#D6D6D6",


    },
    wrapper: {
        backgroundColor: "#fff",
        flex: 1,
        shadowColor: "#fff",
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.2,
        elevation: 10,
        borderRadius: 10,
        margin: 10,
        paddingHorizontal: 10

    },
    header: {

        height: width / 8,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 5

    },
    IconBackStyle: {
        height: width / 11,
        width: width / 11,


    },
    titleStyle: {
        fontSize: 20,
        fontFamily: "Aniver",
        color: "#BF216D"

    },
    productContainer: {
        margin: 10,
        flexDirection: "row",
        padding: 10,
        borderTopWidth: 1,
        borderColor: "gray"
    },
    infoProduct: {
        justifyContent: "space-between",
        marginLeft: 20,
        flex: 1,

    },
    imageItem: {
        //361-452

        height: heightProduct - 40,
        width: ((heightProduct - 40) * 361) / 452,
        marginVertical: 10,
    },
    lastRowInfo: {

        flexDirection: "row",
        justifyContent: "space-around",


    },
    textName: {
        fontFamily: "Avanir",
        fontSize: 20,
        color: "#99999B",
        fontWeight: "400",
    },
    textPrice: {
        fontFamily: "Avanir",
        fontSize: 16,
        color: "#C12A73",
    },
    textMaterial: {
        fontFamily: "Avanir",
        fontSize: 16,
        color: "#121012",
        fontWeight: "400",
    },
    textColor: {
        fontFamily: "Avanir",
        fontSize: 16,
        color: "#121012",
        fontWeight: "400",

    },
    textShow: {
        fontFamily: "Avanir",
        fontSize: 16,
        color: "#C12A73",


    }

})