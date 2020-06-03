import * as React from 'react';
import { View, ViewStyle, TextStyle } from 'react-native';
import { Screen, Header, Button } from '../../index';
import { color, spacing } from '../../../theme';
import { IUserData } from '../../../actions/register.actions';

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

export interface RegisterScreenProps {
    navigation: any;
    userData: IUserData;
}

export const RegisterScreen = (props: RegisterScreenProps) => {
    const { navigation } = props;
    const navigateToNextStep = React.useMemo(
        () => () => navigation.navigate('register-step-one'),
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
                    headerText="Register Screen"
                    leftIcon="back"
                    onLeftPress={goBack}
                    style={HEADER}
                    titleStyle={HEADER_TITLE}
                />
                <Button text="Créer un compte" onPress={navigateToNextStep} />
            </Screen>
        </View>
    );
};
