import * as React from 'react';
import { View, ViewStyle } from 'react-native';
import { Map } from '../../components/organisms/map/map';
import { color } from '../../theme/color';

const FULL: ViewStyle = { flex: 1, backgroundColor: color.background };

export interface MapScreenProps {
    loadContent: () => string;
    content: string;
    navigation: any;
}

export const MapScreen: React.FunctionComponent<MapScreenProps> = ({
    navigation
}: MapScreenProps) => (
    <View style={FULL}>
        <Map navigation={navigation} />
    </View>
);
