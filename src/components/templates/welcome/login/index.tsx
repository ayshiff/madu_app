import * as React from 'react';
import { ViewStyle, TextStyle, View } from 'react-native';
import { useState } from 'react';
import { connect } from 'react-redux';
import SafeAreaView from 'react-native-safe-area-view';

import { Header, Input, Button } from 'madu/components/index';
import { color, spacing } from 'madu/theme';
import { loginActions } from 'madu/actions/login.actions';

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
        if (props.userData.accessToken) {
            navigateToNextStep();
        }
    };

    return (
        <SafeAreaView style={CONTAINER}>
            <Header
                headerText="Connectez-vous"
                style={HEADER}
                titleStyle={HEADER_TITLE}
            />
            <Input
                placeholder="Adresse mail professionnel"
                label="Adresse mail professionnel"
                value={email}
                onChangeText={(el: string) => setEmail(el)}
            />
            <Input
                placeholder="Mot de passe"
                label="Mot de passe"
                secureTextEntry
                value={password}
                onChangeText={(el: string) => setPassword(el)}
            />
            <View
                style={{
                    flex: 1,
                    justifyContent: 'flex-end',
                    marginBottom: 40
                }}
            >
                <Button
                    title="Je me connecte"
                    onPress={handleNavigate}
                    disabled={!email || !password}
                />
            </View>
        </SafeAreaView>
    );
};

const mapStateToProps = (state: any) => ({
    userData: state.login
});

const mapDispatchToProps = (dispatch: any) => ({
    login: (data: IData) => dispatch(loginActions.login(data))
});

export const LoginScreen = connect(mapStateToProps, mapDispatchToProps)(Login);
