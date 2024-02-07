import { StyleSheet, Text, View, Button,Image,ImageBackground } from 'react-native';
import { GlobalStyles,images } from '../sytles/GlobalStyles';
import Card from '../shared/Card';

export default function DetailsScreen({ navigation, route }) {
  const { title,rating,body } = route.params;

  return (
    <ImageBackground source={require('../assets/game_bg.png')}  style={GlobalStyles.container}>
      <Card>
        <Text > {title}</Text>
        <Text > {body}</Text>
        <View style={styles.rating}>
        <Text>GameZone Rating:</Text>
        <Image source={images.ratings[rating]}/>
        </View>
      </Card>
    </ImageBackground>

  );
}

const styles=StyleSheet.create({
  rating:{
    flexDirection:'row',
    justifyContent:'center',
    paddingTop:16,
    marginTop:16,
    borderTopWidth:1,
    borderTopColor:'#eee'
  }
});



