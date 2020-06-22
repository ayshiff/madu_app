import * as React from 'react';
import { View, ViewStyle } from 'react-native';
import { Button, Header, Screen } from '../../components';
import { Text } from '../../components/atoms/text/text';
import { color } from '../../theme/color';
import {
    HEADER,
    HEADER_TITLE
} from '../../components/templates/welcome/register/step-one';
import { CONTAINER } from '../../components/templates/welcome/register/step-four';

const FULL: ViewStyle = {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: color.background
};

export interface WelcomeScreenProps {
    navigation: any;
}

export const WelcomeScreen = (props: WelcomeScreenProps) => {
    const { navigation } = props;
    const navigateToLogin = React.useMemo(
        () => () => navigation.navigate('login'),
        [navigation]
    );
    const navigateToRegister = React.useMemo(
        () => () => navigation.navigate('register-step-one'),
        [navigation]
    );
    return (
        <View style={FULL}>
            <Screen
                style={CONTAINER}
                preset="scroll"
                backgroundColor={color.transparent}
            >
                <Header
                    headerText="Bienvenue sur l’app qui contribue à un monde plus durable"
                    style={HEADER}
                    titleStyle={HEADER_TITLE}
                />
                <Text preset="default" style={{ textAlign: 'left' }}>
                    Rejoignez vos collègues pour retrouver chaque semaine de
                    nouveaux défis, lieux et conseils inspirants.
                </Text>
                <Button text="S'inscrire" onPress={navigateToRegister} />
                <Button text="J'ai déjà un compte" onPress={navigateToLogin} />
            </Screen>
        </View>
    );
};
