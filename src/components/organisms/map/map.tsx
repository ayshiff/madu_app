/* eslint-disable global-require */
import React, { useState, useRef } from 'react';
import MapView, { Circle, Marker, Callout } from 'react-native-maps';
import { StyleSheet, View, Dimensions } from 'react-native';
import styled from 'styled-components/native';
import { IPointOfInterest } from 'madu/actions/poi.actions';
import { OldText } from 'madu/components/atoms/old-text/old-text';
import {
    Category,
    PriceContainer,
    OpenStatus,
    PriceRange
} from 'madu/screens/poi-screen/poi-screen';
import { IProfile } from 'madu/actions/profile.actions';

// const mockCover = require('madu/assets/mock_cover.png');

const CustomCallout = styled(Callout)`
    width: 250px;
    height: 150px;
    background: #ffffff;
    border-radius: 50px;
`;

const Visit = styled(OldText)`
    color: #9e9e9e;
    text-align: right;
    position: absolute;
    bottom: 0;
    right: 0;
`;

// Image style
// const Wallpaper = styled.Image`
//     height: 120px;
//     width: 125px;
//     resize-mode: contain;
// `;

// const WallpaperContainer = styled.Text`
//     width: 125px;
//     height: 125px;
// `;

// const Container = styled.View`
//     flex-direction: row;
// `;

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

export interface MapProps {
    navigation: any;
    points: IPointOfInterest[];
    profile: IProfile;
}

interface CategoryMarkers {
    [key: string]: any;
}

const categoryMarkers: CategoryMarkers = {
    restoration: require('madu/components/atoms/icon/icons/map_restoration.png'),
    experience: require('madu/components/atoms/icon/icons/map_experience.png'),
    shop: require('madu/components/atoms/icon/icons/map_shop.png')
};

export const Map = (props: MapProps) => {
    const {
        navigation,
        points,
        profile: {
            company: { address }
        }
    } = props;
    const map = useRef(null);

    return (
        <View style={styles.container}>
            <MapView
                region={{
                    latitude: address.lng,
                    longitude: address.lat,
                    latitudeDelta: 0.025,
                    longitudeDelta: 0.025
                }}
                ref={map}
                style={styles.mapStyle}
            >
                {/* Circle */}
                <Circle
                    center={{
                        latitude: address.lng,
                        longitude: address.lat
                    }}
                    radius={1000}
                    strokeWidth={1.5}
                    strokeColor="#856B7F"
                    fillColor="rgba(133, 107, 127, 0.1)"
                />
                {Object.values(points) && Object.values(points).length
                    ? Object.values(points).map((point: any) => (
                          <Marker
                              key={point.id}
                              title={point.name}
                              description={point.description}
                              icon={categoryMarkers[point.category]}
                              coordinate={{
                                  // lat-lng reversed in the backoffice
                                  latitude: point.address.lng,
                                  longitude: point.address.lat
                              }}
                              onCalloutPress={(e) => {
                                  e.stopPropagation();
                                  navigation.navigate('poi', point.id);
                              }}
                          >
                              <CustomCallout tooltip>
                                  <View>
                                      <OldText preset="header">
                                          {point.name}
                                      </OldText>
                                      <Category preset="default">
                                          {point.description}
                                      </Category>
                                  </View>
                                  <PriceContainer>
                                      <OpenStatus preset="fieldLabel">
                                          Ouvert
                                      </OpenStatus>
                                      <PriceRange preset="fieldLabel">
                                          {point.priceRange}
                                      </PriceRange>
                                      <Visit>{point.visits} visites</Visit>
                                  </PriceContainer>
                              </CustomCallout>
                          </Marker>
                      ))
                    : null}
            </MapView>
        </View>
    );
};
