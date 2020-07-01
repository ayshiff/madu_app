import React, { useEffect } from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import { WelcomeScreen } from "../screens";
import { RegisterStepOneScreen } from "../components/templates/welcome/register/step-one";
import { RegisterStepTwoScreen } from "../components/templates/welcome/register/step-two";
import { RegisterStepThreeScreen } from "../components/templates/welcome/register/step-three";
import { RegisterStepFourScreen } from "../components/templates/welcome/register/step-four";
import { RegisterStepFiveScreen } from "../components/templates/welcome/register/step-five";
import { RegisterStepSixScreen } from "../components/templates/welcome/register/step-six";
import { LoginScreen } from "../components/templates/welcome/login";
// import { HomeNavigator } from './home-navigator';

const RootNavigator = createAppContainer(
  createStackNavigator(
    {
      WelcomeScreen,
      registerStepOne: RegisterStepOneScreen,
      registerStepTwo: RegisterStepTwoScreen,
      registerStepThree: RegisterStepThreeScreen,
      registerStepFour: RegisterStepFourScreen,
      registerStepFive: RegisterStepFiveScreen,
      registerStepSix: RegisterStepSixScreen,
      login: LoginScreen,
    },
    {
      initialRouteName: "WelcomeScreen",
      defaultNavigationOptions: {
        cardStyle: { backgroundColor: "#FDFAF3" },
      },
    }
  )
);

export const RootNavigatorManager = () => {
  useEffect(() => {
    console.log("`RawRootNavigatorManager` did mount", Date.now());
  }, []);

  return <RootNavigator />;
};
