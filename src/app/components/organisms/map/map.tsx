import React, { useState, useRef } from 'react';
import MapView, { Circle, Marker, Callout } from 'react-native-maps';
import { StyleSheet, View, Dimensions, Text } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    mapStyle: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height
    }
});

const PARIS_LOCATION = {
    latitude: 48.8534,
    longitude: 2.3488,
    latitudeDelta: 0.19,
    longitudeDelta: 0.19
};

export interface MapProps {
    navigation: any;
}

export const Map = (props: MapProps) => {
    const { navigation } = props;
    const [centerPoint, setCenterPoint] = useState<{
        latitude: number;
        longitude: number;
        latitudeDelta: number;
        longitudeDelta: number;
    }>(PARIS_LOCATION);
    const map = useRef(null);

    const navigateToDetailScreen = React.useMemo(
        () => () => navigation.navigate('poi'),
        [navigation]
    );

    return (
        <View style={styles.container}>
            <MapView region={centerPoint} ref={map} style={styles.mapStyle}>
                {/* Circle */}
                <Circle
                    center={centerPoint}
                    radius={700}
                    strokeWidth={1.5}
                    strokeColor="#FAAD14"
                    fillColor="rgba(250, 173, 20, 0.1);"
                />
                <Marker
                    key="test"
                    title="title"
                    description="description"
                    coordinate={{
                        latitude: 48.8534,
                        longitude: 2.3488
                    }}
                    onPress={(e) => {
                        e.stopPropagation();
                        navigateToDetailScreen();
                    }}
                />
            </MapView>
        </View>
    );
};
