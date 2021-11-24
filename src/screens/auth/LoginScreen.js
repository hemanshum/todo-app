import React from "react";
import { StyleSheet, View } from "react-native";
import { TextInput, Button, Title, Caption } from "react-native-paper";
import { useForm, Controller } from "react-hook-form";

const LoginScreen = ({
  onSubmit = (data) => console.log(data),
  navigation,
}) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      username: "",
      password: "",
    },
  });

  // const onSubmit = (data) => console.log(data)

  return (
    <View style={styles.container}>
      <Title>Login Now!</Title>
      <View style={styles.formContainer}>
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              label="Username"
              error={errors.username}
              placeholder="Enter a username"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              testID="username"
            />
          )}
          name="username"
        />
        {errors.username && (
          <Caption style={styles.errStyle}>This field is required</Caption>
        )}

        <Controller
          control={control}
          rules={{
            required: true,
            minLength: 6,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              label="Password"
              error={errors.password}
              secureTextEntry
              placeholder="Enter a password"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              testID="password"
            />
          )}
          name="password"
        />
        {errors.password && (
          <Caption style={styles.errStyle}>
            {errors.password.type === "minLength"
              ? "require minimum character 6"
              : "This field is required"}
          </Caption>
        )}
        <Button
          icon="login"
          mode="contained"
          style={styles.btnSpace}
          contentStyle={styles.btnStyle}
          onPress={handleSubmit(onSubmit)}
          testID="submit"
        >
          Login
        </Button>
        <Button
          mode="text"
          style={styles.btnSpace}
          contentStyle={styles.btnStyle}
          onPress={() => navigation.navigate("Signup")}
          testID="navigateToSignup"
        >
          New user? Signup.
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
  errStyle: {
    color: "red",
  },
});

export default LoginScreen;
