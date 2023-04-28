import React from "react";
import { Button, Text, View } from "react-native";
import { useDispatch } from "react-redux";
import authToken from "../../../api/authToken";
import { addJwtToken } from "../../../redux/jwt.slice";

const Login = () => {
  const dispatch = useDispatch();
  const handleLogin = async () => {
    console.log("Login");
    let userToken = "ABC123";
    await authToken.storeToken(userToken);
    dispatch(addJwtToken({ token: userToken }));
  };

  return (
    <View>
      <Text>LOGIN SCREEN</Text>
      <Button
        color={"green"}
        title="Login"
        onPress={() => {
          handleLogin();
        }}
      />
    </View>
  );
};

export default Login;
