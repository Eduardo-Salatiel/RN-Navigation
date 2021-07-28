import React from "react";
import { Platform, Text } from "react-native";
import Icon from 'react-native-vector-icons/dist/Ionicons';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import StackNavigator from "./StackNavigator";
import Tab1Screen from "../screens/Tab1Screen";
import TopTabNavigator from "./TopTabNavigator";
import { colors } from "../theme/appTheme";

const TabAndroid = createMaterialBottomTabNavigator();

const BottomTabNavigatorAndroid = () => {
  return (
    <TabAndroid.Navigator
      sceneAnimationEnabled={true}
      barStyle={{ backgroundColor: colors.primary }}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color }) => {
          let iconType: string = "";
          switch (route.name) {
            case "Tab1Screen":
              iconType = "images-outline";
              break;
            case "Tab2Screen":
              iconType = "play-circle-outline";
              break;
            case "StackNavigator":
              iconType = "grid-outline";
              break;
            default:
              break;
          }

          return <Icon name={iconType}  color={color} size={20}/>;
        },
      })}
    >
      <TabAndroid.Screen
        name="Tab1Screen"
        options={{ title: "Tab1" }}
        component={Tab1Screen}
      />
      <TabAndroid.Screen
        name="Tab2Screen"
        options={{ title: "Tab2" }}
        component={TopTabNavigator}
      />
      <TabAndroid.Screen
        name="StackNavigator"
        options={{ title: "Stack" }}
        component={StackNavigator}
      />
    </TabAndroid.Navigator>
  );
};

const TabIOS = createBottomTabNavigator();

const BottomTabNavigatorIOS = () => {
  return (
    <TabIOS.Navigator
      sceneContainerStyle={{
        backgroundColor: "white",
      }}
      tabBarOptions={{
        activeTintColor: colors.primary,
        style: {
          borderTopColor: colors.primary,
          borderTopWidth: 0,
          elevation: 0,
        },
        labelStyle: {
          fontSize: 15,
        },
      }}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color }) => {
          let iconType: string = "";
          switch (route.name) {
            case "Tab1Screen":
              iconType = "T1";
              break;
            case "Tab2Screen":
              iconType = "T2";
              break;
            case "StackNavigator":
              iconType = "SN";
              break;
            default:
              break;
          }

          return <Text>{iconType}</Text>;
        },
      })}
    >
      <TabIOS.Screen
        name="Tab1Screen"
        options={{ title: "Tab1" }}
        component={Tab1Screen}
      />
      <TabIOS.Screen
        name="Tab2Screen"
        options={{ title: "Tab2" }}
        component={TopTabNavigator}
      />
      <TabIOS.Screen
        name="StackNavigator"
        options={{ title: "Stack" }}
        component={StackNavigator}
      />
    </TabIOS.Navigator>
  );
};

const BottomTabNavigator = () => {
  return Platform.OS === "ios" ? (
    <BottomTabNavigatorIOS />
  ) : (
    <BottomTabNavigatorAndroid />
  );
};

export default BottomTabNavigator;
