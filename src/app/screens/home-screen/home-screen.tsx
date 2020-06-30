import * as React from 'react';
import {
    View,
    ViewStyle,
    TextStyle,
    ImageStyle,
    Text,
    Image
} from 'react-native';
import { connect } from 'react-redux';
import { Screen, Header } from '../../components';
import { color, spacing } from '../../theme';

const FULL: ViewStyle = { flex: 1, backgroundColor: color.background };
const TEXT: TextStyle = {
    color: color.dark_1,
    fontFamily: 'Montserrat'
};

const BOLD: TextStyle = { fontWeight: 'bold' };

// const CONTAINER: ViewStyle = {
//     backgroundColor: color.transparent,
//     paddingHorizontal: spacing[4]
// };

// const HEADER: TextStyle = {
//     paddingTop: spacing[3],
//     paddingBottom: spacing[4] + spacing[1],
//     paddingHorizontal: 0
// };
// const HEADER_TITLE: TextStyle = {
//     ...TEXT,
//     ...BOLD,
//     textAlign: 'left'
// };

const YELLOW_BACKGROUND: ViewStyle = {
    height: 255,
    backgroundColor: '#FEC530',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30
};

const HEADER: ViewStyle = {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: 15,
    marginRight: 15,
    marginTop: 34
};

const PROFILE_PIC: ImageStyle = {
    width: 64,
    height: 64
};

export interface HomeScreenProps {
    navigation: any;
}
const Home = (/* props: HomeScreenProps */) => {
    return (
        <View style={FULL}>
            <Screen preset="scroll" backgroundColor={color.transparent}>
                {/* <Header
                    headerText="Home Screen"
                    style={HEADER}
                    titleStyle={HEADER_TITLE}
                /> */}
                <View style={YELLOW_BACKGROUND}>
                    <View style={HEADER}>
                        <View>
                            <Text>L’Oréal Paris</Text>
                            <Text>Bonjour Élodie</Text>
                        </View>
                        <Image
                            style={PROFILE_PIC}
                            source={require('../../../../assets/profile-pic.png')}
                        />
                    </View>
                </View>
            </Screen>
        </View>
    );
};

const mapStateToProps = () => ({});

const mapDispatchToProps = () => ({});

export const HomeScreen = connect(mapStateToProps, mapDispatchToProps)(Home);
