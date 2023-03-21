import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

const Screen1 = ({ navigation }) => {
  return (

    
    <View style={styles.container}>

      <ImageBackground source={require('../images/background.jpeg')}style={styles.backgroundimg}>
  

      <View style={styles.bannerContainer}>
        <Image
          source={require("../images/Screen1_Thali_Image.png")}
          style={styles.bannerImage}
          resizeMode="contain"
        />
      </View>
      <View style={styles.contentContainer}>

        <View style={styles.titleContentContainer}>

        <Text style={styles.welcomText}>Welcome to</Text>
        <Text style={styles.titleText}>
          Foo<Text style={{ color: "#FF4D4D" }}>D</Text>eviry
        </Text>

        </View>
       
        <View style={styles.slangContainer}>
          <Text style={styles.slang}>Ghar ka agar ho khaana,</Text>
          <Text style={styles.slang}>FooDeviry aana</Text>
        </View>
        
        <View>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText} onPress={()=>{navigation.navigate('Screen2')}}>Get Started</Text>
        </TouchableOpacity>
        </View>
        
      </View>

      </ImageBackground>
    </View>
  );
};

export default Screen1;

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#E87A74",
    padding: 10,
    borderRadius: 10,
    borderRadius: 25,
  },

  buttonText: {
    color: "white",
    fontSize: 15,
    fontWeight: "600",
    paddingLeft: 20,
    paddingRight: 20,
  },

  banner: {
    width: 10,
    height: 100,
  },

  bannerImage: {
    width: 300,
  },

  bannerContainer: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },

  backgroundimg:{

    width:'100%',
    height:'100%',
    justifyContent:'center',
    alignItems:'center'
  }
  ,
  container: {
    flex: 1,
    backgroundColor: "#fae2e1",
    alignItems: "center",
    justifyContent: "center",
  },


  contentContainer: {

  
    backgroundColor: "white",
    width: 300,
    height: 200,
    borderRadius: 20,
    marginBottom: 32,
    justifyContent: "center",
    alignItems: "center",

    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0.7,
    shadowRadius: 12.35,

    elevation: 19,
  },

  slangContainer:{

    marginBottom:8,
    alignItems:'center'
  }
,
  slang: {
    fontWeight: 'bolder',
    color: "#811C06",
    fontSize:18,
    lineHeight:18.5
  },


  titleText: {
    fontSize: 22,
    fontWeight: "600",
    lineHeight: 34.5,
  },

  titleContentContainer:{

    marginBottom:8
  },
  welcomText: {
    fontSize: 22,
    fontWeight: "600",
    lineHeight: 34.5,
  },
});
