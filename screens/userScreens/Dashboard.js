import {
    Image,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
    ScrollView
} from "react-native";

import React, { useState } from "react";


const Dashboard = ({ navigation }) => {


    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.location}>
                    <Text style={styles.deliveryadd}>Delivery address</Text>

                    <Text style={styles.deliverylocation}>327-21 gurgaon</Text>
                </View>

                <View style={styles.profileIcon}>

                    <TouchableOpacity onPress={() => { }}>
                        <Image
                            source={require("../../images/userScreenIcons/usericon.png")}
                            style={{ width: 40, height: 40 }}
                        />
                    </TouchableOpacity>
                </View>


            </View>

            <View style={styles.searchbar}>

                <TextInput style={styles.searchInput} placeholder="Search for healthy food..." />

            </View>
            <View style={styles.section}>
                <View style={styles.firstsection}>
                    <View style={styles.homechefsarena}>

                        <Text style={styles.topcheftext}>
                            Top homechefs nearby --
                        </Text>
                        <View style={styles.topchefimages}>

                            <TouchableOpacity onPress={() => { }}>
                                <Image
                                    source={require("../../images/userScreenIcons/chefimage1.png")}
                                    style={{ width: 100, height: 100 }}
                                />
                            </TouchableOpacity>

                            <TouchableOpacity onPress={() => { }}>
                                <Image
                                    source={require("../../images/userScreenIcons/chefimage2.png")}
                                    style={{ width: 100, height: 100 }}
                                />
                            </TouchableOpacity>

                            <TouchableOpacity onPress={() => { }}>
                                <Image
                                    source={require("../../images/userScreenIcons/chefimage3.png")}
                                    style={{ width: 100, height: 100 }}
                                />
                            </TouchableOpacity>

                            <View style={styles.rightarrowicon}>

                            </View>

                            <Text style={styles.Viewall}>
                                View all
                            </Text>

                        </View>



                    </View>

                </View>

                <ScrollView>

                <View style={styles.secondsection}>
                    <View style={styles.rasoi}>
                        <Text style={styles.rasoiText}>Nearby rasoi -</Text>

                        <View style={styles.backgroundBannerImg}>
                            <View style={styles.rasoibackground}>

                                <TouchableOpacity onPress={() => {navigation.navigate("PatientConfirm")}}>
                                    <Image
                                        source={require("../../images/userScreenIcons/rasoibackground.png")}
                                        style={{ width: "100%", height: 100 }}
                                    />
                                </TouchableOpacity>
                            </View>

                            <View style={styles.rasoidetails}>

                                <View style={styles.rasoipic}>
                                    <TouchableOpacity onPress={() => { }}>
                                        <Image
                                            source={require("../../images/userScreenIcons/chefdp.png")}
                                            style={{ width: 70, height: 70 }}
                                        />
                                    </TouchableOpacity>
                                </View>

                                <View style={styles.rasoinfo}>

                                    <Text style={styles.rasoiname}>HomeChef Manju</Text>


                                    <View style={styles.rasoiRatings}>
                                        <Text style={styles.ratingnumber}>4.3</Text>
                                        <Text style={styles.reviews}>Reviews</Text>

                                    </View>
                                </View>

                            </View>




                            {/*  2 */}






                        </View>


                    </View>
                </View>

                <View style={styles.secondsection}>
                    <View style={styles.rasoi}>
                    
                        

                        <View style={styles.backgroundBannerImg}>
                            <View style={styles.rasoibackground}>

                                <TouchableOpacity onPress={() => { }}>
                                    <Image
                                        source={require("../../images/userScreenIcons/rasoibackground2.png")}
                                        style={{ width: "100%", height: 100 }}
                                    />
                                </TouchableOpacity>
                            </View>

                            <View style={styles.rasoidetails}>

                                <View style={styles.rasoipic}>
                                    <TouchableOpacity onPress={() => { }}>
                                        <Image
                                            source={require("../../images/userScreenIcons/chefdp.png")}
                                            style={{ width: 70, height: 70 }}
                                        />
                                    </TouchableOpacity>
                                </View>

                                <View style={styles.rasoinfo}>

                                    <Text style={styles.rasoiname}>HomeChef Manju</Text>


                                    <View style={styles.rasoiRatings}>
                                        <Text style={styles.ratingnumber}>4.3</Text>
                                        <Text style={styles.reviews}>Reviews</Text>

                                    </View>
                                </View>

                            </View>




                            






                        </View>


                    </View>
                </View>
                </ScrollView>
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
                <TouchableOpacity style={{ marginRight: 60 }} >
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

    )
}

export default Dashboard;


const styles = StyleSheet.create({

    container: {
        padding: 40,
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "flex-start",


    },

    section: {
        display: "flex",
        justifyContent: 'center',
        alignItems: 'center',

    },

    secondsection:{
        paddingBottom:80,

    },
    rasoidetails: {


    },

    bottomIcons: {
        flexDirection: 'row',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute', //Here is the trick
        bottom: 0,
        backgroundColor:'white'

    },

    header: {

        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"

    },
    deliveryadd: {

        fontSize: 17,
        fontWeight: "bold",

    },


    searchInput: {

        width: '100%',
        paddingLeft: 0,
        fontSize: 16

    },

    section: {
        marginTop: 10,
        marginRight: 20
    },

    searchbar: {

        marginTop: 30

    },

    rasoibackground: {

        marginTop: 10,
        marginLeft: 15,
        position: "relative"
    },

    topcheftext: {

        fontWeight: "bold",
        fontSize: 18,
        marginBottom: 5,
        marginTop: 4

    },

    rasoipic: {


        position: "absolute",
        left: 30,
        top: -30


    },

    topchefimages: {
        display: "flex",
        flexDirection: "row",
        marginTop: 15

    },

    rasoiText: {

        fontWeight: "bold",
        fontSize: 18,
        marginTop: 10

    },

    rasoinfo: {

        position: "absolute",
        left: 20,
        top: 50,



    },

    rasoiname: {

        fontWeight: "bold",
        fontSize: 15,

    },

    rasoiRatings: {
        
        left:260,
        bottom:30


    }



})