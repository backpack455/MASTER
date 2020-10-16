
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
function LoginScreen({ navigation }) {
  const [loginFailed, setLoginFailed] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);

  LayoutAnimation.easeInEaseOut()
  const handleSubmit = async ({ email, password }) => {
    try {
      firebase
      .auth().
      signInWithEmailAndPassword(email, password)
      .catch(error=> console.log(error))
      firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
         console.log('user is signed in')
        } else {
         console.log('user is not signed in')
         
        }
      })

    } catch (error) {
      console.error(error);
    }
  }
    
  return (
    <View
      style={{ backgroundColor: "#fff", flex: 1, width: "100%", top: 30 }}
    >
      <View style={styles.titleContainer}>
        <AppText style={styles.text}>Login</AppText>
      </View>
      
      <View style={styles.SVGcontainer}>
        <Image
          source={require("./../../assets/auth.png")}
          style={{ width: 373, height: 225 }}
        />
      </View>
      <View style={styles.formContainer}>
        <Screen style={styles.container}>
          <Form
            initialValues={{ email: "", password: "" }}
            onSubmit={handleSubmit}
            validationSchema={validationSchema}
          >
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

            <SubmitButton style={styles.registerButton} title="Login" />
            <View style={styles.haveAccountContainer}>
              <AppText style={styles.haveAccountText}>
                Don't have an account?
              </AppText>
              <View style={styles.loginText}>
                <Button
                  color={"#F9A826"}
                  title="Sign up"
                  onPress={() => navigation.navigate("Register")}
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
  SVGcontainer: {
    justifyContent: "center",
    alignItems: "center",
    top: 20,
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
    color: "#EA765D",
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

export default LoginScreen;