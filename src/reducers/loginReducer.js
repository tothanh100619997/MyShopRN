import * as types from '../actions/types'
const initialState =null
export default loginReducer =  (state = initialState, action) => {   
    switch(action.type){
        case types.LOGGED:{           
            state = action.user
            return  state
        }
        default:
            return state
    }
}