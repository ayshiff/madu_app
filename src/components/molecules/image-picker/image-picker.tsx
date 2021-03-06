import React, { useEffect } from 'react';
import { View } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';

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

    const getPermissionAsync = async () => {
        if (Constants?.platform?.ios) {
            const { status } = await Permissions.askAsync(Permissions.CAMERA);
            const { status: statusroll } = await Permissions.askAsync(
                Permissions.CAMERA_ROLL
            );
            if (status !== 'granted' || statusroll !== 'granted') {
                alert(
                    'Sorry, we need camera roll permissions to make this work!'
                );
            } else {
                alert('work');
                pickImage();
            }
        }
    };

    useEffect(() => {
        getPermissionAsync();
    }, []);

    return (
        <View
            // eslint-disable-next-line react-native/no-inline-styles
            style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
        />
    );
};
