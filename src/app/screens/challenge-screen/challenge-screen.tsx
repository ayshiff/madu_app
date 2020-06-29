import * as React from 'react';
import {
    View,
    ViewStyle,
    TextStyle,
    ImageBackground,
    Text
} from 'react-native';
import { connect } from 'react-redux';
import { Screen, Header, Button } from '../../components';
import { color, spacing } from '../../theme';
import { withTheme } from 'styled-components';

const FULL: ViewStyle = { flex: 1, backgroundColor: color.background };
const TEXT: TextStyle = {
    marginTop: 20,
    color: color.dark_1,
    fontFamily: 'Montserrat'
};

const CONTAINER: ViewStyle = {
    backgroundColor: color.transparent,
    paddingHorizontal: spacing[4]
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
    color: 'white'
};

const INFORMATION_CONTAINER: ViewStyle = {
    flex: 1,
    justifyContent: 'flex-end'
};

const POINT_WRAPPER: ViewStyle = {
    flexDirection: 'row',
    marginBottom: 22,
    marginLeft: 24
};

const POINTS_CONTAINER: ViewStyle = {
    flexDirection: 'row'
};

const ENERGY_TAG: ViewStyle = {
    borderRadius: 15,
    height: 20,
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: '#EFEFF4'
};

const ENERGY_TEXT: TextStyle = {
    color: '#007AFF'
};

const POINTS_TAG: ViewStyle = {
    borderRadius: 28,
    height: 20,
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: '#E3FFE8'
};

const POINTS_TEXT: TextStyle = {
    color: '#70B32D'
};

export interface ChallengeScreenProps {
    navigation: any;
}
const Challenge = (/* props: HomeScreenProps */) => {
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
                                Défi de la semaine
                            </Text>
                            <View style={POINTS_CONTAINER}>
                                <View style={ENERGY_TAG}>
                                    <Text style={ENERGY_TEXT}>ÉNERGIE</Text>
                                </View>
                                <View style={POINTS_TAG}>
                                    <Text style={POINTS_TEXT}>80</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </ImageBackground>

                <View>
                    <Text style={TEXT}>
                        Je change de fournisseur d’électricité pour Ilek,
                        Enercoop ou d’autres vraiment engagés.
                    </Text>
                    <Text style={TEXT}>
                        On parle d’électricité propre, qu’est-ce que ça veut
                        dire ? Et puis combien ça coûte de passer à une énergie
                        verte ?{' '}
                    </Text>
                    <Text style={TEXT}>
                        La première chose à dire : l’électricité la plus propre
                        c’est celle qu’on ne consomme pas. Car l’électricité la
                        plus renouvelable a forcément un coût…que cela soit en
                        ce qui concerne les matières premières nécessaires à la
                        construction des infrastructures mais aussi la pression
                        subie par la biodiversité mise en danger par les
                        installations.
                    </Text>
                    <Text style={TEXT}>
                        Sans compter l’usage abusif que font les fournisseurs
                        “classiques” du mot “vert” alors que bien souvent ils
                        mettent en vente de l’électricité achetée dans de
                        d’autres pays à laquelle ils ajoutent des “labels verts”
                        achetés séparément…
                    </Text>
                </View>
                <Button text="J'ai réussi !" />
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
