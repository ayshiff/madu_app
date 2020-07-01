import * as React from "react";
import { View, ViewStyle, Image, ImageStyle } from "react-native";

import { Button } from "../../components";
import { Text } from "../../components/atoms/text/text";

const FULL: ViewStyle = {
  flex: 1,
  alignItems: "center",
  justifyContent: "center",
};

const IMAGE: ImageStyle = {
  width: 250,
  height: 250,
  resizeMode: "contain",
};

export const WelcomeScreen = ({ navigation }: { navigation: any }) => {
  const navigateToLogin = () => {
    navigation.navigate("login");
  };

  const navigateToRegister = () => {
    navigation.navigate("registerStepOne");
  };

  return (
    <View style={FULL}>
      <Image
        source={{
          uri:
            "https://www.dzmob.com/wp-content/uploads/2018/09/React-Native.png",
        }}
        style={IMAGE}
      />
      <Text preset="header" style={{ textAlign: "center" }}>
        Bienvenue sur l’app qui contribue à un monde plus durable
      </Text>
      <Button text="S'inscrire" onPress={navigateToRegister} />
      <Button text="J'ai déjà un compte" onPress={navigateToLogin} />
    </View>
  );
};
