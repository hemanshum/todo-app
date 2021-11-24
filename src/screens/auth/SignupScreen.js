import React from "react";
import { StyleSheet, View } from "react-native";
import { TextInput, Button, Title, Caption } from "react-native-paper";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object({
  username: yup.string().required(),
  password: yup.string().min(6).required(),
});

const SignupScreen = ({
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
    resolver: yupResolver(schema),
  });

  return (
    <View style={styles.container}>
      <Title>Signup Now!</Title>
      <View style={styles.formContainer}>
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              label="Username"
              placeholder="Enter a username"
              error={errors.username}
              onBlur={onBlur}
              value={value}
              onChangeText={onChange}
              testID="username"
            />
          )}
          name="username"
        />
        {errors.username && (
          <Caption style={styles.errStyle}>{errors.username?.message}</Caption>
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
              placeholder="Enter a password"
              onBlur={onBlur}
              value={value}
              onChangeText={onChange}
              testID="password"
            />
          )}
          name="password"
        />
        {errors.password && (
          <Caption style={styles.errStyle}>{errors.password?.message}</Caption>
        )}
        <Button
          icon="login"
          mode="contained"
          style={styles.btnSpace}
          contentStyle={styles.btnStyle}
          onPress={handleSubmit(onSubmit)}
          testID="submit"
        >
          Signup
        </Button>
        <Button
          mode="text"
          style={styles.btnSpace}
          contentStyle={styles.btnStyle}
          onPress={() => navigation.navigate("Login")}
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
  errStyle: {
    color: "red",
  },
});

export default SignupScreen;
