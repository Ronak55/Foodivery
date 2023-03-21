import {
    Image,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    ScrollView,
  } from "react-native";
  import React from "react";
  
  const ShowOrders = ({ navigation }) => {
    return (
      <View style={styles.container}>
        <Text style={styles.ordersText}>Order Details</Text>
  
        <View style={styles.topCardContainer}>
          <View style={styles.topCardTextContainer}>
            <Text style={styles.topCardText}>In hand orders : 10</Text>
            <Text style={styles.topCardText}>Order delivered : 89</Text>
            <Text style={styles.topCardText}>Ratings : 4.5</Text>
          </View>
  
          <View style={styles.bannerImageContainer}>
            <Image
              source={require("../../images/chefScreenIcons/showOrdersBanner.png")}
              style={styles.bannerImage}
            />
          </View>
        </View>
  
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            paddingBottom: 20,
          }}
        >
          <Text
            style={{
              fontSize: 24,
              fontWeight: "900",
              fontStyle: "italic",
              marginRight: 60,
              paddingBottom: 20,
            }}
          >
            Delivery History
          </Text>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              source={require("../../images/chefScreenIcons/filterIcon.png")}
              style={{ width: 20, height: 20, marginRight: 7 }}
            />
  
            <Text style={{ fontWeight: "600" }}>Filter</Text>
          </View>
        </View>
  
        <ScrollView style={{ backgroundColor: "white", width: "99%" }}>
          <View style={styles.mainCardContainer}>
            <View style={styles.cardContainer}>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Image
                  source={require("../../images/chefScreenIcons/burger.png")}
                  style={{
                    width: 100,
                    height: 100,
                    borderRadius: 50,
                    borderWidth: 2,
                    borderColor: "darkgreen",
                    backgroundColor: "white",
                    marginRight: 40,
                    marginBottom: 5,
                  }}
                />
                <Text
                  style={{ fontSize: 17, fontWeight: "600", marginRight: 60 }}
                >
                  Ronak Bothra
                </Text>
              </View>
  
              <Text
                style={{ marginLeft: 60, marginRight: 20, fontStyle: "italic" }}
              >
                Truffle , herbs , aioli , Green chillies , Indian spices etc.
              </Text>
  
              <View
                style={{
                  marginLeft: 20,
                  marginBottom: 10,
                  marginTop: 10,
                  display: "flex",
                  flexDirection: "row",
                }}
              >
                <Text style={{ marginRight: 70, fontWeight: "600" }}>
                  Delivered to : 423-21{" "}
                </Text>
                <Text style={{ fontWeight: "600", fontStyle: "italic" }}>
                  Ratings : 3.5{" "}
                </Text>
              </View>
              <Text
                style={{
                  marginLeft: 20,
                  marginBottom: 10,
                  fontWeight: "600",
                  fontStyle: "italic",
                }}
              >
                The Raj Kitchen
              </Text>
            </View>
  
            <View style={styles.cardContainer}>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Image
                  source={require("../../images/chefScreenIcons/burrito.png")}
                  style={{
                    width: 100,
                    height: 100,
                    borderRadius: 50,
                    borderWidth: 2,
                    borderColor: "darkgreen",
                    backgroundColor: "white",
                    marginRight: 40,
                    marginBottom: 5,
                  }}
                />
                <Text
                  style={{ fontSize: 17, fontWeight: "600", marginRight: 60 }}
                >
                  Lakshay Bhardwaj
                </Text>
              </View>
  
              <Text
                style={{ marginLeft: 60, marginRight: 20, fontStyle: "italic" }}
              >
                Truffle , herbs , aioli , Green chillies , Indian spices etc.
              </Text>
  
              <View
                style={{
                  marginLeft: 20,
                  marginBottom: 10,
                  marginTop: 10,
                  display: "flex",
                  flexDirection: "row",
                }}
              >
                <Text style={{ marginRight: 70, fontWeight: "600" }}>
                  Delivered to : 423-21{" "}
                </Text>
                <Text style={{ fontWeight: "600", fontStyle: "italic" }}>
                  Ratings : 3.5{" "}
                </Text>
              </View>
              <Text
                style={{
                  marginLeft: 20,
                  marginBottom: 10,
                  fontWeight: "600",
                  fontStyle: "italic",
                }}
              >
                The Raj Hotel
              </Text>
            </View>
  
            <View style={styles.cardContainer}>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Image
                  source={require("../../images/chefScreenIcons/bowl.png")}
                  style={{
                    width: 100,
                    height: 100,
                    borderRadius: 50,
                    borderWidth: 2,
                    borderColor: "darkgreen",
                    backgroundColor: "white",
                    marginRight: 40,
                    marginBottom: 5,
                  }}
                />
                <Text
                  style={{ fontSize: 17, fontWeight: "600", marginRight: 60 }}
                >
                  Satyam Bhardwaj
                </Text>
              </View>
  
              <Text
                style={{ marginLeft: 60, marginRight: 20, fontStyle: "italic" }}
              >
                Truffle , herbs , aioli , Green chillies , Indian spices etc.
              </Text>
  
              <View
                style={{
                  marginLeft: 20,
                  marginBottom: 10,
                  marginTop: 10,
                  display: "flex",
                  flexDirection: "row",
                }}
              >
                <Text style={{ marginRight: 70, fontWeight: "600" }}>
                  Delivered to : 423-21{" "}
                </Text>
                <Text style={{ fontWeight: "600", fontStyle: "italic" }}>
                  Ratings : 3.5{" "}
                </Text>
              </View>
              <Text
                style={{
                  marginLeft: 20,
                  marginBottom: 10,
                  fontWeight: "600",
                  fontStyle: "italic",
                }}
              >
                The Raj Hotel
              </Text>
            </View>
          </View>
        </ScrollView>
  
        <View style={styles.bottomIcons}>
          <TouchableOpacity
            style={{ marginRight: 60 }}
            onPress={() => {
              navigation.navigate("AddMenuScreen");
            }}
          >
            <Image
              source={require("../../images/chefScreenIcons/homeIcon.png")}
              style={{ width: 40, height: 40 }}
            />
          </TouchableOpacity>
          <TouchableOpacity style={{ marginRight: 60 }}>
            <Image
              source={require("../../images/chefScreenIcons/addIcon.png")}
              style={{ width: 40, height: 40 }}
            />
          </TouchableOpacity>
          <TouchableOpacity style={{ marginRight: 60 }}>
            <Image
              source={require("../../images/chefScreenIcons/cardIcon.png")}
              style={{ width: 40, height: 40 }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {}}
          >
            <Image
              source={require("../../images/chefScreenIcons/listIcon.png")}
              style={{ width: 40, height: 40 }}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  };
  
  export default ShowOrders;
  
  const styles = StyleSheet.create({
    bannerImage: {
      width: 170,
      height: 170,
    },
  
    bannerImageContainer: {},
    bottomIcons: {
      display: "flex",
      flexDirection: "row",
    },
    container: {
      flex: 1,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "white",
    },
  
    cardContainer: {
      backgroundColor: "#f8f9fa",
      borderRadius: 25,
      marginBottom: 30,
    },
  
    mainCardContainer: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    ordersText: {
      fontSize: 30,
      fontWeight: "900",
      fontStyle: "italic",
      borderColor: "black",
      borderBottomWidth: 2,
      paddingTop: 30,
    },
    topCardContainer: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      paddingBottom: 40,
    },
  
    topCardTextContainer: {
      paddingRight: 20,
    },
    topCardText: {
      fontStyle: "italic",
      fontWeight: "500",
    },
  });