import {
    ScrollView,
    Image,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
} from "react-native";
import React, { useState } from "react";

import { Form, FormItem } from "react-native-form-component";
import { SelectList } from "react-native-dropdown-select-list";

const ShowMenu = ({ navigation }) => {


    return (
        <View style={styles.container}>

            <View style={styles.cardContainer}>
                <Image source={require('../../images/chefScreenIcons/chefBanner.webp')} style={styles.bannerImage} />

                <View>
                    <Text style={{ fontWeight: '600', fontSize: 20 }}>Satyam Bhardwaj</Text>
                    <Text>chef id : 1233</Text>
                    <Text>user ratings : 4.5</Text>
                </View>
            </View>

            <Text style={{ fontSize: 32, fontStyle: "italic" }}>Menu Table</Text>

            <ScrollView style={styles.scrollviewContainer} contentContainerStyle={styles.scrollContent}>

                <View style={styles.listItems}>
                    <Text style={styles.listItemDay}>
                        Monday
                    </Text>

                    <Text style={styles.listItemName}>Shahi panner with 2 roti</Text>
                </View>

                <View style={styles.listItems}>
                    <Text style={styles.listItemDay}>
                        Tuesday
                    </Text>

                    <Text style={styles.listItemName}>Daal makhni with Naan</Text>
                </View>

                <View style={styles.listItems}>
                    <Text style={styles.listItemDay}>
                        Wednesday
                    </Text>

                    <Text style={styles.listItemName}>Kheer pudi</Text>
                </View>

                <View style={styles.listItems}>
                    <Text style={styles.listItemDay}>
                        Thursday
                    </Text>

                    <Text style={styles.listItemName}>Aloo matar with parathe</Text>
                </View>

                <View style={styles.listItems}>
                    <Text style={styles.listItemDay}>
                        Friday
                    </Text>

                    <Text style={styles.listItemName}>Rajma Chawal</Text>
                </View>

                <View style={styles.listItems}>
                    <Text style={styles.listItemDay}>
                        Saturday
                    </Text>

                    <Text style={styles.listItemName}>Butter Chicken</Text>
                </View>

                <View style={styles.listItems}>
                    <Text style={styles.listItemDay}>
                        Sunday
                    </Text>

                    <Text style={styles.listItemName}>Shahi panner with 2 roti</Text>
                </View>
            </ScrollView>


            <View style={styles.bottomIcons}>
                <TouchableOpacity style={{ marginRight: 45 }}>
                    <Image
                        source={require("../../images/chefScreenIcons/homeIcon.png")}
                        style={{ width: 40, height: 40 }}
                    />
                </TouchableOpacity>
                <TouchableOpacity style={{ marginRight: 45 }}>
                    <Image
                        source={require("../../images/chefScreenIcons/addIcon.png")}
                        style={{ width: 40, height: 40 }}
                    />
                </TouchableOpacity>
                <TouchableOpacity style={{ marginRight: 45 }}>
                    <Image
                        source={require("../../images/chefScreenIcons/cardIcon.png")}
                        style={{ width: 40, height: 40 }}
                    />
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{ navigation.navigate("ShowOrders")}}>
                    <Image
                        source={require("../../images/chefScreenIcons/listIcon.png")}
                        style={{ width: 40, height: 40 }}
                    />
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default ShowMenu;

const styles = StyleSheet.create({
    banner: {
        borderRadius: 100,
    },

    bottomIcons: {
        display: "flex",
        flexDirection: "row",

    },

    bannerImage: {

        width: 135,
        height: 135,
        borderRadius: 50,
        marginRight: 20,

    }

    ,
    container: {
        flex: 1,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
    },


    cardContainer: {

        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 50,
        padding: 10
    }
    ,

    listItems: {
        paddingBottom: 10,

    }
    ,

    listItemDay: {

        paddingBottom: 5,
        paddingLeft: 10

    }
    ,




    listItemName: {

        backgroundColor: '#F0F0F0',
        padding: 10,
        width: 300,
        borderRadius: 30,
        borderColor: 'black',
        borderWidth: 0.8,
        paddingLeft: 35


    }
    ,



    scrollviewContainer: {
        paddingTop: 15,
        width: "99%",
        height: 200,


    },

    scrollContent: {


        justifyContent: 'center',
        alignItems: 'center'
    }



});
