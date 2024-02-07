import { StyleSheet, Text, View, FlatList, TouchableOpacity, ImageBackground, } from 'react-native';


const FlatButton = ({text,onPress}) => {
    return ( 
        <TouchableOpacity onPress={onPress}>
            <Text style={styles.button}>
                <Text style={styles.buttonText}>{text}</Text>
            </Text>
        </TouchableOpacity>
     );
}
 
export default FlatButton;

const styles = StyleSheet.create({
    button:{
        borderRadius: 2,
        paddingVertical:14,
        paddingHorizontal:10,
        backgroundColor:'#f01d71',
        textAlign: 'center', // Center text horizontally

    },
    buttonText:{
        color:'white',
        fontWeight:'bold',
        textTransform:'uppercase',
        fontSize:16,
       
    }
});