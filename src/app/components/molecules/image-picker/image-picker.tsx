import React, { useEffect } from 'react';
import { View } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';

export const ImagePickerRegister = ({
    navigateToNextStep,
    saveImage
}: {
    navigateToNextStep: any;
    saveImage: any;
}) => {
    const pickImage = async () => {
        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1
        });

        if (!result.cancelled) {
            saveImage({ image: result.uri });
            navigateToNextStep(false);
        }
    };

    useEffect(() => {
        (async () => {
            if (Constants?.platform?.ios) {
                const {
                    status
                } = await ImagePicker.requestCameraRollPermissionsAsync();
                if (status === 'granted') {
                    await pickImage();
                }
            } else {
                await pickImage();
            }
        })();
    }, []);

    return (
        <View
            // eslint-disable-next-line react-native/no-inline-styles
            style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
        />
    );
};
