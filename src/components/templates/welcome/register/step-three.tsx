import React, { useState } from 'react';
import { View, ViewStyle, TextStyle, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import SafeAreaView from 'react-native-safe-area-view';

import { Header, Button } from 'madu/components';
import { color, spacing } from 'madu/theme';
import { DropdownMenu } from 'madu/components/molecules/drop-down';
import { registerActions } from 'madu/actions/register.actions';
import { Text } from 'madu/components/atoms/text/text';

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

export interface RegisterStepThreeScreenProps extends RegisterScreenProps {
    setUserData: (data: IData) => void;
}

interface IData {
    workDivision: string;
}

const RegisterStepThree = (props: RegisterStepThreeScreenProps) => {
    const { navigation, userData, setUserData } = props;
    const workPlaces = [
        { label: 'test1', value: 'test1' },
        { label: 'test2', value: 'test2' }
    ];

    const [workDivision, setWorkDivision] = useState(
        userData.workDivision || ''
    );

    const navigateToNextStep = () => {
        navigation.navigate('registerStepFour');
    };

    const handleNavigate = () => {
        setUserData({ workDivision });
        navigateToNextStep();
    };
    const goBack = React.useMemo(() => () => navigation.goBack(), [navigation]);
    return (
        <SafeAreaView style={CONTAINER}>
            <Header
                headerText="L’Oréal vous souhaite la bienvenue sur l’app MADU"
                leftIcon="back"
                onLeftPress={goBack}
                style={HEADER}
                titleStyle={HEADER_TITLE}
            />
            <Text textSize={16} bottom={54}>
                Renseignez le département dans lequel vous travaillez, pour
                découvrir et réaliser des défis écoresponsables avec vos
                collègues.
            </Text>
            <DropdownMenu
                title={workDivision || 'Département'}
                component={
                    <View>
                        {workPlaces.map((datum, index) => (
                            <TouchableOpacity
                                onPress={() =>
                                    setWorkDivision(workPlaces[index].value)
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
                    disabled={!workDivision}
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

export const RegisterStepThreeScreen = connect(
    mapStateToProps,
    mapDispatchToProps
)(RegisterStepThree);
