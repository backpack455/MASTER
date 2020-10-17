import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import Firebasekeys from "../../config";
import * as firebase from "firebase";
import "firebase/firestore";

let firebaseConfig = Firebasekeys;
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
// firebase.auth().onAuthStateChanged(user => {

//   const db = firebase.firestore().collection('Lectures').doc(firebase.auth().currentUser.uid)
//   if(user){
//       firebase.firestore()
//       .collection('Lectures')
//       .where('uid', '==', `${user.uid}`)
//       .get()
//       .then(querySnapshot => {
//           console.log('User exists: ', querySnapshot.size);
//           if(querySnapshot.empty){

//           db.set({
//               name: user.displayName,
//               uid: firebase.auth().currentUser.uid
//               // requestedComplaints: 0,
//               // pendingComplaints: 0,
//               // complaintsSubmitted: 0,
//           })
          
//           }
//           if (querySnapshot.exists) {
//             console.log('User data: ', querySnapshot.data());
//           }
//       }
      
//       );
//       // firebase.firestore()
//       // .collection('users')
//       // .where('uid', '==', user.uid)
//       // .onSnapshot(querySnapshot => {
//       //     const item =  querySnapshot.docs.map(doc => {
//       //         currentUserpoints = doc.data().points
//       //         console.log('hello', doc.data().points)  
//       //     })
//       // })
//       // firebase.firestore()
//       // .collection('complaints')
//       // // Filter results
//       // .get()
//       // .then(querySnapshot => {
//       //     const item =  querySnapshot.docs.map(doc => {
//       //         if(!querySnapshot.empty)
//       //         console.log('THis many complaints', querySnapshot.size);
//       //         pendingrequests =  1
//       //         totalrequests = 1
//       //     })
//       // })
//   }
// })
export default function App({navigation}) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello!</Text>
      <View style={styles.SVGcontainer}>
        <Image
          source={require("./../../assets/math.png")}
          style={{ width: 306, height: 288 }}
        />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.subtext}>
          MASTER makes learning, collaboration and step by step explanations easy. Choose an option to get started!
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.picture}
          onPress={() => navigation.navigate("Option Navigation")}
        >
          <Text style={styles.buttonText}>Solve a problem</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.lecture}
          onPress={() => navigation.navigate("Discussions")}
        >
          <Text style={styles.buttonText}>Chat with peers</Text>
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
    fontSize: 55,
    fontWeight: "bold",
    top: 88,
    fontFamily: "Avenir",
  },
  buttonText: {
    fontFamily: "Avenir",
    fontSize: 18,
    textAlign: "center",
    color: "white",
    fontWeight: "bold",
    textAlignVertical: "center",
  },
  Button: {
    backgroundColor: "#3D8AFF",
    width: 271,
    height: 58,
    borderRadius: 7,
    justifyContent: "center",
    top: 30,
    shadowOffset: { width: 0, height: 2 },
    shadowColor: "black",
    shadowOpacity: 0.25,
  },
  picture: {
    backgroundColor: "#F9A826",
    width: 234,
    height: 56,
    borderRadius: 12,
    justifyContent: "center",
    top: 30,
    shadowOffset: { width: 0, height: 2 },
    shadowColor: "black",
    shadowOpacity: 0.25,
  },
  lecture: {
    backgroundColor: "#F9A826",
    width: 234,
    height: 56,
    borderRadius: 12,
    justifyContent: "center",
    shadowOffset: { width: 0, height: 2 },
    shadowColor: "black",
    shadowOpacity: 0.25,
    top: 50,
  },
  buttonContainer: {
    alignItems: "center",
    flex: 0.3,
    padding: 30,
    top: 0,
  },
  SVGcontainer: {
    flex: 0.5,
    justifyContent: "center",
    alignItems: "center",
    top: 50,
  },
  subtext: {
    color: "#A8A8A8",
    fontFamily: "Avenir",
    fontSize: 18,

    textAlign: "left",
    top: 30,
    height: 100,
    width: 267,
  },
  textContainer: {
    flex: 0.15,
    padding: 10,
    top: 15,
  },
});
