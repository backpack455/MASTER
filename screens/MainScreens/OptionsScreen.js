import React, { useState, useEffect } from 'react';
import { ActivityIndicator } from 'react-native'
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import Firebasekeys from "../../config";
import * as firebase from "firebase";
import "firebase/firestore";

import { FontAwesome5, AntDesign } from "@expo/vector-icons";

let firebaseConfig = Firebasekeys;
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default function App({navigation}) {
  const [loading, setLoading] = useState(true); // Set loading to true on component mount
  const [users, setUsers] = useState([]); // Initial empty array of users

  useEffect(() => {
    const subscriber = firebase.firestore()
      .collection('Lectures')
      .onSnapshot(querySnapshot => {
        const users = [];
        querySnapshot.forEach(documentSnapshot => {
          users.push({
            ...documentSnapshot.data(),
            key: documentSnapshot.id,
          });
        });
  
        setUsers(users);
        setLoading(false);
      });
  
    // Unsubscribe from events when no longer in use
    return () => subscriber();
  }, []);

  if (loading) {
    return <ActivityIndicator />;
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Choose an option</Text>
      <Image
          source={require("./../../assets/undraw_Preferences_re_49in.png")}
          style={{ width: 350, height: 290, top: 75,}}
        />
        <View style={styles.buttonContainer}>
        <TouchableOpacity>
          <View style={styles.options1Container}>
          <Image
          source={require("./../../assets/icons8-keyboard-96.png")}
          style={{ height: 90, bottom: 10}}
        /> 
            <Text style={styles.option1Text}>Input</Text>
            <Text style={styles.option1Text}>Text</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.options2Container}>
          <Image
          source={require("./../../assets/icons8-cameras-96.png")}
          style={{ height: 90}}
        /> 
            <Text style={styles.option2Text}>Take a</Text>
            <Text style={styles.option2Text}>Picture</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.options3Container}>
          <Image
          source={require("./../../assets/icons8-microphone-96.png")}
          style={{ height: 90, left: -15,}}
        /> 
            <Text style={styles.option3Text}>Record</Text>
            <Text style={styles.option3Text}>Question</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.options4Container}>
          <Image
          source={require("./../../assets/icons8-book-and-pencil-96.png")}
          style={{ height: 70, left: -10, top: 10,}}
        /> 
            <Text style={styles.option4Text}>Draw</Text>
            <Text style={styles.option4Text}>Question</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={()=> navigation.navigate('Start Lecture')}>
        <Image
          source={require("./../../assets/icons8-back-arrow-100.png")}
          style={{top: 35,}}
        /> 
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  title: {
    textAlign: "center",
    fontSize: 40,
    fontWeight: "bold",
    top: 88,
    fontFamily: "Avenir",
    marginBottom: 35,
  },
  subtitle: {
    color: "#A8A8A8",
    fontSize: 25,
    top: 65,
  },
  buttonText: {
    fontFamily: "Avenir",
    fontSize: 20,
    textAlign: "center",
    color: "white",
    fontWeight: "bold",
    textAlignVertical: "center",
  },
  textInput: {
    height: 65,
    width: 313,
    borderColor: "#fff",
    borderWidth: 1,
    borderRadius: 15,
    textAlign: "center",
    color: "#BBBBBB",
    backgroundColor: "#ECECEC",
    fontWeight: "bold",
    top: 55,
  },
  buttonContainer: {
    alignItems: "center",
    flex: 0.3,
    padding: 80,
    top: 30,
  },
  options1Container: {
    padding: 10,
    height: 110,
    width: 180, 
    borderRadius: 10, 
    backgroundColor: "#F9A826",
    right: 90,
    marginRight: 10,
  },
  option1Text: {
    left: 100,
    color: "#fff",
    fontSize: 25,
    bottom: 80,
    fontWeight: "bold",
  },
  options2Container: {
    padding: 10,
    height: 110,
    width: 180, 
    borderRadius: 10, 
    backgroundColor: "#F9A826",
    right: -100,
    bottom: 110,
  },
  option2Text: {
    left: 85,
    color: "#fff",
    fontSize: 25,
    bottom: 80,
    fontWeight: "bold",
  },
  options3Container: {
    padding: 10,
    height: 110,
    width: 180, 
    borderRadius: 10, 
    backgroundColor: "#F9A826",
    left: -95,
    bottom: 110,
    marginTop: 10,
  },
  option3Text: {
    left: 60,
    color: "#fff",
    fontSize: 25,
    bottom: 80,
    fontWeight: "bold",
  },
  options4Container: {
    padding: 10,
    height: 110,
    width: 180, 
    borderRadius: 10, 
    backgroundColor: "#F9A826",
    right: -100,
    bottom: 220,
  },
  option4Text: {
    left: 65,
    color: "#fff",
    fontSize: 25,
    bottom: 60,
    fontWeight: "bold",
  },
  goBack: {
    top: 2,
    left: 3,
    color: "#fff",
  },
  noteContainer: {
    top: 150,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 50,
    backgroundColor: "#ECECEC",
    borderRadius: 10,
    marginBottom: 20,
    width: 350,
    textAlign: "left"
  },
  trash: {
    right: -30,
    bottom: 20,
    position: "absolute",
    color: "#F9A826",
  },
});
