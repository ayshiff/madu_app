/* eslint-disable global-require */
import React, { useState, useRef } from 'react';
import MapView, { Circle, Marker, Callout } from 'react-native-maps';
import { StyleSheet, View, Dimensions } from 'react-native';
import styled from 'styled-components/native';
import { IPointOfInterest } from '../../../actions/poi.actions';
import { Text } from '../../atoms/text/text';
import {
    Category,
    PriceContainer,
    OpenStatus,
    PriceRange
} from '../../../screens/poi-screen/poi-screen';

const CustomCallout = styled(Callout)`
    width: 250px;
    height: 150px;
    background: #ffffff;
    border-radius: 50px;
`;

const Visit = styled(Text)`
    color: #9e9e9e;
    text-align: left;
`;

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
    latitudeDelta: 0.21,
    longitudeDelta: 0.21
};

export interface MapProps {
    navigation: any;
    points: IPointOfInterest[];
}

interface CategoryMarkers {
    [key: string]: any;
}

const categoryMarkers: CategoryMarkers = {
    restoration: require('../../atoms/icon/icons/map_restoration.png'),
    experience: require('../../atoms/icon/icons/map_experience.png'),
    shop: require('../../atoms/icon/icons/map_shop.png')
};

export const Map = (props: MapProps) => {
    const { navigation, points } = props;
    const [centerPoint] = useState<{
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
                          >
                              <CustomCallout tooltip>
                                  <View>
                                      <Text preset="header">{point.name}</Text>
                                      <Category preset="default">
                                          {point.category}
                                      </Category>
                                  </View>
                                  <PriceContainer>
                                      <OpenStatus preset="fieldLabel">
                                          Ouvert
                                      </OpenStatus>
                                      <PriceRange preset="fieldLabel">
                                          {point.priceRange}
                                      </PriceRange>
                                  </PriceContainer>
                                  <Visit preset="fieldLabel">67 visites</Visit>
                              </CustomCallout>
                          </Marker>
                      ))
                    : null}
            </MapView>
        </View>
    );
};
