import * as React from 'react';
import {
    View,
    ViewStyle,
    TextStyle,
    ImageBackground,
    Image,
    Text,
    ImageStyle
} from 'react-native';
import { connect } from 'react-redux';
import { Screen, Button } from '../../components';
import { color } from '../../theme';

const FULL: ViewStyle = { flex: 1, backgroundColor: color.white };

const BLACK_TEXT: TextStyle = {
    color: '#000000',
    marginLeft: 24,
    marginRight: 24,
    fontSize: 24
};

const GREY_TEXT: TextStyle = {
    marginTop: 18,
    fontSize: 14,
    color: '#8E8E93',
    marginLeft: 24,
    marginRight: 24
};

const TEXT_CONTAINER: ViewStyle = {
    marginBottom: 63
};

const IMAGE_BACKGROUND: ImageStyle = {
    width: '100%',
    height: 300,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30
};

const INFORMATION_CONTAINER: ViewStyle = {
    flex: 1,
    justifyContent: 'flex-end',
    marginTop: -14
};

const POINT_WRAPPER: ViewStyle = {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 22,
    paddingLeft: 24,
    paddingRight: 40
};

const POINTS_CONTAINER: ViewStyle = {
    flexDirection: 'row'
};

const TYPE_TAG: ViewStyle = {
    borderRadius: 20,
    borderColor: '#FE6D1A',
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: 100,
    marginRight: 10,
    backgroundColor: '#FFFFFF'
};

const TYPE_TEXT: TextStyle = {
    justifyContent: 'center',
    color: '#FE6D1A'
};

const POINTS_TAG: ViewStyle = {
    borderRadius: 28,
    height: 25,
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 14,
    paddingRight: 14,
    backgroundColor: '#E3FFE8'
};

const POINTS_TEXT: TextStyle = {
    color: '#70B32D'
};

export interface ChallengeScreenProps {
    navigation: any;
}

const Challenge = (props: ChallengeScreenProps) => {
    const { navigation } = props;

    const navigateToChallengePictureStep = React.useMemo(
        () => () => navigation.navigate('picture'),
        [navigation]
    );
    return (
        <View style={FULL}>
            <Screen preset="scroll" backgroundColor={color.transparent}>
                {/* <ImageBackground
                    source={require('../../../../assets/electricity.png')}
                    style={IMAGE_BACKGROUND}
                >
                </ImageBackground> */}
                <Image
                    style={IMAGE_BACKGROUND}
                    source={require('../../../../assets/meal-375-214.png')}
                />
                <View style={INFORMATION_CONTAINER}>
                    <View style={POINT_WRAPPER}>
                        <View style={POINTS_CONTAINER}>
                            <View style={TYPE_TAG}>
                                <Text style={TYPE_TEXT}>Alimentation</Text>
                            </View>
                            <View style={POINTS_TAG}>
                                <Text style={POINTS_TEXT}>120🌱</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={TEXT_CONTAINER}>
                    <Text style={BLACK_TEXT}>Lundi c’est Veggie !</Text>
                    <Text style={GREY_TEXT}>
                        Chaque Français consomme 87 kg de viande et 34 kg de
                        poisson par an. À lʼéchelle mondiale, lʼélevage
                        représente près de 15 % des émissions de gaz à effet de
                        serre dʼorigine humaine et lʼONU estime que la
                        consommation de viande va grimper de 76 % dʼici 2050.
                    </Text>
                    <Text style={GREY_TEXT}>
                        Chaque Français consomme 87 kg de viande et 34 kg de
                        poisson par an. À lʼéchelle mondiale, lʼélevage
                        représente près de 15 % des émissions de gaz à effet de
                        serre dʼorigine humaine et lʼONU estime que la
                        consommation de viande va grimper de 76 % dʼici 2050.
                    </Text>
                </View>
                <Button text="Je relève le défi !" />
            </Screen>
        </View>
    );
};

const mapStateToProps = () => ({});

const mapDispatchToProps = () => ({});

export const ChallengeScreen = connect(
    mapStateToProps,
    mapDispatchToProps
)(Challenge);
