import * as React from 'react';
import { View, ViewStyle } from 'react-native';
import { Button } from '../../components';
import { Text } from '../../components/atoms/text/text';
import { color } from '../../theme/color';

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
            <Text preset="header" style={{ textAlign: 'left' }}>
                Bienvenue sur l’app qui contribue à un monde plus durable
            </Text>
            <Button text="S'inscrire" onPress={navigateToRegister} />
            <Button text="J'ai déjà un compte" onPress={navigateToLogin} />
        </View>
    );
};
