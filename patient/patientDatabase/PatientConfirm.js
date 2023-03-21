import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'

const PatientConfirm = ({navigation}) => {
    return (
        <View style={styles.container}>


            <Text style={{fontSize:32,fontWeight:'600', paddingBottom:40}}>Are You a Patient ?</Text>


            <View style={styles.buttonContainer}>


                <TouchableOpacity style={styles.button} onPress = {()=>{navigation.navigate("Patient1")}}>

                    <Text style={styles.buttonText} >Yes</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress = {()=>{navigation.navigate("Menutable")}}>
                    <Text style = {styles.buttonText}>No</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default PatientConfirm

const styles = StyleSheet.create({

    container: {
        display: 'flex',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    button:{


        backgroundColor: "tomato",
    padding: 12,
    marginRight: 30,
    borderRadius: 20,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width:270,
    height:60,
    marginBottom:50

       
    },

    buttonText:{

     color:"white",
     fontWeight:"bold",
     fontSize:18

    }
})