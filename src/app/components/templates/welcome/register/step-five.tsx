import * as React from 'react';
import { View, ViewStyle, TextStyle } from 'react-native';
import { Screen, Header, Button } from '../../../index';
import { color, spacing } from '../../../../theme';

const FULL: ViewStyle = { flex: 1 };
const TEXT: TextStyle = {
    color: color.palette.black,
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
    fontSize: 12,
    lineHeight: 15,
    textAlign: 'center',
    letterSpacing: 1.5
};

export interface RegisterStepFiveScreenProps {
    loadContent: () => string;
    content: string;
    navigation: any;
}

export const RegisterStepFiveScreen = (props: RegisterStepFiveScreenProps) => {
    const { navigation } = props;
    const navigateToNextStep = React.useMemo(
        () => () => navigation.navigate('home'),
        [navigation]
    );
    const goBack = React.useMemo(() => () => navigation.goBack(), [navigation]);
    return (
        <View style={FULL}>
            <Screen
                style={CONTAINER}
                preset="scroll"
                backgroundColor={color.transparent}
            >
                <Header
                    headerText="Register Step 5"
                    leftIcon="back"
                    onLeftPress={goBack}
                    style={HEADER}
                    titleStyle={HEADER_TITLE}
                />
                <h1>Complétez votre profil</h1>
                <p>
                    Prenez ou choississez une photo de vous et commencez à
                    remplir votre cagnotte
                </p>
                <p>Prendre une photo</p>
                <p>Choisir une photo</p>
                <Button text="confirmer" onPress={navigateToNextStep} />
                <Button text="passer" onPress={navigateToNextStep} />
            </Screen>
        </View>
    );
};
