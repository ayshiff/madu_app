import * as React from 'react';
import { View, ViewStyle, TextStyle, Keyboard } from 'react-native';
import { connect } from 'react-redux';
import { useState, useEffect } from 'react';
import SafeAreaView from 'react-native-safe-area-view';

import { Header, Button, Input } from 'madu/components';
import { color, spacing } from 'madu/theme';
import { registerActions, IUserData } from 'madu/actions/register.actions';

import { validateEmail } from 'madu/outils';
import { loadCompanyData } from 'madu/epics/register.epic';

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
    const { navigation, userData, setUserData, loadCompanyData } = props;
    const [email, setEmail] = useState(userData.email || '');
    const [emailError, setEmailError] = useState(false);
    const [password, setPassword] = useState(userData.password || '');
    const [passwordHidden, setPasswordHidden] = useState(true);
    const [passwordError, setPasswordError] = useState(false);
    const [confirmPassword, setConfirmPassword] = useState('');
    const [confirmPasswordHidden, setConfirmPasswordHidden] = useState(true);

    useEffect(() => {
        if (email.length) {
            setEmailError(!validateEmail(email));
        }
    }, [email]);
    const navigateToNextStep = () => {
        navigation.navigate('registerStepTwo');
    };

    const handleNavigate = () => {
        if (password !== confirmPassword) {
            return setPasswordError(true);
        }
        setUserData({ email, password });
        loadCompanyData(email.split('@')[1]);
        navigateToNextStep();
    };

    const goBack = () => navigation.goBack();

    return (
        <SafeAreaView style={CONTAINER}>
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
                error={emailError}
                errorMessage="Cet email n’est pas valide"
                onChangeText={(el: string) => setEmail(el)}
            />
            <Input
                placeholder="Votre mot de passe"
                label="Mot de passe"
                onHideClick={() => setPasswordHidden(!passwordHidden)}
                secureTextEntry={passwordHidden}
                blurOnSubmit={false}
                error={passwordError}
                onSubmitEditing={() => Keyboard.dismiss()}
                value={password}
                onChangeText={(el: string) => setPassword(el)}
            />
            <Input
                placeholder="Confirmer votre mot de passe"
                label="Confirmer mot de passe"
                onHideClick={() =>
                    setConfirmPasswordHidden(!confirmPasswordHidden)
                }
                secureTextEntry={confirmPasswordHidden}
                blurOnSubmit={false}
                error={passwordError}
                errorMessage="Les mots de passe ne sont pas équivalent"
                onSubmitEditing={() => Keyboard.dismiss()}
                value={confirmPassword}
                onChangeText={(el: string) => setConfirmPassword(el)}
            />
            <View
                style={{
                    flex: 1,
                    justifyContent: 'flex-end',
                    marginBottom: 40
                }}
            >
                <Button
                    title="Suivant"
                    onPress={handleNavigate}
                    disabled={!email || !password || !confirmPassword}
                />
            </View>
        </SafeAreaView>
    );
};

const mapStateToProps = (state: any) => ({
    userData: state.register
});

const mapDispatchToProps = (dispatch: any) => ({
    setUserData: (data: IData) => dispatch(registerActions.setUserData(data)),
    loadCompanyData: (company: string) =>
        dispatch(registerActions.fetchCompany({ company }))
});

export const RegisterStepOneScreen = connect(
    mapStateToProps,
    mapDispatchToProps
)(RegisterStepOne);
