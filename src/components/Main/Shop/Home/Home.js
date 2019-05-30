import React, { Component } from 'react';
import { ScrollView, StyleSheet } from "react-native"

import Category from "./Category"
import Collection from "./Collection"
import TopProduct from "./TopProduct"

import _initData from '../../../../api/_initData'

export default class Home extends Component {
    constructor(props){
        super(props)
        this.state={
            types:[],
            products:[]
        }
    }
    componentDidMount(){
        
        _initData()
        .then(resJson=>{            
            this.setState({
                types:resJson.type,
                products:resJson.product
            })         
        })
        .catch(e=>alert(e))
    }
    render() {
        const {types, products}= this.state
        
        const { wrapper } = styles;
        return (
            <ScrollView style={wrapper}>
                <Collection  />
                <Category types={types} nav={this.props.navigation} />
                <TopProduct nav={this.props.navigation} products={products} />

            </ScrollView>
        );
    }
}
const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        backgroundColor: "#E3DFDF",

    }
});
