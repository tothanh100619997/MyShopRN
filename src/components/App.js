import React, { Component } from "react";
import { StatusBar, Dimensions } from "react-native";
import { createAppContainer, createDrawerNavigator } from "react-navigation";

import Main from "./Main/Main";
import Authentication from "./Authentication/Authentication";
import ChangeInfo from "./ChangeInfo/ChangeInfo";
import OrderHistory from "./OrderHistory/OrderHistory";
import Menu from './Main/Menu'

import store from '../store/index'
import { Provider } from 'react-redux'

StatusBar.setHidden(true);

const myDrawer = createDrawerNavigator(
	{
		Main,		
		Authentication,
		ChangeInfo,
		OrderHistory,

	},
	{
		contentComponent: Menu,
		drawerWidth: Dimensions.get("window").width * 0.6,
		drawerType: "slide",
		overlayColor: 0
	}
)

const AppContainer = createAppContainer(myDrawer);

export default class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<AppContainer />
			</Provider>
		)
	}
}
