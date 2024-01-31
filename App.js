import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useId, useState } from "react";
import { View, StyleSheet, Text, TextInput, Button, TouchableOpacity } from "react-native";
import Login from "./Component/Screens/Login";
import HomeScreen from "./Component/Screens/HomeScreen";
import { Header } from "react-native/Libraries/NewAppScreen";
import ProductDetails from "./Component/Screens/ProductDetails";
import Icon from 'react-native-vector-icons/FontAwesome';

Icon
const Stack = createNativeStackNavigator();
const App = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerRight: () => (
              <View style={{flexDirection: 'row', justifyContent:'flex-end',alignItems:'flex-end',marginRight:5}}> 
                <TouchableOpacity style={{marginRight:12}} onPress={()=>console.warn("Search Clicked")}>
                  <Icon name="search" size={24} color="black" />
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>console.warn("Cart Clicked")}>
                  <Icon name="cart-plus" size={25} color="black" />
                </TouchableOpacity>
              </View>
            )
          }} />
        <Stack.Screen name="Product Details" component={ProductDetails} />

      </Stack.Navigator>

    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'white'
  },
  loginContainer: {
    flex: .5,
    margin: 30,
    justifyContent: 'flex-end',
  },
  loginTextHeading: {
    fontSize: 28,
    color: 'black',
    fontWeight: 'bold'
  },
  loginTitle: {
    fontSize: 16,
    color: 'gray',
    marginTop: 5
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    marginTop: 20,
    paddingStart: 20
  },
  appButtonContainer: {
    marginTop: 20,
    elevation: 8,
    backgroundColor: "#009688",
    borderRadius: 10,
    paddingVertical: 10,
  },
  appButtonText: {
    fontSize: 18,
    color: "#fff",
    alignSelf: "center",
    shadowColor: 'red'
  }
});

export default App;
