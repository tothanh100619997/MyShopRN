import React, { Component } from 'react'

import { Image } from 'react-native'
class Icon extends Component {
    render() {
        const { name, width, height, tintColor } = this.props
        return (
            <Image source={name} style={[{ width: width, height: height }, { tintColor: tintColor }]} />
        )
    }
}
const MyICon = props =>{
    return <Icon {...props} />
}
export default MyICon