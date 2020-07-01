import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { Camera } from 'expo-camera';

export const CameraComponent = ({
    navigateToNextStep,
    saveImage
}: {
    navigateToNextStep: any;
    saveImage: any;
}) => {
    const [hasPermission, setHasPermission] = useState<boolean | null>(null);
    const [type] = useState(Camera.Constants.Type.back);
    const camera = React.createRef<Camera>();

    useEffect(() => {
        (async () => {
            const { status } = await Camera.requestPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    }, []);

    const takePicture = async () => {
        if (camera.current) {
            const options = { quality: 1, base64: true };
            const data = await camera.current.takePictureAsync(options);
            saveImage({ image: data.uri });
            navigateToNextStep(false);
        }
    };

    if (hasPermission === null) {
        return <View />;
    }
    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }
    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <Camera
                ref={camera}
                style={{ flex: 1, backgroundColor: 'white' }}
                type={type}
            >
                <View
                    style={{
                        flex: 1,
                        backgroundColor: 'transparent',
                        flexDirection: 'row'
                    }}
                >
                    <TouchableOpacity
                        style={{
                            flex: 0.1,
                            alignSelf: 'flex-end',
                            alignItems: 'center'
                        }}
                        onPress={() => {
                            takePicture();
                        }}
                    >
                        <Text
                            style={{
                                fontSize: 18,
                                marginBottom: 10,
                                color: 'white'
                            }}
                        >
                            Snap
                        </Text>
                    </TouchableOpacity>
                </View>
            </Camera>
        </View>
    );
};
