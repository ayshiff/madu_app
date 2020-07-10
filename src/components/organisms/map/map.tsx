/* eslint-disable global-require */
import React, { useRef } from 'react';
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

const CustomCallout = styled(Callout)`
    width: 250px;
    height: 120px;
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
    const { navigation, points, profile } = props;
    const map = useRef(null);

    return (
        <View style={styles.container}>
            <MapView
                region={{
                    latitude: profile?.company?.address.lat,
                    longitude: profile?.company?.address.lng,
                    latitudeDelta: 0.025,
                    longitudeDelta: 0.025
                }}
                ref={map}
                style={styles.mapStyle}
            >
                {/* Circle */}
                <Circle
                    center={{
                        latitude: profile?.company?.address.lat,
                        longitude: profile?.company?.address.lng
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
                                  latitude: point.address.lat,
                                  longitude: point.address.lng
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
