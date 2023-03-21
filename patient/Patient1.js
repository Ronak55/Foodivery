import { StyleSheet, Text, View, ScrollView } from "react-native";
import React, { useState } from "react";
import Data from "./patientDatabase/data.json"
import { Form, FormItem } from "react-native-form-component";
import { Image } from "react-native";

const HomeScreen = ({ navigation }) => {
  const [patientID, setPatientID] = useState();
  const [hospitalName, setHospitalName] = useState("");
  const [hospitalID, setHospitalID] = useState("");
  const [doctorName, setDoctorName] = useState("");

  const handleOnChange = (event) => {

    setPatientID(event.nativeEvent.text);
    
  };

  const handleOnHname = (event)=>{

    setHospitalName(event.nativeEvent.text);
  }

  const handleOnHid = (event)=>{

  setHospitalID(event.nativeEvent.text);
  }

  const handleOnDname = (event)=>{

    setDoctorName(event.nativeEvent.text);
  }

  const handleSubmit = () => {
    const pid = parseInt(patientID);
    const hid = parseInt(hospitalID);

    const matchingPatient = Data.find(
      (item) =>
        item.patient_id === pid &&
        item.hospital_name === hospitalName &&
        item.hospital_code === hid &&
        item.doctor_name
    );

    if (matchingPatient) {
      navigation.navigate("Patientyes");
    } else {
      navigation.navigate("Patientno");
    }
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.bannerContainer}>
        <Image
          source={require("./patientDatabase/bannerImg.png")}
          style={{ width: 300, height: 200 }}
        />
      </View>

      <View style={styles.headingContainer}>
        <Text style={styles.headingText}>
          Fill this form to get discount as a patient
        </Text>
      </View>

      <Form
        buttonText="Submit Form"
        buttonStyle={styles.submitButtonStyle}
        onButtonPress={handleSubmit}
      >
        <FormItem
          label="Patient ID"
          placeholder="e.g , 10023"
          style={styles.formItems}
          textInputStyle={{ marginLeft: 20 }}
          labelStyle={{ marginLeft: 30 }}
          value={patientID}
          onChange={handleOnChange}
        />

        <FormItem
          placeholder="Hospital Name"
          label="Hospital Name"
          style={styles.formItems}
          textInputStyle={{ marginLeft: 20 }}
          labelStyle={{ marginLeft: 30 }}
          value={hospitalName}
          onChange={handleOnHname}
        />
        <FormItem
          label="Hospital ID"
          placeholder="eg , AD012"
          style={styles.formItems}
          textInputStyle={{ marginLeft: 20 }}
          labelStyle={{ marginLeft: 30 }}
          value={hospitalID}
          onChange={handleOnHid}
        />
        <FormItem
          label="Doctor Name"
          placeholder="eg , Dr. Krishna Murti"
          style={styles.formItems}
          textInputStyle={{ marginLeft: 20 }}
          labelStyle={{ marginLeft: 30 }}
          value={doctorName}
          onChange={handleOnDname}
        />
      </Form>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  bannerContainer: {
    margin: 10,
  },
  headingText: {
    fontSize: 18,
    fontWeight: "700",
  },
  headingContainer: {
    margin: 10,
  },

  mainContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    backgroundColor: "white",
  },
  submitButtonStyle: {
    backgroundColor: "#0077B6",
    width: 300,
    borderRadius: 25,
    marginLeft: 15,
    marginBottom: 20,
  },

  formItems: {
    width: "90%",
    marginLeft: 2,
    backgroundColor: "#F0F0F0",
    borderRadius: 25,
  },
});