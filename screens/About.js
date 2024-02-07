import { StyleSheet, Text, View ,ImageBackground} from 'react-native';
import { GlobalStyles } from '../sytles/GlobalStyles';


export default  function About(){
    return(
        <ImageBackground source={require('../assets/game_bg.png')}  style={GlobalStyles.container}>
            <Text>About Screan</Text>
        </ImageBackground>
    )
}

// const styles=StyleSheet.create({
//     container:{
//         padding:24,
//     }
// });