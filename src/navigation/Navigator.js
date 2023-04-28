import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { SafeAreaView } from "react-native";
import { useSelector } from "react-redux";
import AppRoutes from "./App";
import AuthRoutes from "./Auth";

// ==============Check if user is logged in or not================
const Navigator = () => {
  const containsUser = useSelector((state) =>
    state.jwt.token == "" ? false : true
  );
  {
    console.log("containsUser", containsUser);
  }

  if (!containsUser) {
    return (
      <NavigationContainer>
        <SafeAreaView style={{ flex: 1 }}>
          <AuthRoutes />
        </SafeAreaView>
      </NavigationContainer>
    );
  } else {
    return (
      <NavigationContainer>
        <SafeAreaView style={{ flex: 1 }}>
          <AppRoutes />
        </SafeAreaView>
      </NavigationContainer>
    );
  }
};
export default Navigator;
