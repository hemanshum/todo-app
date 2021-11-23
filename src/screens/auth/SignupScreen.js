import React from "react";
import { StyleSheet, View } from "react-native";
import { TextInput, Button, Title } from "react-native-paper";

const SignupScreen = (props) => {
  const [text, setText] = React.useState("");

  return (
    <View style={styles.container}>
      <Title>Signup Now!</Title>
      <View style={styles.formContainer}>
        <TextInput
          label="Username"
          placeholder="Enter a username"
          value={text}
          onChangeText={(newText) => setText(newText)}
          testID="username"
        />
        <TextInput
          label="Password"
          placeholder="Enter a password"
          value={text}
          onChangeText={(newText) => setText(newText)}
          testID="password"
        />
        <Button
          icon="login"
          mode="contained"
          style={styles.btnSpace}
          contentStyle={styles.btnStyle}
          onPress={() => console.log("Pressed")}
          testID="submit"
        >
          Signup
        </Button>
        <Button
          mode="text"
          style={styles.btnSpace}
          contentStyle={styles.btnStyle}
          onPress={() => props.navigation.navigate("Login")}
          testID="navigateToLogin"
        >
          Already Registred? Login.
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  formContainer: {
    width: "90%",
    marginVertical: 20,
  },
  btnStyle: {
    height: 58,
  },
  btnSpace: {
    marginVertical: 10,
  },
});

export default SignupScreen;
