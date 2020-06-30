import * as React from 'react';
import {
    View,
    ViewStyle,
    TextStyle,
    ImageBackground,
    Text
} from 'react-native';
import { connect } from 'react-redux';
import { Screen, Button } from '../../components';
import { color } from '../../theme';

const FULL: ViewStyle = { flex: 1, backgroundColor: color.background };

const BLACK_TEXT: TextStyle = {
    marginTop: 20,
    color: '#000000',
    marginLeft: 24,
    marginRight: 24
};

const GREY_TEXT: TextStyle = {
    marginTop: 25,
    color: '#8E8E93',
    marginLeft: 24,
    marginRight: 24
};

const TEXT_CONTAINER: ViewStyle = {
    marginBottom: 63
};

const IMAGE_BACKGROUND: ViewStyle = {
    width: '100%',
    height: 300
};

const TITLE_IMAGE_BACKGROUND: TextStyle = {
    fontSize: 20,
    marginBottom: 15,
    marginLeft: 24,
    fontWeight: 'bold',
    color: 'white'
};

const TEXT_IMAGE_BACKGROUND: TextStyle = {
    fontWeight: 'bold',
    color: 'white',
    opacity: 0.7
};

const INFORMATION_CONTAINER: ViewStyle = {
    flex: 1,
    justifyContent: 'flex-end'
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

const ENERGY_TAG: ViewStyle = {
    borderRadius: 15,
    height: 25,
    marginRight: 6,
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 14,
    paddingRight: 14,
    backgroundColor: '#EFEFF4'
};

const ENERGY_TEXT: TextStyle = {
    color: '#007AFF',
    fontWeight: 'bold'
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
                <ImageBackground
                    source={require('../../../../assets/electricity.png')}
                    style={IMAGE_BACKGROUND}
                >
                    <View style={INFORMATION_CONTAINER}>
                        <Text style={TITLE_IMAGE_BACKGROUND}>
                            Je passe à un fournisseur d’électricité renouvelable
                        </Text>
                        <View style={POINT_WRAPPER}>
                            <Text style={TEXT_IMAGE_BACKGROUND}>
                                DÉFI DE LA SEMAINE
                            </Text>
                            <View style={POINTS_CONTAINER}>
                                <View style={ENERGY_TAG}>
                                    <Text style={ENERGY_TEXT}>ÉNERGIE</Text>
                                </View>
                                <View style={POINTS_TAG}>
                                    <Text style={POINTS_TEXT}>80🌱</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </ImageBackground>

                <View style={TEXT_CONTAINER}>
                    <Text style={BLACK_TEXT}>
                        Je change de fournisseur d’électricité pour Ilek,
                        Enercoop ou d’autres vraiment engagés.
                    </Text>
                    <Text style={GREY_TEXT}>
                        On parle d’électricité propre, qu’est-ce que ça veut
                        dire ? Et puis combien ça coûte de passer à une énergie
                        verte ?{' '}
                    </Text>
                    <Text style={GREY_TEXT}>
                        La première chose à dire : l’électricité la plus propre
                        c’est celle qu’on ne consomme pas. Car l’électricité la
                        plus renouvelable a forcément un coût…que cela soit en
                        ce qui concerne les matières premières nécessaires à la
                        construction des infrastructures mais aussi la pression
                        subie par la biodiversité mise en danger par les
                        installations.
                    </Text>
                    <Text style={GREY_TEXT}>
                        Sans compter l’usage abusif que font les fournisseurs
                        “classiques” du mot “vert” alors que bien souvent ils
                        mettent en vente de l’électricité achetée dans de
                        d’autres pays à laquelle ils ajoutent des “labels verts”
                        achetés séparément…
                    </Text>
                </View>
                <Button
                    text="J'ai réussi !"
                    onPress={navigateToChallengePictureStep}
                />
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
