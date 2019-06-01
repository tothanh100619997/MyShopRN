import * as types from './types'
export const addToCart =(item)=>({type:types.ADD_TO_CART,item})
export const deleteItem =(id)=>({type:types.DELETE_ITEM,id})
export const increaseCount =(id)=>({type:types.INCREASE_COUNT,id})
export const decreaseCount = (id) => ({ type: types.DECREASE_COUNT,id })