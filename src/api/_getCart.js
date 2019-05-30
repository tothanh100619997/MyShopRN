import AsyncStorage from '@react-native-community/async-storage';

const _getCart = async () => {
    
    try {
        
        const value = await AsyncStorage.getItem('@cart');
    
        if (value !== null) {      
            return JSON.parse(value)
        }
        
        return []
    } catch (error) {
        return []        
    }
};
export default _getCart