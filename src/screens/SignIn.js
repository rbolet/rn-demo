import React, { useContext } from "react";
import { StyleSheet, View, SafeAreaView } from "react-native";
import { Title, useTheme } from "react-native-paper";
import { UserContext } from "../contexts/UserContext";
import SignInInputs from "../components/SignInInputs";

function styleWithTheme(theme) {
  const { colors } = theme;
  return StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      padding: theme.spacing(3),
    },
    title: {
      lineHeight: 50,
      fontSize: 50,
      fontWeight: "bold",
      textAlign: "center",
      color: colors.primary,
    },
  });
}

export default function SignIn({ route }) {
  const { loginCallback } = route.params;
  const { setUsername } = useContext(UserContext);
  const theme = useTheme();
  const styles = styleWithTheme(theme);

  function signInCallback(authReturn) {
    if (!authReturn) return;

    setUsername(authReturn.username);
    loginCallback();
  }

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Title style={styles.title}>EMC Lighting</Title>
        <Title style={styles.title}>Demo</Title>
      </View>
      <SignInInputs signInCallback={signInCallback} />
    </SafeAreaView>
  );
}
