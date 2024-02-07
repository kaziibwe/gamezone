import 'react-native-gesture-handler';

import {
  useNavigation,
  DrawerActions,
} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import Icon from 'react-native-vector-icons/Entypo';
import { MaterialIcons } from '@expo/vector-icons'

import HomeScreen from '../screens/Homescreen'
import DetailsScreen from '../screens/Detial'
import { StyleSheet, View ,Image, ImageBackground} from 'react-native';
const Stack = createNativeStackNavigator();
const HomeStack = () => {
  const Stack = createNativeStackNavigator();
  const navigation = useNavigation();
  return (
    
       <ImageBackground source={require('../assets/game_bg.png')} style={styles.backgroundImage} >
      
    

    <Stack.Navigator  
    screenOptions={{
      headerTitleAlign: 'center',
      headerStyle:{  backgroundColor:'#eeee' },

    }}>
     
        <Stack.Screen name="BackHome" component={HomeScreen}
          options={{ title: 'GameZone' ,
          headerStyle:{ backgroundColor:'#eee'},
          headerLeft: ()=>{
            return (
              <View style={styles.headerTitle}>
              <MaterialIcons
              name="menu"
              onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
              size={30}
              // color="#fff"
            />

            <Image source={require('../assets/heart_logo.png')} style={styles.Icon}/>

            </View>
            );
          }
        }}
        />

        <Stack.Screen name="Details" component={DetailsScreen}
          options={{ title: 'Review Details ',
        
         }}
          
        />
    </Stack.Navigator>
    </ImageBackground>

  )
}


export default HomeStack;

const styles =StyleSheet.create({
  Icon:{
    width:26,
    height:26,
    marginLeft:40
  }
,
headerTitle:{
  flexDirection:"row",
}, 
 backgroundImage: {
  flex: 1,
  resizeMode: 'cover',
  justifyContent: 'center',
},
});