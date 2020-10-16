import React, { Component, useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Image,
} from "react-native";
import Firebasekeys from "../../config";
import * as firebase from "firebase";
import "firebase/firestore";

import { Feather } from "@expo/vector-icons";

let firebaseConfig = Firebasekeys;
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default class FormExample extends Component {
  state = {
    name: "",
    title: "",
    date: "",
    efforts: "",
    title: "",
    phonenumber: "",
    emailaddress: "",
    supplies: "",
  };

  submissionHandler = async (uri) => {
    //let lectureName = JSON.parse(this.state.title)
    const db = firebase.firestore().collection('Lectures').doc(this.state.title)
    
    firebase.firestore().collection("Lectures")
    .get()
    .then(querySnapshot => {
      db.set({
        notes: {

        },
        title: this.state.title,
      });
      db.collection('notes').add({notes: 'Here is an example note!'})
    })
    this.props.navigation.push('Select Lecture')
  };

  onChangeTitle = (text) => {
    this.setState({
      title: text,
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.close}
          onPress={() => this.props.navigation.goBack()}
        >
          <Feather style={styles.closeText} name="x" size={35} />
        </TouchableOpacity>
        <Text style={styles.title}>Create a Folder</Text>
        <View style={styles.SVGcontainer}>
          <Image
            source={require("./../../assets/insert.png")}
            style={{ width: 350, height: 275 }}
            resizeMode="contain"
          />
        </View>
        <View style={styles.buttonContainer}>
          <TextInput
            style={styles.textInput}
            placeholder="ENTER THE NAME OF LECTURE"
            onChangeText={this.onChangeTitle}
            autoCapitalize="characters"
          />
          <TouchableOpacity
            style={styles.lecture}
            onPress={this.submissionHandler}
          >
            <Text style={styles.buttonText}>Create Lecture</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  close: {
    backgroundColor: "#fff",
    width: 60,
    height: 60,
    borderRadius: 120,
    justifyContent: "center",
    top: 30,
    left: 150,
  },
  closeText: {
    fontFamily: "Avenir",
    textAlign: "center",
    color: "#DEDEDE",
    fontWeight: "bold",
    textAlignVertical: "center",
  },
  title: {
    textAlign: "center",
    fontSize: 45,
    fontWeight: "bold",
    top: 88,
    fontFamily: "Avenir",
    marginBottom: 35,
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
  lecture: {
    backgroundColor: "#F9A826",
    width: 313,
    height: 65,
    borderRadius: 12,
    justifyContent: "center",
    shadowOffset: { width: 0, height: 2 },
    shadowColor: "black",
    shadowOpacity: 0.25,
    top: 70,
  },
  buttonContainer: {
    alignItems: "center",
    flex: 0.3,
    padding: 30,
  },
  SVGcontainer: {
    flex: 0.5,
    justifyContent: "center",
    alignItems: "center",
    top: 50,
  },
});
