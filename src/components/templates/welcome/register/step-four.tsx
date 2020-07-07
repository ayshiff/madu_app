import * as React from 'react';
import { ViewStyle, TextStyle } from 'react-native';
import { connect } from 'react-redux';

import { Screen, Header, Input, Button } from 'madu/components';
import { color, spacing } from 'madu/theme';
import { registerActions } from 'madu/actions/register.actions';

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
    const [job, setJob] = React.useState(userData.job || '');

    const navigateToNextStep = () => {
        navigation.navigate('registerStepFive');
    };

    const handleNavigate = () => {
        setUserData({ name, lastname });
        navigateToNextStep();
    };
    const goBack = React.useMemo(() => () => navigation.goBack(), [navigation]);
    return (
        <Screen style={CONTAINER} preset="scroll">
            <Header
                headerText="Complétez votre profil"
                leftIcon="back"
                onLeftPress={goBack}
                style={HEADER}
                titleStyle={HEADER_TITLE}
            />
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
            <Input
                value={lastname}
                placeholder="Votre poste de travail"
                label="Poste"
                onChangeText={(el: string) => setJob(el)}
            />
            <Button title="suivant" onPress={handleNavigate} />
        </Screen>
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
