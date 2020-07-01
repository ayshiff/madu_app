import * as React from 'react';
import { View, ViewStyle, TextStyle } from 'react-native';
import { connect } from 'react-redux';
import { Screen, Header, Input, Button } from '../../../index';
import { color, spacing } from '../../../../theme';
import { registerActions } from '../../../../actions/register.actions';
import { Text } from '../../../atoms/text/text';
import { RegisterScreenProps } from './step-one';

const FULL: ViewStyle = { flex: 1, backgroundColor: 'white' };
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
    textAlign: 'left'
};
export interface RegisterStepFourScreenProps extends RegisterScreenProps {
    setUserData: (data: IData) => void;
}

interface IData {
    name: string;
    lastname: string;
}

const RegisterStepFour = (props: RegisterStepFourScreenProps) => {
    const { navigation, userData, setUserData } = props;
    const [name, setName] = React.useState(userData.name || '');
    const [lastname, setSurname] = React.useState(userData.lastname || '');

    const navigateToNextStep = React.useMemo(
        () => () => navigation.navigate('register-step-five'),
        [navigation]
    );
    const handleNavigate = () => {
        setUserData({ name, lastname });
        navigateToNextStep();
    };
    const goBack = React.useMemo(() => () => navigation.goBack(), [navigation]);
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
                <Text>Complétez votre profil</Text>
                <Input
                    value={name}
                    placeholder="Nom"
                    label="Nom"
                    onChangeText={(el: string) => setName(el)}
                />
                <Input
                    value={lastname}
                    placeholder="Prénom"
                    label="Prénom"
                    onChangeText={(el: string) => setSurname(el)}
                />
                <Button text="suivant" onPress={handleNavigate} />
            </Screen>
        </View>
    );
};

const mapStateToProps = (state: any) => ({
    userData: state.register
});

const mapDispatchToProps = (dispatch: any) => ({
    setUserData: (data: IData) => dispatch(registerActions.setUserData(data))
});

export const RegisterStepFourScreen = connect(
    mapStateToProps,
    mapDispatchToProps
)(RegisterStepFour);
