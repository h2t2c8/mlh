
import AsyncStorage from '@react-native-community/async-storage';

export const SaveData = async (key,value) => {
 try {
    await AsyncStorage.setItem(key,value);
    console.log('Data successfully saved');
 } catch (e) {
    console.log('Failed to save the data to the storage')
 }
};

export const ReadData = async (key) => {
 let value = '';
 try {
    value = await AsyncStorage.getItem(key);
 } catch (e) {
    console.log('Failed to fetch the data from storage')
 }
 return value;
} 

export const ClearStorage = async () => {
 try {
    await AsyncStorage.clear();
    console.log('Storage successfully cleared!')
 } catch (e) {
    console.log('Failed to clear the async storage.')
 }
}
