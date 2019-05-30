import AsyncStorage from '@react-native-community/async-storage';
 const _addToCart = async (data) => {
  
    await AsyncStorage.setItem('@cart', JSON.stringify(data));
  
}  

export default _addToCart