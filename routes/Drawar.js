import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import UserProfile from '../screens/UserProfile';
import { createDrawerNavigator, useLegacyImplementation } from '@react-navigation/drawer';
// import DrawerContent from '../DrawerContent';
import About from '../screens/About';
// other imports and code
import HomeStack from './HomeStack'; 


import React from 'react';


const DrawerNav=()=>{
  const Drawer=createDrawerNavigator();


  return (
    <Drawer.Navigator 
    // drawerContent={props => <DrawerContent {...props} />}
    screenOptions={{
      headerTitleAlign: 'center',
      headerStyle:{  backgroundColor:'#eeee' },
    }}>
  <Drawer.Screen name="Home" component={HomeStack} options={{   headerShown:false}} />
  <Drawer.Screen name="UserProfile" component={UserProfile}  options={{ title:'UserProfile'}}/>
  <Drawer.Screen name="About" component={About} options={{ title:'About GameZone'}} />

    </Drawer.Navigator>
  );
}


function Navigator() {
  return (
    <NavigationContainer>
      <DrawerNav/>
  </NavigationContainer>
  );
}
export default Navigator;

;







