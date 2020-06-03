import * as React from 'react';
import { View, ViewStyle, TextStyle } from 'react-native';
import { Screen, Header } from '../../components';
import { color, spacing } from '../../theme';
import { Map } from '../../components/organisms/map/map';

const FULL: ViewStyle = { flex: 1 };
const TEXT: TextStyle = {
    color: color.palette.black,
    fontFamily: 'Montserrat'
};

const BOLD: TextStyle = { fontWeight: 'bold' };

const CONTAINER: ViewStyle = {
    backgroundColor: color.transparent,
    paddingHorizontal: spacing[4]
};

const HEADER: TextStyle = {
    paddingTop: spacing[3],
    paddingBottom: spacing[4] + spacing[1],
    paddingHorizontal: 0
};
const HEADER_TITLE: TextStyle = {
    ...TEXT,
    ...BOLD,
    fontSize: 12,
    lineHeight: 15,
    textAlign: 'center',
    letterSpacing: 1.5
};

export interface MapScreenProps {
    loadContent: () => string;
    content: string;
    navigation: any;
}

export const MapScreen: React.FunctionComponent<MapScreenProps> = () => (
    <View style={FULL}>
        <Screen
            style={CONTAINER}
            preset="scroll"
            backgroundColor={color.transparent}
        >
            <Header
                headerText="Map Screen"
                style={HEADER}
                titleStyle={HEADER_TITLE}
            />
            {/* <Map /> */}
        </Screen>
    </View>
);
