import { DrawerScreenProps } from "@react-navigation/drawer";
import React, { useEffect } from "react";
import { Button, Text, View, TouchableOpacity } from "react-native";
import { colors, styles } from "../theme/appTheme";
import Icon from "react-native-vector-icons/dist/Ionicons";

interface Props extends DrawerScreenProps<any, any> {}

const Page1Screen = ({ navigation }: Props) => {
  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity>
          <Icon
            name="menu-outline"
            color={colors.primary}
            size={35}
            style={{ marginLeft: 10 }}
            onPress={() => navigation.toggleDrawer()}
          />
        </TouchableOpacity>
      ),
    });
  }, []);

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Estamos en la pagina 1</Text>
      <Button
        title="Ir a pagina 2"
        onPress={() => navigation.navigate("Pagina2Screen")}
      />
      <Text style={{ marginVertical: 15 }}>Navegar con argumentos</Text>
      <View style={{ flexDirection: "row" }}>
        <TouchableOpacity
          style={{ ...styles.botonGrande, backgroundColor: "#5856D6" }}
          onPress={() =>
            navigation.navigate("PersonaScreen", { id: 1, nombre: "Pedro" })
          }
        >
          <Text style={styles.botonGrandeTexto}>Persona</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ ...styles.botonGrande, backgroundColor: "#FF9427" }}
          onPress={() =>
            navigation.navigate("PersonaScreen", { id: 2, nombre: "Maria" })
          }
        >
          <Text style={styles.botonGrandeTexto}>Persona</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Page1Screen;
