import React, { Component } from "react";
import {
    View, ScrollView, Alert, Text, StyleSheet,
    TouchableOpacity, Dimensions, Image,
} from "react-native";
import { Header } from 'react-navigation'
import {url} from '../../../../actions/types'
import _getCart from "../../../../api/_getCart";
import _addToCart from "../../../../api/_addToCart";
import {deleteItem} from '../../../../actions'
import {connect} from 'react-redux'


class Cart extends Component {
    constructor(props) {
        super(props)
        this.state = {
            value: 1,
            cartArray: []
        }
    }
    componentDidMount() {        
       this.props.cartArray.then(e =>{
           this.setState({
               cartArray:e
           })
       })
      
    }    
    componentWillReceiveProps(nextProps) {
        nextProps.cartArray.then(e => {
            this.setState({
                cartArray: e
            })
        })
    }  

    checkOut = () => {
        Alert.alert(
            'Confirm',
            "Do you want to send this order",
            [
                {
                    text: 'Cancel',
                    onPress: () => console.log('Cancel Pressed'),
                    style: 'cancel',
                },
                { text: 'OK', onPress: () => console.log('OK Pressed') },
            ],
            { cancelable: false },

        )
    }
    goToDetail = (product) => {
        this.props.navigation.push("DetailProduct",{product})
    }
    onChangeValue = () => {
        this.setState({
            value: this.state.value + 1
        })
    }
    removeItem(id){
        this.props.deleteItem(id)
       
    }

    render() {
        
        const { cartArray } = this.state
        const { container,
             listItems,
            
        } = styles
        return (
            <View style={container}>
                <ScrollView style={listItems}>
                    {this.showItems(cartArray)}
                </ScrollView>
                {this.showPrice(cartArray)}
            </View>
        );
    }
    showPrice =(items)=>{
        let jsx = <View></View>
        let result =0
        if(items.length>0){
            items.forEach((item)=>{
                result+=item.quantity*item.product.price
            })
            jsx = (
                <TouchableOpacity onPress={this.checkOut} style={styles.btnCheckOut}>
                    <Text style={{ color: "#fff", fontSize: 18 }}>TOTAL {result}$ CHECKOUT NOW</Text>
                </TouchableOpacity>
            )
        }
        
        
        return jsx
        }
    showItems = (items) => {
        let jsx = <View></View>
      
        if (items.length > 0) {
            jsx = items.map((item) =>
                (<View style={styles.item} key={item.product.id}>
                    <View style={styles.imageStyle}>
                        <Image source={{ uri: `${url}/${item.product.images[0]}` }} style={{ height: heightImage, width: widthImage }} />
                    </View>
                    <View style={styles.infoContainer}>
                        <View style={styles.row1}>
                            <Text style={{ fontSize: 20, color: "#B1B1B1" }}>{item.product.name.toUpperCase()}</Text>
                            <TouchableOpacity onPress={()=>this.removeItem(item.product.id)}><Text style={{ fontSize: 20 }}>X</Text></TouchableOpacity>
                        </View>
                        <View style={styles.row2}>
                            <Text style={{ fontSize: 20, color: "#CA488A", fontWeight: "500" }}>{item.product.price}$</Text>
                        </View>
                        <View style={styles.row3}>
                            <View style={{ flexDirection: "row" }}>
                                <TouchableOpacity onPress={this.onChangeValue}><Text style={{ fontSize: 20, color: "#000" }}>+</Text></TouchableOpacity>
                                <Text style={{ fontSize: 20, color: "#000", marginHorizontal: 40 }}>{item.quantity}</Text>
                                <TouchableOpacity onPress={this.onChangeValue}><Text style={{ fontSize: 20, color: "#000" }}>-</Text></TouchableOpacity>
                            </View>
                            <TouchableOpacity onPress={()=>this.goToDetail(item.product)}><Text style={{ color: "#CA488A" }}>SHOW DETAILS</Text></TouchableOpacity>

                        </View>
                    </View>
                </View>)
            )
        }
        return jsx
    }
}
const mapStateToProps =state=>{
    return{
        cartArray:state.cartReducer
    }
}
const mapDispatchToProps = dispatch=>{
    return{
        deleteItem: (id)=>dispatch(deleteItem(id))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Cart)
const { height } = Dimensions.get("window")
const heightBtn = Header.HEIGHT - 10
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
    btnCheckOut: {
        backgroundColor: "#29B998",
        height: heightBtn,
        alignItems: "center",
        justifyContent: "center"
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
        flexDirection: "row",
        justifyContent: "space-between"
    },
    row2: {

    },
    row3: {
        flexDirection: "row",
        justifyContent: "space-between"

    }
})