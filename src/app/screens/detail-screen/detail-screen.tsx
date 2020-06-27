import * as React from 'react';
import { View, ViewStyle, Text } from 'react-native';
import { color } from '../../theme/color';

const FULL: ViewStyle = { flex: 1, backgroundColor: color.background };

export interface DetailScreenProps {
    loadContent: () => string;
    content: string;
    navigation: any;
}

export const DetailScreen = ({ navigation }: DetailScreenProps) => {
    return (
        <View style={FULL}>
            <Text>Detail Screen</Text>
        </View>
    );
};
