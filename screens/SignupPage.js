import React, { useState } from "react";

import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Alert,
} from "react-native";

import { auth } from "./../authentication/api";

const SignupPage = ({ navigation }) => {

 
  const [email, setEmail] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  
  const handleSignup = () => {
    if (password !== confirmPassword) {
      Alert.alert("Error", "Passwords do not match");
      return;
    }

    auth
      .createUserWithEmailAndPassword(email, password)
      .then(userCredentials => {
        const user = userCredentials.user;
        console.log("Registered with:",user.email);
     
        navigation.navigate("LoginPage");

      })
      .catch(error=>alert(error.message));
  };


  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require("../images/screen3.jpeg")}
          style={styles.img}
        />
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

        <TouchableOpacity style={styles.signupContainer}>
          <Text style={styles.loginSignupText}>Sign-up</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.registerIconsContainer}>
        <Text style={styles.registerText}>Register</Text>
        
        <TouchableOpacity onPress={()=>{}}>
          <Image
            source={require("../images/googleIcon.png")}
            style={{ width: 40, height: 40 }}
          />
        </TouchableOpacity>
        <Image
          source={require("../images/facebookIcon.png")}
          style={{ width: 38, height: 38 }}
        />
      </View>

      <View style={styles.formContainer}>
      <TextInput
          placeholder="Email"
          style={styles.textInput}
          value={email}
          onChangeText={text=>setEmail(text)}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Mobile Number"
          value={mobileNumber}
          onChangeText={text=>setMobileNumber(text)}
          
        />
        <TextInput
          style={styles.textInput}
          placeholder="Password"
          secureTextEntry
          value={password}
          onChangeText={text=>setPassword(text)}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Confirm Password"
          secureTextEntry
          value={confirmPassword}
          onChangeText={text=>setConfirmPassword(text)}
        />
      </View>

      <View style={styles.signupButtonContainer}>
        <TouchableOpacity
          style={styles.signupTextContainer}
          onPress={handleSignup}
        >
          <Text style={styles.signupText}>Sign-up</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text>Already a Member?</Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("LoginPage");
            }}
          >
            <Text style={{ fontWeight: "700" }}>Login.</Text>
          </TouchableOpacity>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SignupPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  img: {
    width: 420,
    borderRadius: 50,
    height: 342,
  },

  formContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  loginSignupContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 30
  },

  loginContainer: {
    marginRight: 180,
  
    // borderBottomWidth: 3.8,
    // borderBottomEndRadius: 0.1,
    // borderBottomColor: "#FA4A0C",
  },

  imageContainer: {
    marginTop:5
  },

  signupContainer: {

    borderBottomWidth: 3.8,
    borderBottomEndRadius: 0.1,
    borderBottomColor: "#FA4A0C",
  },

  loginSignupText: {
    fontSize: 16,
    fontWeight: "700",
  },

  registerText: {
    fontSize: 30,
    color: "#C3B6B2",
    marginRight: 30,
  },
  registerIconsContainer: {
    display: "flex",
    flexDirection: "row",
    padding: 10,
  },

  signupButtonContainer: {
    paddingBottom: 90,
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
