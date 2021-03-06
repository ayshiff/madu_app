import React, { useState } from 'react';
import { View, ViewStyle, TextStyle, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import SafeAreaView from 'react-native-safe-area-view';

import { Header, Button } from 'madu/components';
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

export interface RegisterStepTwoScreenProps extends RegisterScreenProps {
    setUserData: (data: IData) => void;
}

interface IData {
    workplace: string;
}

const RegisterStepTwo = (props: RegisterStepTwoScreenProps) => {
    const { navigation, userData, setUserData } = props;

    const workPlaces =
        userData && userData.company
            ? userData.company.workplaces.map((el) => ({
                  label: el,
                  value: el
              }))
            : [];

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
        <SafeAreaView style={CONTAINER}>
            <Header
                headerText={`${
                    userData.company ? userData.company.name : 'On'
                } vous souhaite la bienvenue sur l’app MADU`}
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
                    title={workplace || 'Lieu de travail'}
                    component={
                        <View>
                            {workPlaces.map((datum, index) => (
                                <TouchableOpacity
                                    onPress={() =>
                                        setWorkplace(workPlaces[index].value)
                                    }
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
                    disabled={!workplace}
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

export const RegisterStepTwoScreen = connect(
    mapStateToProps,
    mapDispatchToProps
)(RegisterStepTwo);
