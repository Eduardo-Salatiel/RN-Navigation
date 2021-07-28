import { useNavigation } from "@react-navigation/core";
import React, { useEffect } from "react";
import { Button, Text, View } from "react-native";
import { styles } from "../theme/appTheme";

const Page2Screen = () => {
  const navigator = useNavigation();

  useEffect(() => {
    navigator.setOptions({
      tiitle: 'Hola mundo',
      headerBackTitle: ''
    });
  }, [])

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Estamos en la pagina 2</Text>

      <Button
        title="Ir Pagina 3"
        onPress={() => navigator.navigate("Pagina3Screen")}
      />
    </View>
  );
};

export default Page2Screen;
