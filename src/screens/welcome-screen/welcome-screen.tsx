import * as React from 'react';

import { Button } from 'madu/components';
import { Text } from 'madu/components/atoms/text/text';
import { Title } from 'madu/components/atoms/title';
import { MainLayout } from 'madu/components/layout/main';

export const WelcomeScreen = ({ navigation }: { navigation: any }) => {
    const navigateToLogin = () => {
        navigation.navigate('login');
    };

    const navigateToRegister = () => {
        navigation.navigate('registerStepOne');
    };

    return (
        <MainLayout>
            <Title>
                Bienvenue sur l’app qui contribue à un monde plus durable
            </Title>
            <Text textSize={16} bottom={94}>
                Rejoignez vos collègues pour retrouver chaque semaine de
                nouveaux défis, lieux et conseils inspirants.
            </Text>

            <Button
                title="Se connecter"
                onPress={navigateToLogin}
                bottom={24}
            />
            <Text onPress={navigateToRegister} textAlign="center" textSize={16}>
                J'ai déjà un compte
            </Text>
        </MainLayout>
    );
};
