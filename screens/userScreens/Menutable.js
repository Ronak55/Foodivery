import {
    ImageBackground,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    Image
  } from "react-native";
import React from "react";
import Ionicons from '@expo/vector-icons/Ionicons';

const Menutable= () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.backbutton}>
        <Ionicons name='chevron-back-circle' size={32} color='black' />
        </View>
          <View style={styles.providername}>
            <Text style = {styles.providertext}>Meenakshi's Kitchen</Text>
          </View>
       
      </View>

      <View style={styles.foodbackground}>
        <Image source={require("../../images/userScreenIcons/foodbackground.png")}></Image>
      </View>

      <View style={styles.weekdays}>
        <View style={styles.monday}>
          <Text style={styles.mon}>Mon</Text>
        </View>
        <View style={styles.tuesday}>
          <Text style={styles.tue}>Tue</Text>
        </View>
        <View style={styles.wednesday}>
          <Text style={styles.wed}>Wed</Text>
        </View>
        <View style={styles.thursday}>
          <Text style={styles.thu}>Thu</Text>
        </View>
        <View style={styles.friday}>
          <Text style={styles.fri}>Fri</Text>
        </View>
        <View style={styles.saturday}>
          <Text style={styles.sat}>Sat</Text>
        </View>
        <View style={styles.sunday}>
          <Text style={styles.sun}>Sun</Text>
        </View>
      </View>
      <View style={styles.foodsection}>
        <View style={styles.breakfast}>
          <View style={styles.breakfastleft}>
            <View style={styles.breakfastpic}>
              <Image source={require("../../images/userScreenIcons/breakfastpic.png")}></Image>
            </View>
            <Text style={styles.textleft}>Breakfast</Text>
          </View>

          <View style={styles.breakfastright}>
            <View style={styles.breakfastname}>
              <Text style={styles.foodname}>
                Poha + Custard Milk
              </Text>
            </View>
            <View style={styles.breakfastdesc}>
              <Text style={styles.fooddesc}>Truffle, herbs, grana padano, garli aioli
this is a very tasty and light dish for
having in the morning as it is lighht on tthe stomach and puts very little stress on your digestion system</Text>
            </View>
          </View>
        </View>
        <View style={styles.lunch}>
          <View style={styles.lunchleft}>
            <View style={styles.lunchpic}>
              <Image source={require("../../images/userScreenIcons/lunchpic.png")}></Image>
            </View>
            <Text style={styles.textleft}>Lunch</Text>
          </View>

          <View style={styles.lunchright}>
            <View style={styles.lunchname}>
              <Text style={styles.foodname}>Roti + Aloo Sabji</Text>
            </View>
            <View style={styles.lunchdesc}>
              <Text style={styles.fooddesc}>Rotis are among the most healthiest indian foods for lunch you can have it with any sabjis.</Text>
            </View>
          </View>
        </View>
        <View style={styles.dinner}>
          <View style={styles.dinnerleft}>
            <View style={styles.dinnerpic}>
              <Image source={require("../../images/userScreenIcons/dinnerpic.png")}></Image>
            </View>
            <Text style={styles.textleft}>Dinner</Text>
          </View>

          <View style={styles.dinnerright}>
            <View style={styles.dinnername}>
              <Text style={styles.foodname}>Chaawal Dal</Text>
            </View>
            <View style={styles.dinnerdesc}>
              <Text style={styles.fooddesc}>Who doesnt love chaawal dal. North indian people loves to have them almost at every meal. Why wont you?</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.bottomIcons}>
        <TouchableOpacity style={{ marginRight: 60 }}>
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
        <TouchableOpacity>
          <Image
            source={require("../../images/chefScreenIcons/listIcon.png")}
            style={{ width: 40, height: 40 }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Menutable;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    display:"flex",
    backgroundColor:"white"
  },

header:{
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-evenly',
    paddingTop:200

},

weekdays:{
 
    display:'flex',
    flexDirection:'row'

}
});
