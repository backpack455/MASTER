import React from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  LayoutAnimation,
} from "react-native";
console.disableYellowBox=true
function WelcomeScreen({ navigation }) {
  LayoutAnimation.easeInEaseOut();
  return (
    <View style={styles.container}>
      <View style={styles.SVGcontainer}>
        <Image
          source={require("./../../assets/teaching.png")}
          style={{ width: 430, height: 259 }}
        />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>Welcome to MASTER</Text>
        <Text style={styles.subtext}>Where students achieve mastery</Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.registerButton}
          onPress={() => navigation.navigate("Register")}
        >
          <Text style={styles.registerText}>REGISTER</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.loginButton}
          onPress={() => navigation.navigate("Login")}
        >
          <Text style={styles.loginText}>LOGIN</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  loginText: {
    fontFamily: "Avenir",
    fontSize: 18,
    textAlign: "center",
    color: "black",
    fontWeight: "bold",
    textAlignVertical: "center",
  },
  loginButton: {
    backgroundColor: "white",
    width: 271,
    height: 58,
    borderRadius: 7,
    justifyContent: "center",
    top: 30,
    shadowOffset: { width: 0, height: 2 },
    shadowColor: "black",
    shadowOpacity: 0.25,
  },
  registerText: {
    fontFamily: "Avenir",
    fontSize: 18,
    textAlign: "center",
    color: "white",
    fontWeight: "bold",
    textAlignVertical: "center",
  },
  registerButton: {
    backgroundColor: "#F9A826",
    width: 271,
    height: 58,
    borderRadius: 7,
    justifyContent: "center",
    shadowOffset: { width: 0, height: 2 },
    shadowColor: "black",
    shadowOpacity: 0.25,
  },
  buttonContainer: {
    alignItems: "center",
    flex: 0.3,
    padding: 30,
    top: 0,
  },
  subtext: {
    color: "#5A5A5A",
    fontFamily: "Avenir",
    fontSize: 18,
    textAlign: "center",
    top: 30,
  },
  title: {
    fontFamily: "Avenir",
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
  textContainer: {
    flex: 0.15,
    padding: 10,
    top: 15,
  },
  SVGcontainer: {
    flex: 0.5,
    justifyContent: "center",
    alignItems: "center",
    top: 70,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});

export default WelcomeScreen;
