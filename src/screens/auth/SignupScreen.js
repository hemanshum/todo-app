import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { StyleSheet, View } from "react-native";
import { TextInput, Button, Title, Caption } from "react-native-paper";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { signupUser } from "../../store/actions/authActions";
import { clearSignupError } from "../../store/slices/authSlice";

const schema = yup.object({
  username: yup.string().required(),
  password: yup.string().min(6).required(),
});

const SignupScreen = ({
  onSubmit = (data) => console.log(data),
  navigation,
}) => {
  const dispatch = useDispatch();
  const { isLoading, signUpError } = useSelector((state) => state.auth);

  const {
    reset,
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

  const onUserSubmit = (data) => {
    dispatch(signupUser(data));
    onSubmit(data);
    reset();
  };

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
              onChangeText={(data) => {
                onChange(data);
                dispatch(clearSignupError());
              }}
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
              secureTextEntry
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
          loading={isLoading}
          style={styles.btnSpace}
          contentStyle={styles.btnStyle}
          onPress={handleSubmit(onUserSubmit)}
          testID="submit"
        >
          Signup
        </Button>
        {signUpError && (
          <Caption style={styles.errStyle}>{signUpError}</Caption>
        )}
        <Button
          mode="text"
          style={styles.btnSpace}
          contentStyle={styles.btnStyle}
          onPress={() => navigation.navigate("Login", { signupStatus: null })}
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
