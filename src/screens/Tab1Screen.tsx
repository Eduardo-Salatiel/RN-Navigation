import React from 'react'
import Icon from 'react-native-vector-icons/dist/Ionicons';

import { Text, View } from 'react-native';
import { colors, styles } from '../theme/appTheme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const Tab1Screen = () => {
    const { top } = useSafeAreaInsets();
    return (
        <View style={{...styles.globalMargin, marginTop: top}}>
            <Text style={styles.title}>Iconos</Text>
            <Text>
            <Icon name="airplane-outline" size={60} color={colors.primary}/>
            <Icon name="move-outline" size={60} color={colors.primary}/>
            <Icon name="moon-outline" size={60} color={colors.primary}/>
            <Icon name="notifications-off-outline" size={60} color={colors.primary}/>
            <Icon name="people-outline" size={60} color={colors.primary}/>
            <Icon name="share-social-outline" size={60} color={colors.primary}/>
            <Icon name="radio-outline" size={60} color={colors.primary}/>
            <Icon name="arrow-back-circle-outline" size={60} color={colors.primary}/>
            <Icon name="arrow-forward-circle-outline" size={60} color={colors.primary}/>
            <Icon name="alarm-outline" size={60} color={colors.primary}/>
            </Text>
        </View>
    )
}

export default Tab1Screen;
