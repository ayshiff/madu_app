import * as React from 'react';
import { View, ViewStyle, TextStyle } from 'react-native';
import { connect } from 'react-redux';
import { Screen, Header } from '../../components';
import { color, spacing } from '../../theme';

const FULL: ViewStyle = { flex: 1, backgroundColor: color.background };
const TEXT: TextStyle = {
    color: color.dark_1,
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

export interface HomeScreenProps {
    navigation: any;
}
const Home = (/* props: HomeScreenProps */) => {
    return (
        <View style={FULL}>
            <Screen
                style={CONTAINER}
                preset="scroll"
                backgroundColor={color.transparent}
            >
                <Header
                    headerText="Home Screen"
                    style={HEADER}
                    titleStyle={HEADER_TITLE}
                />
                <View>{/* Map Compoenent */}</View>
            </Screen>
        </View>
    );
};

const mapStateToProps = () => ({});

const mapDispatchToProps = () => ({});

export const HomeScreen = connect(mapStateToProps, mapDispatchToProps)(Home);
