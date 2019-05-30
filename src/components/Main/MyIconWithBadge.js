import React, { Component } from 'react'
import {View, Text} from 'react-native'
import MyIcon from './MyICon'
import {connect} from 'react-redux'

class Icon extends Component{
    render(){
        const { name, badgeCount,width,height,tintColor} = this.props;
        return(
            <View>
                <MyIcon name={name} width ={width} height ={height} tintColor={tintColor}/>
                {badgeCount > 0 && (
                    <View
                        style={{
                            // /If you're using react-native < 0.57 overflow outside of the parent
                            // will not work on Android, see https://git.io/fhLJ8
                            position: 'absolute',
                            right: -6,
                            top: -3,
                            backgroundColor: 'blue',
                            borderRadius: 6,
                            width: 12,
                            height: 12,
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>
                        <Text style={{ color: 'white', fontSize: 10, fontWeight: 'bold' }}>
                            {badgeCount}
                        </Text>
                    </View>
                )}
            </View>
        )
    }
}

class MyIconWithBadge extends Component{    
    constructor(props){
        super(props)
        this.state={
            count:0
        }
    }
    componentDidMount(){
      
        this.props.cartArray.then(e=>{
            this.setState({count:e.length})
        })
    }
    componentWillReceiveProps(nextProps){
       
        nextProps.cartArray.then(e => {
            this.setState({              
                count: e.length
            })
        })
    }
    
    render(){
        
        
        const {props} = this
        return (<Icon {...props} badgeCount={this.state.count} />);
    }
    // You should pass down the badgeCount in some other ways like context, redux, mobx or event emitters.
    
};
const mapStateToProps = state =>{
    //console.log(state.cartReducer.length)
    return{
        cartArray:state.cartReducer
    }
}
export default connect(mapStateToProps,null)(MyIconWithBadge)