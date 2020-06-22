import React, { useState } from 'react';
import { View, ViewStyle, TextStyle } from 'react-native';
import { connect } from 'react-redux';
import { Screen, Header, Button } from '../../../index';
import { color, spacing } from '../../../../theme';
import Picker from '../../../atoms/picker/picker';
import { Text } from '../../../atoms/text/text';
import { registerActions } from '../../../../actions/register.actions';
import { RegisterScreenProps } from './step-one';

const FULL: ViewStyle = { flex: 1, backgroundColor: color.background };
const TEXT: TextStyle = {
    color: color.dark_1,
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

export interface RegisterStepTwoScreenProps extends RegisterScreenProps {
    setUserData: (data: IData) => void;
}

interface IData {
    workplace: string;
}

const RegisterStepTwo = (props: RegisterStepTwoScreenProps) => {
    const { navigation, userData, setUserData } = props;
    const [workPlaces] = useState([{ label: 'Paris', value: 'Paris' }]);
    const [workplace, setWorkplace] = useState(userData.workplace || '');

    const navigateToNextStep = React.useMemo(
        () => () => navigation.navigate('register-step-three'),
        [navigation]
    );
    const handleNavigate = () => {
        setUserData({ workplace });
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
                    boldText="L’Oréal"
                    headerText="vous souhaite la bienvenue sur l’app MADU"
                    leftIcon="back"
                    onLeftPress={goBack}
                    style={HEADER}
                    titleStyle={HEADER_TITLE}
                />
                <Text>
                    Renseignez votre lieux de travail, pour découvrir des
                    adresses écoresponsables près de votre entreprise.
                </Text>
                <Picker
                    placeholder="Sélectionner un lieux"
                    selectedValue={workplace}
                    label="Lieu de travail"
                    onValueChange={(itemValue: string) =>
                        setWorkplace(itemValue)
                    }
                    items={workPlaces}
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

export const RegisterStepTwoScreen = connect(
    mapStateToProps,
    mapDispatchToProps
)(RegisterStepTwo);
