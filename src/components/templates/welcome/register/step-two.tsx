import React, { useState } from 'react';
import { View, ViewStyle, TextStyle, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';

import { Screen, Header, Button } from 'madu/components';
import { color, spacing } from 'madu/theme';
import { DropdownMenu } from 'madu/components/molecules/drop-down';
import { Text } from 'madu/components/atoms/text/text';
import { registerActions } from 'madu/actions/register.actions';

import { RegisterScreenProps } from './step-one';

const TEXT: TextStyle = {
    color: color.palette.black,
    fontFamily: 'Montserrat'
};

const BOLD: TextStyle = { fontWeight: 'bold' };

const CONTAINER: ViewStyle = {
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
    const workPlaces = [
        { label: 'test1', value: 'test1' },
        { label: 'test2', value: 'test2' }
    ];

    const [workplace, setWorkplace] = useState(userData.workplace || '');

    const navigateToNextStep = () => {
        navigation.navigate('registerStepThree');
    };

    const handleNavigate = () => {
        setUserData({ workplace });
        navigateToNextStep();
    };
    const goBack = React.useMemo(() => () => navigation.goBack(), [navigation]);
    return (
        <Screen style={CONTAINER} preset="scroll">
            <Header
                headerText="L’Oréal vous souhaite la bienvenue sur l’app MADU"
                leftIcon="back"
                onLeftPress={goBack}
                style={HEADER}
                titleStyle={HEADER_TITLE}
            />
            <Text textSize={16}>
                Renseignez votre lieux de travail, pour découvrir des adresses
                écoresponsables près de votre entreprise.
            </Text>
            <View>
                <DropdownMenu
                    title="Lieu de travail"
                    component={
                        <View>
                            {workPlaces.map((datum, index) => (
                                <TouchableOpacity
                                    // onPress={onPressChoiceOrigin()}
                                    key={index}
                                    style={{
                                        flexDirection: 'column',
                                        paddingVertical: 10,
                                        paddingHorizontal: 14,
                                        backgroundColor: '#fff'
                                    }}
                                >
                                    <Text
                                        style={{
                                            color: '#9F9F9F',
                                            textTransform: 'uppercase',
                                            marginBottom: 4
                                        }}
                                        textSize={14}
                                    >
                                        {datum.value}
                                    </Text>
                                </TouchableOpacity>
                            ))}
                        </View>
                    }
                />
            </View>
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

export const RegisterStepTwoScreen = connect(
    mapStateToProps,
    mapDispatchToProps
)(RegisterStepTwo);
