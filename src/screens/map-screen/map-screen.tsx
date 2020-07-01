import * as React from 'react';
import { View, ViewStyle } from 'react-native';
import { Map } from '../../components/organisms/map/map';

const FULL: ViewStyle = { flex: 1, backgroundColor: 'white' };

export interface MapScreenProps {
    loadContent: () => string;
    content: string;
    navigation: any;
}

export const MapScreen: React.FunctionComponent<MapScreenProps> = () => (
    <View style={FULL}>
        <Map />
    </View>
);
