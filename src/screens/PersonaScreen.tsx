import { StackScreenProps } from '@react-navigation/stack';
import React, { useEffect } from 'react'
import { Text, View } from 'react-native';
import { RootStackParams } from '../navigation/StackNavigator';

interface Props extends StackScreenProps<RootStackParams,'PersonaScreen'>{}

const PersonaScreen = ({ route, navigation }: Props) => {
    const params = route.params;

useEffect(() => {
    navigation.setOptions({
        title: params.nombre
    })
}, []);

    return (
        <View>
            <Text>
                {JSON.stringify(params,null,3)}
            </Text>
        </View>
    )
}

export default PersonaScreen;
