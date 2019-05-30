import React, { Component } from 'react'

import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import { createAppContainer, createStackNavigator } from 'react-navigation'

import MyIcon from './MyICon'
import MyIconWithBadge from './MyIconWithBadge'
import IconHome from '../../media/appIcon/home.png'
import IconCart from '../../media/appIcon/cart.png'
import IconSearch from '../../media/appIcon/search.png'
import IconContact from '../../media/appIcon/contact.png'

import Home from "./Shop/Home/Home";
import Cart from "./Shop/Cart/Cart";
import Contact from "./Shop/Contact/Contact";
import Search from "./Shop/Search/Search";
import DetailProduct from "./Shop/DetailProduct/DetailProduct"
import ListProduct from "./Shop/ListProduct/ListProduct"

const HomeStack = createStackNavigator(
    {
        Home,
        DetailProduct,
        ListProduct
    },
    {
        initialRouteName: "Home",
        headerMode: "none"
    }
)
HomeStack.navigationOptions = ({ navigation }) => {
    let tabBarVisible = true;
    if (navigation.state.index > 0) {
        tabBarVisible = false;
    }

    return {
        tabBarVisible,
    };
};



const CartStack = createStackNavigator(
    {
        Cart,
        DetailProduct
    },
    {
        initialRouteName: "Cart",
        headerMode: "none"
    }
)
CartStack.navigationOptions = ({ navigation }) => {
    let tabBarVisible = true;
    if (navigation.state.index > 0) {
        tabBarVisible = false;
    }

    return {
        tabBarVisible,
    };
};


const SearchStack = createStackNavigator(
    {
        Search,
        DetailProduct,
        
    },
    {
        initialRouteName: "Search",
        headerMode: "none"
    }
)
SearchStack.navigationOptions = ({ navigation }) => {
    let tabBarVisible = true;
    if (navigation.state.index > 0) {
        tabBarVisible = false;
    }

    return {
        tabBarVisible,
    };
};

const BottomTab = createMaterialBottomTabNavigator(
    {
        Home: { screen: HomeStack },
        Cart: { screen: CartStack },
        Search: { screen: SearchStack },
        Contact: { screen: Contact }
    },
    {
        initialRouteName: "Home",
        activeColor: "#2aBA99",
        inactiveColor: "#525659",
        barStyle: { backgroundColor: "#F7F7F7" },
        shifting: true,
        backBehavior: "Cart",
        defaultNavigationOptions: ({ navigation}) => ({
            
            tabBarIcon: ({ focused, tintColor }) => {

                const { routeName } = navigation.state
                let IconComponent = MyIcon
                let iconName

                if (routeName === "Home") {
                    iconName = IconHome

                } else if (routeName === "Cart") {
                    iconName = IconCart
                    IconComponent = MyIconWithBadge
                } else if (routeName === "Search") {
                    iconName = IconSearch
                } else if (routeName === "Contact") {
                    iconName = IconContact
                }
               
                return <IconComponent name={iconName} width={32} height={32} tintColor={tintColor} />
            }

        })

    }

)

export default createAppContainer(BottomTab)