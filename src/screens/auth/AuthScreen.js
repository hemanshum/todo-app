import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { StyleSheet, View } from "react-native";
import { ActivityIndicator } from "react-native-paper";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { validateSessionToken } from "../../store/actions/authActions";

const AuthScreen = (props) => {
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.auth.isLoading);

  React.useEffect(() => {
    const getToken = async () => {
      const jsonValue = await AsyncStorage.getItem("sessionToken");
      const token = jsonValue != null ? JSON.parse(jsonValue) : null;

      if (token) {
        dispatch(validateSessionToken(token));
      } else {
        props.navigation.navigate("Login", { signupStatus: null });
      }
    };
    getToken();
  }, [dispatch, props.navigation]);

  return (
    <View style={styles.container}>
      <ActivityIndicator animating={isLoading} />
    </View>
  );
};

export default AuthScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
