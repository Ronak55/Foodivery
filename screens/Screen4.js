import React from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import { Ionicons } from '@expo/vector-icons';



import AppLoading from "expo-app-loading"

import { Barlow_400Regular, Barlow_300Light, Barlow_700Bold, Barlow_500Medium_Italic, Barlow_600SemiBold, Barlow_300Light_Italic} from "@expo-google-fonts/barlow";

import { useFonts } from "@expo-google-fonts/barlow/useFonts";

const Screen4 = ({ navigation }) => {

let [fontsLoaded, error] = useFonts({
  Barlow_300Light, Barlow_400Regular, Barlow_700Bold, 
  Barlow_500Medium_Italic,
  Barlow_600SemiBold,
  Barlow_300Light_Italic
})

if(!fontsLoaded){
  return <AppLoading/>
}

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../images/foodlocation.jpeg")}
        style={styles.backgroundimg}
        resizeMode="cover"
      >
         <View style={styles.overlay} />

        <View style={styles.greetingsAndSlangContainer}>
          <View style={styles.welcomeContainer}>
            <Text style={styles.welcomeText}>Welcome Lakshay:)</Text>
          </View>

          <View style={styles.slangContainer}>
            <Text style={styles.slang}>
              Feel the love of homemade{"\n"}food even from away{"\n"}the
              home..
            </Text>
          </View>
        </View>

        <View style={styles.selectLocationContainer}>
          <Text style={styles.selectLocationText}>Select Location</Text>

          <TouchableOpacity
            style={styles.locateMeContainer}
            onPress={() => {
              navigation.navigate("Screen5");
            }}
          >
            <Ionicons name="location" size={24} color="black" />
            <Text style={styles.locateMeText}>Locate Me</Text>
          </TouchableOpacity>

          <Text style={styles.orText}>OR</Text>

          <TouchableOpacity style={styles.provideLocationContainer}>
           
          <Ionicons name="earth" size={24} color="black" />
            <Text style={styles.provideLocationText}>
              Provide Location
            </Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Screen4;

const styles = StyleSheet.create({
  backgroundimg: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
    blurRadius:40
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
  },


  greetingsAndSlangContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom:130
  },

  locateMeContainer: {
    flexDirection:"row",
    height: 65,
    borderWidth: 0,
    width: 280,
    backgroundColor: "#b39879",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
    justifyContent:"space-around",
  },
  locateMeText: {
    fontSize: 18,
    paddingRight:60,
    color: "white",
    fontFamily:"Barlow_300Light_Italic",
    
  },

  slangContainer:{

  marginTop:30,
  marginLeft:20

  },

  orText: {
    padding: 20,
    fontSize: 20,
    fontWeight: "500",
    color:"white",
    fontFamily:"Barlow_700Bold"
  },

  provideLocationContainer: {
    height: 65,
    margin: 9,
    borderWidth: 0,
    width: 280,
    borderRadius: 10,
    backgroundColor: "#b39879",
    paddingLeft: 25,
    display: "flex",
    flexDirection: "row",
    borderRadius: 25,
    alignItems: "center",
  },
  provideLocationLogo: {},

  provideLocationText: {
    fontSize: 17,
    color: "white",
    fontFamily:"Barlow_300Light_Italic",
    paddingLeft:35
  },

  slang: {
    fontSize: 18,
    color: "white",
    padding: 10,
    fontFamily:"Barlow_500Medium_Italic"
  },
  selectLocationContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  selectLocationText: {
    fontSize: 23,
    fontWeight: "bold",
    color:"white",
    paddingBottom: 30,
    fontFamily:"Barlow_600SemiBold"


  },
  welcomeContainer: {
    borderBottomColor: "black",
    borderBottomWidth: 2,
  },

  welcomeText: {
    color: "#E87A74",
    fontSize: 32,
    fontFamily:"Barlow_700Bold"
  },
});

// backgroundColor: "#B76C53",
