import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/dist/Ionicons";
import ChatScreen from "../screens/ChatScreen";
import AlbumsScreen from "../screens/AlbumsScreen";
import ContactsScreen from "../screens/ContactsScreen";
import { colors } from "../theme/appTheme";

const Tab = createMaterialTopTabNavigator();

const TopTabNavigator = () => {
  const { top } = useSafeAreaInsets();

  return (
    <Tab.Navigator
      style={{ paddingTop: top }}
      sceneContainerStyle={{
        backgroundColor: "white",
      }}
      tabBarOptions={{
        pressColor: colors.primary,
        showIcon: true,
        indicatorStyle: {
          backgroundColor: colors.primary,
        },
        style: {
          elevation: 0,
          shadowColor: "transparent",
        },
      }}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color }) => {
          let iconType: string = "";
          switch (route.name) {
            case "ChatScreen":
              iconType = "chatbubble-outline";
              break;
            case "AlbumsScreen":
              iconType = "albums-outline";
              break;
            case "ContactsScreen":
              iconType = "people-outline";
              break;
            default:
              break;
          }

          return <Icon name={iconType} size={20} color={color} />;
        },
      })}
    >
      <Tab.Screen name="ChatScreen" options={{title:"Chat"}} component={ChatScreen} />
      <Tab.Screen name="AlbumsScreen" options={{title:"Album"}} component={AlbumsScreen} />
      <Tab.Screen name="ContactsScreen" options={{title:"Contact"}} component={ContactsScreen} />
    </Tab.Navigator>
  );
};

export default TopTabNavigator;
