import { StackScreenProps } from "@react-navigation/stack";
import React from "react";
import { Button, Text, View } from "react-native";
import { styles } from "../theme/appTheme";

interface Props extends StackScreenProps<any, any> {}

const Page3Screen = ({ navigation }: Props) => {
  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Estamos en la pagina 3</Text>

      <Button
        title="Regresar"
        onPress={() => navigation.pop()}
      />
      <Button
        title="Home"
        onPress={() => navigation.popToTop()}
      />
    </View>
  );
};

export default Page3Screen;
