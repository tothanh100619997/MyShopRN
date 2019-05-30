import * as types from '../actions/types'
import _getCart from '../api/_getCart'
import _addToCart from '../api/_addToCart'




let initialState = []


export default cartReducer = async (state = initialState, action) => {
    state = await _getCart()
    switch (action.type) {
        case types.DELETE_ITEM: {

            const newCart = state.filter(e => e.product.id !== action.id)
            state = newCart
            _addToCart(state)
            return state
        }
        case types.ADD_TO_CART: {

            const isExist = state.some(e => e.product.id === action.item.id)
            if (isExist) return false
            state.push({ product: action.item, quantity: 1 })
            _addToCart(state)
            return state
        }
        default:
            return state
    }
}