import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { MaterialIcons } from "@expo/vector-icons";
import * as Location from "expo-location";

const Screen5 = ({ navigation }) => {
  const [region, setRegion] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setRegion({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: 0.015,
        longitudeDelta: 0.0121,
      });
    })();
  }, []);

  useEffect(() => {
    if (region) {
      mapRef.current.animateToRegion(region, 500);
    }
  }, [region]);

  const handleZoomIn = () => {
    setRegion({
      ...region,
      latitudeDelta: region.latitudeDelta * 0.5,
      longitudeDelta: region.longitudeDelta * 0.5,
    });
  };

  const handleZoomOut = () => {
    setRegion({
      ...region,
      latitudeDelta: region.latitudeDelta * 2,
      longitudeDelta: region.longitudeDelta * 2,
    });
  };

  const mapRef = React.createRef();

  return (
    <View style={styles.container}>
      <View style={styles.statusBar} />
      <View style={styles.header}>
        <Text style={styles.headerText}>Confirm Your Location</Text>
      </View>
      {region ? (
        <MapView
          ref={mapRef}
          style={styles.map}
          initialRegion={region}
          provider={MapView.PROVIDER_GOOGLE}
        >
          <Marker coordinate={region} />
        </MapView>
      ) : (
        <View style={styles.loaderContainer}>
          <Text>Loading map...</Text>
        </View>
      )}
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.confirmButton}
          onPress={() => navigation.navigate("Dashboard")}
        >
          <Text style={styles.confirmButtonText}>Confirm Location</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.zoomInButton} onPress={handleZoomIn}>
        <MaterialIcons name="add" size={28} color="white" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.zoomOutButton} onPress={handleZoomOut}>
        <MaterialIcons name="remove" size={28} color="white" />
      </TouchableOpacity>
    </View>
  );
};

export default Screen5;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  statusBar: {
    height: 20,
    backgroundColor: "#F9A826",
  },
  header: {
    backgroundColor: "#F9A826",
    height: 60,
    justifyContent: "flex-end",
    alignItems: "center",
    paddingBottom: 10,
  },
  headerText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  map: {
    flex: 1,
  },
  loaderContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonContainer: {
    position: "absolute",
    bottom: 20,
    left: 0,
    right: 0,
    alignItems: "center",
  },
  confirmButton: {
    backgroundColor: "#F9A826",
    padding: 12,
    borderRadius: 25,
    width: "60%",
    alignItems: "center",
    height:50
   
  },
  confirmButtonText:{

    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",

  },

  zoomInButton: {
    position: 'absolute',
    top: 100,
    right: 20,
    backgroundColor: '#000',
    borderRadius: 5,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  zoomOutButton: {
    position: 'absolute',
    top: 150,
    right: 20,
    backgroundColor: '#000',
    borderRadius: 5,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  

});





// import {
//     Image,
//     ImageBackground,
//     StyleSheet,
//     Text,
//     TouchableOpacity,
//     View,
//   } from "react-native";
//   import React from "react";
//   import { useState } from "react";
  
//   const Screen5 = ({ navigation }) => {
  
  
//     const [selected, setSelected] = useState('');
    
//     return (
//       <View style={styles.container}>
  
//           <ImageBackground source={require('../images/googlemaptemplate.png')} style={styles.backgroundimg}>
//         <View style={styles.selectLocationMainContainer}>
        
        
           
//         </View>
  
//         <View style={styles.contentContainer}>
//           <View style={styles.titleContentContainer}>
//             <Text style={styles.welcomText}>Satya Nilayam</Text>
//           </View>
  
//           <View style={styles.slangContainer}>
//             <Text style={styles.slang}>21-42-34 , Banjara hills,</Text>
//             <Text style={styles.slang}>Hyderabad , 500072</Text>
//           </View>
  
//           <View>
//             <TouchableOpacity style={styles.button}>
//               <Text
//                 style={styles.buttonText}
//                 onPress={() => {
//                   navigation.navigate("AddMenuScreen");
//                 }}
//               >
//                 Confirm Location
//               </Text>
//             </TouchableOpacity>
//           </View>
//         </View>
  
//         </ImageBackground>
//       </View>
//     );
//   };
  
//   export default Screen5;
  
//   const styles = StyleSheet.create({
//     button: {
//       backgroundColor: "#471E1E",
//       padding: 10,
//       borderRadius: 10,
//       borderRadius: 25,
//     },
  
//     buttonText: {
//       color: "white",
//       fontSize: 15,
//       fontWeight: "600",
//       paddingLeft: 20,
//       paddingRight: 20,
//     },
  
//     banner: {
//       width: 10,
//       height: 100,
//     },
  
//     bannerImage: {
//       width: 300,
//     },
  
//     backgroundimg: {
//       justifyContent: "space-between",
//       alignItems: "center",
//       width: "100%",
//       height: "100%",
//     },
  
//     container: {
//       flex: 1,
//       display: "flex",
//       justifyContent: "space-between",
//       alignItems: "center",
//     },
  
//     contentContainer: {
//       backgroundColor: "#fae2e1",
//       width: 300,
//       height: 200,
//       borderRadius: 25,
//       marginBottom: 32,
//       justifyContent: "center",
//       alignItems: "center",
  
//       shadowColor: "black",
//       shadowOffset: {
//         width: 0,
//         height: 9,
//       },
  
//       shadowOpacity: 0.7,
//       shadowRadius: 12.35,
  
//       elevation: 19,
//     },
  
//     slangContainer: {
//       marginBottom: 8,
//       alignItems: "center",
//     },
//     slang: {
//       fontWeight: "bolder",
//       color: "#811C06",
//       fontSize: 14,
//       lineHeight: 18.5,
//     },
  
//     titleText: {
//       fontSize: 22,
//       fontWeight: "600",
//       lineHeight: 34.5,
//     },
  
//     titleContentContainer: {
//       marginBottom: 8,
//     },
//     welcomText: {
//       fontSize: 22,
//       fontWeight: "600",
//       lineHeight: 34.5,
//     },
//   });
  