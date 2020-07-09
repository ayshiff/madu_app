import * as React from 'react';
import { View, ViewStyle, TextStyle, Image } from 'react-native';
import { connect } from 'react-redux';

import { Screen, Header, Button } from 'madu/components';
import { color, spacing } from 'madu/theme';
import { registerActions, IUserData } from 'madu/actions/register.actions';

import { Text } from 'madu/components/atoms/text/text';
import { RegisterScreenProps } from './step-one';

const FULL: ViewStyle = {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center'
};

const TEXT: TextStyle = {
    color: color.palette.black,
    fontFamily: 'Montserrat'
};

const BOLD: TextStyle = { fontWeight: 'bold' };

const CONTAINER: ViewStyle = {
    backgroundColor: color.transparent,
    paddingHorizontal: spacing[4],
    flex: 1
};

const HEADER: TextStyle = {
    paddingTop: spacing[3],
    paddingBottom: spacing[4] + spacing[1],
    paddingHorizontal: 0
};
const HEADER_TITLE: TextStyle = {
    ...TEXT,
    ...BOLD,
    textAlign: 'left'
};

export interface RegisterStepSixScreenProps extends RegisterScreenProps {
    setUserData: (data: IData) => void;
    register: (data: IUserData) => void;
}

interface IData {
    email: string;
    password: string;
}

const RegisterStepSix = (props: RegisterStepSixScreenProps) => {
    const { navigation, userData, register } = props;

    const navigateToNextStep = () => {
        register(userData);
        navigation.navigate('home');
    };

    const handleNavigate = () => {
        navigateToNextStep();
    };

    const goBack = React.useMemo(() => () => navigation.goBack(''), [
        navigation
    ]);
    return (
        <View style={FULL}>
            <Screen
                style={CONTAINER}
                preset="scroll"
                backgroundColor={color.transparent}
            >
                <Header
                    headerText="Complétez votre profil"
                    leftIcon="back"
                    onLeftPress={goBack}
                    style={HEADER}
                    titleStyle={HEADER_TITLE}
                />
                <Image
                    style={{
                        width: 200,
                        height: 200,
                        borderRadius: 100
                    }}
                    source={{
                        uri: userData.image
                    }}
                />
                <View>
                    <Text preset="header">Tu as gagné 80 points</Text>
                </View>
                <Text>
                    Félicitation, vous venez de gagner vos premier points !
                    N’hésite pas à aller voir ton avancement et classement au
                    sein de l’entreprise sur ton profil
                </Text>
                <Button title="Continuer" onPress={handleNavigate} />
            </Screen>
        </View>
    );
};

const mapStateToProps = (state: any) => ({
    userData: state.register
});

const mapDispatchToProps = (dispatch: any) => ({
    setUserData: (data: IData) => dispatch(registerActions.setUserData(data)),
    register: (data: IUserData) => dispatch(registerActions.register(data))
});

export const RegisterStepSixScreen = connect(
    mapStateToProps,
    mapDispatchToProps
)(RegisterStepSix);
