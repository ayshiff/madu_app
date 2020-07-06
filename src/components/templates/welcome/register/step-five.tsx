import * as React from 'react';
import { View, ViewStyle, TextStyle, Image } from 'react-native';
import { useState } from 'react';
import { connect } from 'react-redux';

import { Screen, Header, Button } from 'madu/components';
import { color, spacing } from 'madu/theme';
import { ImagePickerRegister } from 'madu/components/molecules/image-picker/image-picker';
import { Text } from 'madu/components/atoms/text/text';
import { CameraComponent } from 'madu/components/atoms/camera/camera';
import { registerActions } from 'madu/actions/register.actions';
import { RegisterScreenProps } from './step-one';

const IMAGE_CONTAINER: ViewStyle = {
    flex: 1,
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    width: 80,
    height: 80,
    borderRadius: 100
};

const IMAGE = {
    width: 30,
    height: 30
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
    const navigateToNextStep = () => {
        navigation.navigate('registerStepSix');
        setTakingImage(false);
        setChosingImage(false);
    };

    const navigateToHome = () => {
        navigation.navigate('home');
        setTakingImage(false);
        setChosingImage(false);
    };

    const goBack = React.useMemo(() => () => navigation.goBack(), [navigation]);
    return (
        <>
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
                    <View style={IMAGE_CONTAINER}>
                        <Image
                            style={IMAGE}
                            source={
                                userData.image !== ''
                                    ? {
                                          uri: userData.image
                                      }
                                    : // eslint-disable-next-line global-require
                                      require('madu/assets/avatar.png')
                            }
                        />
                    </View>
                    <Text textSize={16} textAlign="center">
                        Responsable Marketing • Communication
                    </Text>
                    <Text>
                        Mettez dès à présent votre photo de profil pour que vos
                        collègues vous reconnaissent. {'\n'} Et gagnez vos
                        premiers points !
                    </Text>
                    <Button
                        title="Choisir une photo"
                        onPress={() => setChosingImage(true)}
                    />
                    <Button
                        title="Prendre une photo"
                        onPress={() => setTakingImage(true)}
                    />
                    <Button title="Terminer" onPress={navigateToHome} />
                </Screen>
            )}
        </>
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
