import * as React from 'react';
import { View, ViewStyle, TextStyle } from 'react-native';
import { connect } from 'react-redux';
import { Screen, Header } from 'madu/components';
import { color, spacing } from 'madu/theme';
import { loginActions } from 'madu/actions/login.actions';

const FULL: ViewStyle = { flex: 1, backgroundColor: 'white' };
const TEXT: TextStyle = {
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
    textAlign: 'left'
};

export interface SettingsScreenProps {
    loadContent: () => string;
    content: string;
    navigation: any;
    logout: () => void;
}

export const Profile = ({ navigation, logout }: SettingsScreenProps) => (
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
                onRightPress={() => {
                    navigation.navigate('welcome');
                    logout();
                }}
            />
        </Screen>
    </View>
);

const mapStateToProps = (state: any) => ({
    logout: state.poi.list
});

const mapDispatchToProps = (dispatch: any) => ({
    logout: () => dispatch(loginActions.logout())
});

export const ProfileScreen = connect(
    mapStateToProps,
    mapDispatchToProps
)(Profile);
