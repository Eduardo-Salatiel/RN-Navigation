import React from "react";
import {
  createDrawerNavigator,
  DrawerContentComponentProps,
  DrawerContentOptions,
  DrawerContentScrollView,
} from "@react-navigation/drawer";
import SettingsScreen from "../screens/SettingsScreen";
import BottomTabNavigator from "./BottomTabNavigator";
import {
  Image,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from "react-native";
import { styles } from "../theme/appTheme";

const Drawer = createDrawerNavigator();

export const OwnSidebarMenu = () => {
  const { width } = useWindowDimensions();

  return (
    <Drawer.Navigator
      drawerType={width >= 768 ? "permanent" : "front"}
      drawerContent={props => <MenuInterno {...props} />}
    >
      <Drawer.Screen name="BottomTabNavigator" component={BottomTabNavigator} />
      <Drawer.Screen name="SettingsScreen" component={SettingsScreen} />
    </Drawer.Navigator>
  );
};

const MenuInterno = ({navigation}: DrawerContentComponentProps<DrawerContentOptions>) => {
  return (
    <DrawerContentScrollView>
      {/* //AVATAR */}
      <View style={styles.avatarContainer}>
        <Image
          source={{
            uri: "https://merics.org/sites/default/files/styles/ct_team_member_default/public/2020-04/avatar-placeholder.png",
          }}
          style={styles.avatar}
        />
      </View>

      {/* //OPCIONES DE NAVEGACION */}
      <View style={styles.menuContainer}>
        <TouchableOpacity
          style={styles.menuBoton}
          onPress={() => navigation.navigate("BottomTabNavigator")}
        >
          <Text style={styles.menuTextContent}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.menuBoton}
          onPress={() => navigation.navigate("SettingsScreen")}
        >
          <Text style={styles.menuTextContent}>Settings</Text>
        </TouchableOpacity>
      </View>
    </DrawerContentScrollView>
  );
};
