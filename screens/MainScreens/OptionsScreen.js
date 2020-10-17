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
        <TouchableOpacity onPress={()=> navigation.navigate('Manual Input')}>
          <View style={styles.options1Container}>
          <Image
          source={require("./../../assets/icons8-keyboard-96.png")}
          style={{bottom: 5,}}
        /> 
            <Text style={styles.option1Text}>Input</Text>
            <Text style={styles.option1Text}>Text</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=> navigation.navigate('Problem Results')}>
          <View style={styles.options2Container}>
          <Image
          source={require("./../../assets/icons8-cameras-96.png")}
        /> 
            <Text style={styles.option2Text}>Take a</Text>
            <Text style={styles.option2Text}>Picture</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.options3Container}>
          <Image
          source={require("./../../assets/icons8-microphone-96.png")}
          style={{ left: -15,}}
        /> 
            <Text style={styles.option3Text}>Record</Text>
            <Text style={styles.option3Text}>Question</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.options4Container}>
            <View style={{top: 30}}>
            <Image
            source={require("./../../assets/icons8-book-and-pencil-96.png")}
            style={{ height: 58, width: 50, left: 5, top: -5}}
          /> 
              <Text style={styles.option4Text}>Draw</Text>
              <Text style={styles.option4Text}>Question</Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={()=> navigation.navigate('Home Screen')}>
        <Image
          source={require("./../../assets/icons8-back-arrow-100.png")}
          style={{top: 80, width: 55, height: 55}}
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
  },
  options1Container: {
    padding: 10,
    height: 75,
    width: 180, 
    borderRadius: 10, 
    backgroundColor: "#F9A826",
    right: 90,
    marginRight: 10,
    marginBottom: 40, 
  },
  option1Text: {
    left: 90,
    color: "#fff",
    fontSize: 20,
    bottom: 60,
    fontWeight: "bold",
  },
  options2Container: {
    padding: 10,
    height: 75,
    width: 180, 
    borderRadius: 10, 
    backgroundColor: "#F9A826",
    right: -100,
    bottom: 115,
    marginBottom: 5,
  },
  option2Text: {
    left: 70,
    color: "#fff",
    fontSize: 20,
    bottom: 55,
    fontWeight: "bold",
  },
  options3Container: {
    padding: 10,
    height: 75,
    width: 180, 
    borderRadius: 10, 
    backgroundColor: "#F9A826",
    left: -95,
    bottom: 110,
    marginTop: 35,
    marginTop: 10,
  },
  option3Text: {
    left: 60,
    color: "#fff",
    fontSize: 20,
    bottom: 60,
    fontWeight: "bold",
  },
  options4Container: {
    padding: 10,
    height: 77,
    width: 180, 
    borderRadius: 10, 
    backgroundColor: "#F9A826",
    right: -100,
    bottom: 220,
    marginTop: 35,
    justifyContent: 'center'
  },
  option4Text: {
    left: 65,
    color: "#fff",
    fontSize: 20,
    bottom: 60,
    fontWeight: "bold"
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
