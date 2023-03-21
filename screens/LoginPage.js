import React, {useState } from "react";

import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import changePassword from "./../firebasedump/ResetPassword";


import { handleLogin } from "../firebasedump/HandleLogin";

const LoginPage = ({ navigation }) => {


  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("");


  return (
    <View style={styles.container}>
      
      <View style={styles.imageContainer}>
        <Image source={require("../images/screen3.jpeg")} style={styles.img} />
      </View>
 
      <View style={styles.loginSignupContainer}>
        <TouchableOpacity
          style={styles.loginContainer}
          onPress={() => {
            navigation.navigate("LoginPage");
          }}
        >
  
          <Text style={styles.loginSignupText}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.signupContainer} onPress={() => navigation.navigate('SignupPage')}>
          <Text style={styles.loginSignupText}>Sign-up</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.loginIconsContainer}>
        <Text style={styles.loginText}>Login</Text>
        <Image
          source={require("../images/googleIcon.png")}
          style={{ width: 40, height: 40 }}
        />
        <Image
          source={require("../images/facebookIcon.png")}
          style={{ width: 38, height: 38 }}
        />
      </View>

      <View style={styles.loginloginloginFormContainer}>
        <TextInput
          placeholder="Email"
          style={styles.textInput}
          value={email}
          onChangeText={text => setEmail(text)}
        />

        <TextInput
          style={styles.textInput}
          placeholder="Password"
          secureTextEntry
          value={password}
          onChangeText={text => setPassword(text)}
        />

      </View>

      <View style={styles.signupButtonContainer}>
        {/* <TouchableOpacity
          style={styles.signupTextContainer}
          onPress={() => {
            navigation.navigate("Screen4");
          }}
        >
          <Text style={styles.signupText}>Login</Text>
        </TouchableOpacity> */}
        <TouchableOpacity
          style={styles.signupTextContainer}
          onPress={()=>handleLogin(email, password, navigation)}
        >
          <Text style={styles.signupText}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={changePassword}>
          <Text style={{fontWeight:"700"}}>Forgot Password?</Text>
    
        </TouchableOpacity>
      </View>
    </View>

  );
};

export default LoginPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",


  },
  imageContainer: {
    marginBottom: 100
  },

  img: {
    width: 420,
    borderRadius: 50,
    height: 342,
  },

  loginloginFormContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  loginSignupContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
    paddingBottom:10

  },

  loginContainer: {
    marginRight: 180,
    borderBottomWidth: 3.8,
    borderBottomEndRadius: 0.1,
    borderBottomColor: "#FA4A0C",
  },

  loginSignupText: {
    fontSize: 16,
    fontWeight: "700",
  },

  loginText: {
    fontSize: 30,
    color: "#C3B6B2",
    marginRight: 30,
  },
  loginIconsContainer: {
    display: "flex",
    flexDirection: "row",
    padding: 10,
  },

  signupButtonContainer: {
    paddingBottom: 145,
    padding: 20,
    display: "flex",
    flexDirection: "row",
  },

  signupTextContainer: {
    backgroundColor: "#B76C53",
    padding: 12,
    marginRight: 30,
    borderRadius: 20,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  signupText: {
    fontSize: 16,
    color: "white",
    paddingLeft: 17,
    paddingRight: 17,
  },

  textInput: {
    height: 40,
    margin: 9,
    borderWidth: 0,
    width: 300,
    borderRadius: 10,
    backgroundColor: "#EBD5D5",
    paddingLeft: 25,
  },
});
