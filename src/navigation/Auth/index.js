import React from "react";
import Login from "../../screens/auth/Login";
import { Screens } from "../../constants/screens";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const AuthRoutes = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator initialRouteName={Screens?.Login}>
      <Stack.Screen
        name={Screens?.Login}
        component={Login}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};
export default AuthRoutes;
