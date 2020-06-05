import * as React from 'react';
import { View, ViewStyle, TextStyle, Image } from 'react-native';
import { useState } from 'react';
import { connect } from 'react-redux';
import { Screen, Header, Button } from '../../../index';
import { color, spacing } from '../../../../theme';
import { ImagePickerRegister } from '../../../molecules/image-picker/image-picker';
import { Text } from '../../../atoms/text/text';
import { CameraComponent } from '../../../atoms/camera/camera';
import { registerActions } from '../../../../actions/register.actions';
import { RegisterScreenProps } from './step-one';

const FULL: ViewStyle = {
    flex: 1,
    backgroundColor: 'white'
};
export const IMAGE_CONTAINER: ViewStyle = {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
};
export const IMAGE = {
    flex: 1,
    width: 200,
    height: 200,
    borderRadius: 100
};
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
const FOOTER: ViewStyle = {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center'
};

interface IData {
    image: string;
}
export interface RegisterStepFiveScreenProps extends RegisterScreenProps {
    setUserData: (data: IData) => void;
}

export const RegisterStepFive = (props: RegisterStepFiveScreenProps) => {
    const { navigation, setUserData, userData } = props;
    const [isTakingImage, setTakingImage] = useState(false);
    const [isChosingImage, setChosingImage] = useState(false);
    const navigateToNextStep = React.useMemo(
        () => () => {
            navigation.navigate('register-step-six');
            setTakingImage(false);
            setChosingImage(false);
        },
        [navigation]
    );
    const navigateToHome = React.useMemo(
        () => () => {
            navigation.navigate('home');
            setTakingImage(false);
            setChosingImage(false);
        },
        [navigation]
    );
    const goBack = React.useMemo(() => () => navigation.goBack(), [navigation]);
    return (
        <View style={FULL}>
            {isChosingImage && (
                <ImagePickerRegister
                    saveImage={setUserData}
                    navigateToNextStep={setChosingImage}
                />
            )}
            {isTakingImage && (
                <CameraComponent
                    saveImage={setUserData}
                    navigateToNextStep={setTakingImage}
                />
            )}
            {!isTakingImage && !isChosingImage && (
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
                    <Text>
                        Prenez ou choississez une photo de vous et commencez à
                        remplir votre cagnotte
                    </Text>
                    <View style={IMAGE_CONTAINER}>
                        <Image
                            style={IMAGE}
                            source={
                                userData.image !== ''
                                    ? {
                                          uri: userData.image
                                      }
                                    : // eslint-disable-next-line global-require
                                      require('../../../../../assets/avatar.png')
                            }
                        />
                    </View>
                    <Button
                        text="Choisir une photo"
                        onPress={() => setChosingImage(true)}
                    />
                    <Button
                        text="Prendre une photo"
                        onPress={() => setTakingImage(true)}
                    />
                    <View style={FOOTER}>
                        <Button text="passer" onPress={navigateToHome} />
                        {/* if userData.image !== '' */}
                        <Button text="confirmer" onPress={navigateToNextStep} />
                    </View>
                </Screen>
            )}
        </View>
    );
};

const mapStateToProps = (state: any) => ({
    userData: state.register
});

const mapDispatchToProps = (dispatch: any) => ({
    setUserData: (data: IData) => dispatch(registerActions.setUserData(data))
});

export const RegisterStepFiveScreen = connect(
    mapStateToProps,
    mapDispatchToProps
)(RegisterStepFive);
