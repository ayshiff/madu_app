import * as React from 'react';
import { View, ViewStyle, TextStyle } from 'react-native';
import { Screen, Header } from '../../components';
import { color, spacing } from '../../theme';

const FULL: ViewStyle = { flex: 1, backgroundColor: '#F3F8FF' };
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
    paddingHorizontal: 0,
    justifyContent: 'flex-end'
};
const HEADER_TITLE: TextStyle = {
    ...TEXT,
    ...BOLD,
    textAlign: 'left'
};

export interface SettingsScreenProps {
    loadContent: () => string;
    content: string;
    navigation: any;
}

export const ProfileScreen = ({ navigation }: SettingsScreenProps) => (
    <View style={FULL}>
        <Screen
            style={CONTAINER}
            preset="scroll"
            backgroundColor={color.transparent}
        >
            <Header
                headerText="Profile Screen"
                style={HEADER}
                titleStyle={HEADER_TITLE}
                rightIcon="logout"
                onRightPress={() => navigation.navigate('welcome')}
            />
        </Screen>
    </View>
);
