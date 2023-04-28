import React from "react";
import { Screens } from "../../constants/screens";
import Home from "../../screens/app/Home";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const AuthRoutes = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator initialRouteName={Screens?.Home}>
      <Stack.Screen
        name={Screens?.Home}
        component={Home}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};
export default AuthRoutes;
