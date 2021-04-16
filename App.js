import React,{Component} from 'react';
import {Button,Alert,FlatList,StyleSheet, TouchableOpacity, Text, View, Image, TextInput} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const provincias = [
  {
    id:1,
    name: 'Arequipa',
  },
  {
    id: 2,
    name: 'Lima',
  },
  {
    id: 3,
    name: 'Piura',
  },
];

const Stack = createStackNavigator();

function HomeScreen({navigation}){
  return(
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>

      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
        />
    </View>
  );
}

function DetailsScreen({navigation}){
  return(
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Details Screen</Text>

      <Button
        title="Go back to first screen in stack"
        onPress={() => navigation.popToTop()}
        />
    </View>
  );
}

export default class App extends Component{
  constructor(props){
    super(props);

    this.state = {
      textValue: '',
      count: 0,
    };
  }

  changeTextInput = text =>{
    console.log(text)
    this.setState({textValue: text});
  };
  
  onPress = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  showAlert = () =>{
    Alert.alert(
      'Titulo',
      'Mensaje',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {text: 'Ok', onPress: () => console.log('OK Pressed')},
      ],
      {cancelable: false},
    );
  };

  render(){
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen}/>
          <Stack.Screen name="Details" component={DetailsScreen}/>
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  text:{
    alignItems: 'center',
    padding: 10,
  },
});
