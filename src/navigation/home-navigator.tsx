import React from "react";
import {
  NavigationContainer,
  NavigationContainerRef,
} from "@react-navigation/native";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { ImageStyle } from "react-native";
import {
  HomeScreen,
  MapScreen,
  ContentScreen,
  ProfileScreen,
} from "../screens";
import { Icon } from "../components";
import { IconTypes } from "../components/atoms/icon/icons";

const Tab = createBottomTabNavigator();

const ICON: ImageStyle = {
  width: 15,
  height: 15,
};

export const HomeNavigator = React.forwardRef<
  NavigationContainerRef,
  Partial<React.ComponentProps<typeof NavigationContainer>>
>(() => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: () => {
          let iconName;

          switch (route.name) {
            case "Home":
              iconName = "explorer";
              break;
            case "Settings":
              iconName = "profile";
              break;
            case "Map":
              iconName = "map";
              break;
            case "Content":
              iconName = "content";
              break;
            default:
              iconName = "explorer";
              break;
          }
          return <Icon icon={iconName as IconTypes} style={ICON} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: "#5D2555",
        inactiveTintColor: "gray",
      }}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Map" component={MapScreen} />
      <Tab.Screen name="Content" component={ContentScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
});
