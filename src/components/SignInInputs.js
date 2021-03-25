import React, { useState, useContext } from "react";
import { View } from "react-native";
import { Button, TextInput, useTheme, HelperText } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { mockLoginService } from "../lib/login";

export default function SignInInputs({ signInCallback }) {
  const { colors } = useTheme();
  const navigation = useNavigation();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  async function logIn() {
    setIsLoading(true);
    const authReturn = await mockLoginService(username, password).catch((reason) => {
      console.log("login fail reason:", reason);
      showLoginError();
    });

    signInCallback(authReturn);
    setIsLoading(false);
  }

  function showLoginError() {
    setIsLoading(false);
    setIsError(true);
  }

  return (
    <View style={{ width: "80%", margin: 25 }}>
      <View>
        <TextInput
          mode="outlined"
          label="username"
          autoCapitalize="none"
          autoCorrect={false}
          autoCompleteType="email"
          onChangeText={(text) => {
            setUsername(text);
          }}
          onFocus={() => {
            setIsError(false);
          }}
          disabled={isLoading}
          value={username}
          error={isError}
        />
        <TextInput
          mode="outlined"
          label="password"
          autoCapitalize="none"
          autoCorrect={false}
          secureTextEntry
          clearTextOnFocus
          autoCompleteType="password"
          onChangeText={(text) => {
            setPassword(text);
          }}
          onFocus={() => {
            setIsError(false);
          }}
          disabled={isLoading}
          value={password}
          error={isError}
        />
        <HelperText type="error" visible={isError}>
          Incorrect username or Password
        </HelperText>
      </View>
      <View style={{ margin: 25 }}>
        <Button
          icon="login"
          mode="contained"
          labelStyle={{ fontSize: 20 }}
          onPress={logIn}
          loading={isLoading}
        >
          Sign In
        </Button>
      </View>
      <View style={{ flexDirection: "row", justifyContent: "space-around", marginVertical: 20 }}>
        <Button uppercase={false} color={colors.accent} disabled={isLoading}>
          Forgot Password?
        </Button>
        <Button
          uppercase={false}
          disabled={isLoading}
          color={colors.disabled}
          onPress={() => {
            navigation.navigate("SignUpNavigator");
          }}
        >
          New Account
        </Button>
      </View>
    </View>
  );
}
