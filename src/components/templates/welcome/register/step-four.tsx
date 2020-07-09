import * as React from 'react';
import { View, ViewStyle, TextStyle } from 'react-native';
import { connect } from 'react-redux';
import SafeAreaView from 'react-native-safe-area-view';

import { Header, Input, Button } from 'madu/components';
import { color, spacing } from 'madu/theme';
import { registerActions } from 'madu/actions/register.actions';

import { RegisterScreenProps } from './step-one';

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
export interface RegisterStepFourScreenProps extends RegisterScreenProps {
    setUserData: (data: IData) => void;
}

interface IData {
    firstname: string;
    lastname: string;
    companyPosition: string;
}

const RegisterStepFour = (props: RegisterStepFourScreenProps) => {
    const { navigation, userData, setUserData } = props;
    const [firstName, setFirstName] = React.useState(userData.firstname || '');
    const [lastname, setSurname] = React.useState(userData.lastname || '');
    const [companyPosition, setCompanyPosition] = React.useState(
        userData.companyPosition || ''
    );

    const navigateToNextStep = () => {
        navigation.navigate('registerStepFive');
    };

    const handleNavigate = () => {
        setUserData({ firstname: firstName, lastname, companyPosition });
        navigateToNextStep();
    };
    const goBack = React.useMemo(() => () => navigation.goBack(), [navigation]);
    return (
        <SafeAreaView style={CONTAINER}>
            <Header
                headerText="Complétez votre profil"
                leftIcon="back"
                onLeftPress={goBack}
                style={HEADER}
                titleStyle={HEADER_TITLE}
            />
            <Input
                value={firstName}
                placeholder="Nom"
                label="Nom"
                onChangeText={(el: string) => setFirstName(el)}
            />
            <Input
                value={lastname}
                placeholder="Prénom"
                label="Prénom"
                onChangeText={(el: string) => setSurname(el)}
            />
            <Input
                value={companyPosition}
                placeholder="Votre poste de travail"
                label="Poste"
                onChangeText={(el: string) => setCompanyPosition(el)}
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
                    disabled={!firstName || !lastname || !companyPosition}
                />
            </View>
        </SafeAreaView>
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
