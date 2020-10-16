import React, { useState } from "react";
import {
  StyleSheet,
  Image,
  ImageBackground,
  Dimensions,
  View,
  ScrollView,
  KeyboardAvoidingView,
  Button,
  TouchableOpacity,
  Text,
  LayoutAnimation
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Screen from "../../components/Screen";
import { Form, FormField, SubmitButton } from "../../components/forms";
import AppText from "../../components/Text";
import * as firebase from 'firebase'
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const height = Dimensions.get("screen").height;

const validationSchema = ''
let errorMessage = false
function RegisterScreen({ navigation }) {

  LayoutAnimation.easeInEaseOut()
  const handleSubmit = async ({ email, password, fullName }) => {

    try {
        firebase 
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .then(userCredentials => {
               return userCredentials.user.updateProfile({
                   displayName: fullName
               })
            })
            .catch (error => console.log(error))
            firebase.auth().onAuthStateChanged(function(user) {
                if (user) {
                 console.log('user is signed in')
                } else {
                 console.log('user is not signed in')
                 errorMessage = true
                }
              });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={{ backgroundColor: "#fff", flex: 1, width: "100%" }}>
      <View style={styles.titleContainer}>
        <AppText style={styles.text}>Sign Up</AppText>
      </View>
      
      <View style={styles.SVGcontainer}>
        <Image
          source={require("./../../assets/signin.png")}
          style={{ width: 430, height: 259 }}
        />
      </View>
      <View style={styles.formContainer}>
        <Screen style={styles.container}>
          <Form
            initialValues={{ email: "", password: "", confirmpassword: "" }}
            onSubmit={handleSubmit}
            validationSchema={validationSchema}
          >
            <FormField
              placeholder="Full Name"
              autoCapitalize="none"
              autoCorrect={false}
              textContentType="fullName"
              name="fullName"
            />
            <FormField
              placeholder="Email"
              autoCapitalize="none"
              autoCorrect={false}
              keyboardType="email-address"
              textContentType="emailAddress"
              name="email"
            />
            <FormField
              placeholder="Password"
              autoCapitalize="none"
              autoCorrect={false}
              secureTextEntry={true}
              textContentType="password"
              name="password"
            />
            {errorMessage && (
              <AppText
                style={[
                  styles.haveAccountText,
                  {
                    textAlign: "center",
                    color: "red",
                    fontSize: 16,
                    paddingVertical: 10,
                  },
                ]}
              >
                Incorrect credentials, please try again
              </AppText>
            )}

            <SubmitButton style={styles.registerButton} title="Register" />
            <View style={styles.haveAccountContainer}>
              <AppText style={styles.haveAccountText}>Have an account?</AppText>
              <View style={styles.loginText}>
                <Button
                  color={"#F9A826"}
                  title="Log in"
                  onPress={() => navigation.navigate("Login")}
                />
              </View>
            </View>
          </Form>
        </Screen>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  orButton: {
    color: "#A8A8A8",
    textAlign: "center",
    marginTop: 25,
  },
  icon: {
    left: 5,
    top: 4,
  },
  iconContainer: {
    backgroundColor: "white",
    height: 40,
    width: 40,
    top: 8,
    borderRadius: 20,
    left: 60,
  },
  googleButton: {
    marginTop: 15,
    left: 65,
    color: "#2D3748",
    fontFamily: "Avenir",
    fontSize: 18,
    fontWeight: "bold",
  },
  googleSignUp: {
    flexDirection: "row",
    backgroundColor: "#F8FAFB",
    borderWidth: 2,
    borderColor: "#CECECE",
    borderRadius: 12,
    height: 60,
  },
  haveAccountContainer: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "center",
  },
  haveAccountText: {
    color: "#2D3748",
  },
  loginText: {
    color: "#3D8AFF",
    top: -8,
  },
  titleContainer: {
    flex: 0.2,
    marginTop: 40,
  },
  registerButton: {
    borderRadius: 12,
    marginTop: 20,
    backgroundColor: "#F9A826",
    height: 60,
    fontSize: 24,
    shadowOffset: { width: 0, height: 2 },
    shadowColor: "black",
    shadowOpacity: 0.25,
  },
  googleContainer: {
    flex: 0.1,
    padding: 30,
    backgroundColor: '#fff'
  },
  formContainer: {
    padding: 30,
    flex: 0.6,
  },
  text: {
    textAlign: "center",
    fontSize: 55,
    fontWeight: "bold",
    top: 40,
  },
  background: {
    flex: 1,
    justifyContent: "center",
  },
});

export default RegisterScreen;