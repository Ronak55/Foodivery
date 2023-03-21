import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";

import React, {useState} from "react";
import { StatusBar } from 'react-native';

import changePassword from "./../firebasedump/ResetPassword"


const Screen2 = ({ navigation }) => {

  const {provider, setprovider} = useState(0);
  const {user, setuser} = useState(0);
 
  
  
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={require("../images/screen2banner.png")} style={styles.img} resizeMode="center" />
      </View>
      <View style={styles.secondsection}>
        <View style={styles.loginSignupContainer}>
          <TouchableOpacity style={styles.loginContainer} onPress={() => { navigation.navigate('LoginPage') }}  >
            <Text style={styles.loginSignupText}>Login</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.signupContainer} onPress={() => { navigation.navigate('SignupPage') }}>
            <Text style={styles.loginSignupText}>Sign-up</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.provideruser} >


          <View style={styles.provider}>
            <TouchableOpacity style={styles.providercontainer} onPress={() => {navigation.navigate("LoginPage")}}  >
              <Text style={styles.providertext}>Provider</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.or}>OR</Text>
          <View style={styles.user}>
            <TouchableOpacity style={styles.usercontainer} onPress={() => {navigation.navigate("LoginPage")}}  >
              <Text style={styles.usertext}>User</Text>
            </TouchableOpacity>
          </View>

        </View>

        <View style={styles.bottomContainer}>
        <TouchableOpacity style={styles.forgotpassword} onPress={changePassword}  >
          <Text style={styles.password}>Forgot password?</Text>
        </TouchableOpacity>

        <View style={styles.loginIconsContainer}>



        <Image
          source={require("../images/googleIcon.png")}
          style={{ width: 35, height: 35 }}
        />
        <Image
          source={require("../images/facebookIcon.png")}
          style={{ width: 30, height: 30 }}
        />
      </View>
      </View>



      </View>
      


    </View>
  );
};

export default Screen2;

const styles = StyleSheet.create({
  button: {
    backgroundColor: "lightblue",
    padding: 10,
    borderRadius: 10,
  },

  bottomContainer:{

    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    paddingTop:10,
    
  
  },
  buttonText: {
    color: "white",
  },
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },

  loginContainer: {
    marginRight: 150,
    borderBottomWidth: 2.5,
    borderBottomEndRadius: 0.1,
    borderBottomColor: "black",
  },

  loginSignupContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 45

  },

  or: {


    fontWeight:'600'


  },

  loginSignupText: {
    fontSize: 16,
    fontWeight: "700",
  },
  signupContainer: {

    borderBottomWidth: 2.5,
    borderBottomEndRadius: 0.1,
    borderBottomColor: "black",
  },
  
  imageContainer: {
    marginBottom: 80
  },

  img: {
    width: 420,
    borderRadius: 50,
    height: 342,
  },

  providertext: {

    padding: 15,
    paddingLeft: 85,
    fontWeight: 'bold',
    fontSize: 20

  },

  secondsection: {

    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingBottom:100
  

  },

  forgotpassword: {

    paddingRight:10
    
  },

  password: {

    fontWeight: 'bold'
  },

  usertext: {

    paddingLeft: 100,
    paddingTop: 10,
    fontWeight: 'bold',
    fontSize: 20

  },

  providercontainer: {
    backgroundColor: "#EBD5D5",
    borderRadius: 15,
    marginBottom: 15,
    width: 250

  },

  usercontainer: {

    backgroundColor: "#EBD5D5",
    borderRadius: 15,
    margin: 15,
    width: 250,
    height: 55
  },

  loginIconsContainer: {
    display: "flex",
    flexDirection: "row",
    



  },

  provideruser: {

    display: 'flex',
    justifyContent: 'center',
    alignItems: "center"
  }

  ,

  loginText: {
    fontSize: 30,
    color: "#C3B6B2",
    marginRight: 30,
  },

});
