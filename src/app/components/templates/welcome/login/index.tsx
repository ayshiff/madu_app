import * as React from 'react';
import { View, ViewStyle, TextStyle } from 'react-native';
import { useState } from 'react';
import { connect } from 'react-redux';
import { Screen, Header, Input, Button } from '../../../index';
import { color, spacing } from '../../../../theme';
import { loginActions } from '../../../../actions/login.actions';

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

export interface LoginScreenProps {
    navigation: any;
    login: (data: IData) => void;
    userData: any;
}

interface IData {
    email: string;
    password: string;
}

const Login = (props: LoginScreenProps) => {
    const { navigation, login } = props;
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigateToNextStep = React.useMemo(
        () => () => navigation.navigate('home'),
        [navigation]
    );
    const handleNavigate = () => {
        login({ email, password });
        navigateToNextStep();
    };

    return (
        <View style={FULL}>
            <Screen
                style={CONTAINER}
                preset="scroll"
                backgroundColor={color.transparent}
            >
                <Header
                    headerText="Login Screen"
                    style={HEADER}
                    titleStyle={HEADER_TITLE}
                />
                <Input
                    placeholder="Adresse mail professionnel"
                    label="Adresse mail professionnel"
                    value={email}
                    onChangeText={(el: string) => setEmail(el)}
                />
                <p>Mot de passe oublié ?</p>
                <Input
                    placeholder="Mot de passe"
                    label="Mot de passe"
                    value={password}
                    onChangeText={(el: string) => setPassword(el)}
                />
                <Button text="Créer un compte" onPress={handleNavigate} />
            </Screen>
        </View>
    );
};

const mapStateToProps = (state: any) => ({
    userData: state.login
});

const mapDispatchToProps = (dispatch: any) => ({
    login: (data: IData) => dispatch(loginActions.login(data))
});

export const LoginScreen = connect(mapStateToProps, mapDispatchToProps)(Login);