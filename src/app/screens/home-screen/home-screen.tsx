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

const FULL: ViewStyle = { flex: 1, backgroundColor: color.white };
const TEXT: TextStyle = {
    color: color.dark_1,
    fontFamily: 'Montserrat'
};

const BOLD: TextStyle = { fontWeight: 'bold' };

const HEADER_CONTAINER: ViewStyle = {
    height: 225,
    backgroundColor: '#FEC530',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30
};

const HEADER: ViewStyle = {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 64,
    marginLeft: 15,
    marginRight: 15,
    marginTop: 34
};

const CHALLENGE_CONTAINER: ViewStyle = {
    marginTop: -80,
    alignItems: 'center'
};

const CHALLENGE_VIEW: ViewStyle = {
    height: 115,
    width: 250,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
        width: 0,
        height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
};

const CHALLENGE_INFO: ViewStyle = {
    justifyContent: 'space-around',
    marginLeft: 15,
    paddingTop: 10,
    paddingBottom: 10
};

const BUSINESS_NAME: TextStyle = {
    color: '#8E8E93',
    marginBottom: 5
};

const CHALLENGE_PIC: ImageStyle = {
    marginTop: 20,
    height: 75,
    width: 75
};

const CHALLENGE_TITLE: TextStyle = {
    marginBottom: 5,
    fontSize: 20,
    justifyContent: 'flex-start'
};

const TEXT_CONTAINER: ViewStyle = {
    marginTop: 16
};

const PROFILE_PIC: ImageStyle = {
    width: 64,
    height: 64
};

const POINTS_TAG: ViewStyle = {
    borderRadius: 28,
    height: 25,
    width: 70,
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 14,
    paddingRight: 14,
    backgroundColor: '#E3FFE8'
};

const POINTS_TEXT: TextStyle = {
    color: '#70B32D'
};

const TYPE_TAG: ViewStyle = {
    borderRadius: 20,
    borderColor: '#FE6D1A',
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: 100
};

const TYPE_TEXT: TextStyle = {
    justifyContent: 'center',
    color: '#FE6D1A'
};

export interface HomeScreenProps {
    navigation: any;
}
const Home = (/* props: HomeScreenProps */) => {
    return (
        <View style={FULL}>
            <Screen preset="scroll" backgroundColor={color.transparent}>
                <View style={HEADER_CONTAINER}>
                    <View style={HEADER}>
                        <View style={TEXT_CONTAINER}>
                            <Text style={BUSINESS_NAME}>L’Oréal Paris</Text>
                            <Text style={BOLD}>Bonjour Élodie</Text>
                        </View>
                        <Image
                            style={PROFILE_PIC}
                            source={require('../../../../assets/profile-pic.png')}
                        />
                    </View>
                </View>

                <View style={CHALLENGE_CONTAINER}>
                    <View>
                        <Text style={CHALLENGE_TITLE}>Défi de la semaine</Text>
                        <View style={CHALLENGE_VIEW}>
                            <Image
                                style={CHALLENGE_PIC}
                                source={require('../../../../assets/meal.png')}
                            />
                            <View style={CHALLENGE_INFO}>
                                <Text>Lundi c’est Veggie !</Text>
                                <View style={TYPE_TAG}>
                                    <Text style={TYPE_TEXT}>Alimentation</Text>
                                </View>
                                <View style={POINTS_TAG}>
                                    <Text style={POINTS_TEXT}>80🌱</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            </Screen>
        </View>
    );
};

const mapStateToProps = () => ({});

const mapDispatchToProps = () => ({});

export const HomeScreen = connect(mapStateToProps, mapDispatchToProps)(Home);
