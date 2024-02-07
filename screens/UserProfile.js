import { StyleSheet, Text, View,ImageBackground } from 'react-native';
import { GlobalStyles } from '../sytles/GlobalStyles';


export default  function UserProfile(){
    return(
        <ImageBackground source={require('../assets/game_bg.png')}  style={GlobalStyles.container}>
            <Text>User profile Screan</Text>
        </ImageBackground>
    )
}

