import * as React from 'react';
import { View, ViewStyle, TextStyle, Dimensions } from 'react-native';
import { connect } from 'react-redux';
import { useState } from 'react';

import { Screen, Header, Button, Input } from 'madu/components';
import { color, spacing } from 'madu/theme';
import { registerActions, IUserData } from 'madu/actions/register.actions';

const { height } = Dimensions.get('screen');

const TEXT: TextStyle = {
    color: color.palette.black,
    fontFamily: 'Montserrat'
};

const BOLD: TextStyle = { fontWeight: 'bold' };

const CONTAINER: ViewStyle = {
    flex: 1,
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
    textAlign: 'left'
};

export interface RegisterScreenProps {
    navigation: any;
    userData: IUserData;
}
interface RegisterStepOneScreenProps extends RegisterScreenProps {
    setUserData: (data: IData) => void;
}

interface IData {
    email: string;
    password: string;
}

const RegisterStepOne = (props: RegisterStepOneScreenProps) => {
    const { navigation, userData, setUserData } = props;
    const [email, setEmail] = useState(userData.email || '');
    const [password, setPassword] = useState(userData.password || '');
    const [confirmPassword, setConfirmPassword] = useState('');

    const navigateToNextStep = () => {
        navigation.navigate('registerStepTwo');
    };

    const handleNavigate = () => {
        setUserData({ email, password });
        navigateToNextStep();
    };

    const goBack = () => navigation.goBack();
    return (
        <Screen preset="scroll">
            <View style={CONTAINER}>
                <Header
                    headerText="Créer mon compte"
                    leftIcon="back"
                    onLeftPress={goBack}
                    style={HEADER}
                    titleStyle={HEADER_TITLE}
                />
                <Input
                    placeholder="Votre mail professionnel"
                    label="Mail professionnel"
                    value={email}
                    onChangeText={(el: string) => setEmail(el)}
                />
                <Input
                    placeholder="Votre mot de passe"
                    label="Mot de passe"
                    secureTextEntry
                    value={password}
                    onChangeText={(el: string) => setPassword(el)}
                />
                <Input
                    placeholder="Confirmer votre mot de passe"
                    label="Confirmer mot de passe"
                    secureTextEntry
                    value={confirmPassword}
                    onChangeText={(el: string) => setConfirmPassword(el)}
                />
                <View style={{ flex: 1, justifyContent: 'flex-end' }}>
                    <Button title="Suivant" onPress={handleNavigate} />
                </View>
            </View>
        </Screen>
    );
};

const mapStateToProps = (state: any) => ({
    userData: state.register
});

const mapDispatchToProps = (dispatch: any) => ({
    setUserData: (data: IData) => dispatch(registerActions.setUserData(data))
});

export const RegisterStepOneScreen = connect(
    mapStateToProps,
    mapDispatchToProps
)(RegisterStepOne);
