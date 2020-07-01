/* eslint-disable global-require */
import React, { useState, useRef, useEffect } from 'react';
import MapView, { Circle, Marker, Callout } from 'react-native-maps';
import { StyleSheet, View, Dimensions, Text } from 'react-native';
import { any } from 'ramda';
import { IPointOfInterest } from '../../../actions/poi.actions';

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
    points: IPointOfInterest[];
}

interface CategoryMarkers {
    [key: string]: any;
}

const categoryMarkers: CategoryMarkers = {
    restoration: require('../../atoms/icon/icons/map_restoration.png')
};

export const Map = (props: MapProps) => {
    const { navigation, points } = props;
    const [centerPoint, setCenterPoint] = useState<{
        latitude: number;
        longitude: number;
        latitudeDelta: number;
        longitudeDelta: number;
    }>(PARIS_LOCATION);
    const map = useRef(null);

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
                {points && points.length
                    ? points.map((point: any) => (
                          <Marker
                              key={point.id}
                              title={point.name}
                              description={point.description}
                              icon={categoryMarkers[point.category]}
                              coordinate={{
                                  latitude: point.address.lat,
                                  longitude: point.address.lng
                              }}
                              onCalloutPress={(e) => {
                                  e.stopPropagation();
                                  navigation.navigate('poi', point);
                              }}
                          />
                      ))
                    : null}
            </MapView>
        </View>
    );
};
