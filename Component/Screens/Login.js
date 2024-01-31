import { useId, useState } from "react";
import { View, StyleSheet, Text, TextInput, Button, TouchableOpacity, ActivityIndicator } from "react-native";

const Login = ({ navigation }) => {
  const [email, setEmail] = useState('kminchelle');
  const [password, setPassword] = useState('0lelplR');
  const [loader,setLoader] = useState(false);

  const loginApi = async () => {
    setLoader(true);
    const url = 'https://dummyjson.com/auth/login';
    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        "username": email,
        "password": password
      })
    })
    if (response.ok) {
      setLoader(false);
      const result = await response.json();
      navigation.navigate('Home');
    } else {
      setLoader(false);
      console.warn("Wrong Credential");
      throw new Error(response.status);
    }

  }

  return (
    <View style={styles.mainContainer}>
      <View style={styles.loginContainer}>
        <View>
          <Text style={styles.loginTextHeading}>Welcome Back!</Text>
          <Text style={styles.loginTitle}>Sign in to your account.</Text>
          <TextInput
            style={styles.input}
            placeholder="Email"
            keyboardType='email-address'
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            keyboardType='visible-password'
            value={password}
            onChangeText={(text) => setPassword(text)}
          />
          <TouchableOpacity onPress={loginApi} style={styles.appButtonContainer}>
            <Text style={styles.appButtonText}>Login</Text>
          </TouchableOpacity>
          {
            loader?<ActivityIndicator size={70}/>:null
          }
          
        </View>
      </View>
    </View>
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

export default Login;
