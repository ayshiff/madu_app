import * as React from 'react';
import { View, Text } from 'react-native';
import styled from 'styled-components/native';

const Full = styled.View`
    flex: 1;
    background-color: #ffffff;
`;

const VisitedPlacesScreenContainer = styled.View`
    height: 65px;
    margin-top: 20px;
    flex-direction: row;
    justify-content: space-around;
    border-radius: 50px;
`;

const VisitedPlacesInformation = styled.View`
    flex-direction: row;
`;

const VisitedPlacesNumberContainer = styled.View`
    margin-top: 19px;
    width: 69px;
    height: 29px;
    background-color: #ffedf3;
    border-radius: 2px;
    align-items: center;
    justify-content: center;
    right: 0;
`;

const VisitedPlacesInformationContainer = styled.View`
    flex-direction: row;
    margin-top: 9px;
`;

const VisitedPlacesName = styled.Text`
    margin-top: 4px;
    font-size: 14px;
    font-weight: bold;
`;

const VisitedPlacesType = styled.Text`
    font-size: 12px;
    margin-top: -4px;
`;

const VisitedPlacesPic = styled.Image`
    width: 48px;
    height: 48px;
    margin-right: 11px;
`;

export interface VisitedPlacesScreenProps {
    loadContent: () => string;
    content: string;
    navigation: any;
}

const VisitedPlacesNumber = styled.Text`
    color: #fe8eb1;
`;

export const VisitedPlacesScreen = ({
    navigation
}: VisitedPlacesScreenProps) => {
    return (
        <Full>
            <VisitedPlacesScreenContainer>
                <VisitedPlacesInformationContainer>
                    <VisitedPlacesInformation>
                        <VisitedPlacesPic
                            source={require('../../../../../assets/profile-pic.png')}
                        />
                        <View>
                            <VisitedPlacesName>Kapunka</VisitedPlacesName>
                            <VisitedPlacesType>
                                Restaurant thai vegan
                            </VisitedPlacesType>
                        </View>
                    </VisitedPlacesInformation>
                </VisitedPlacesInformationContainer>
                <VisitedPlacesNumberContainer>
                    <VisitedPlacesNumber>3 Visites</VisitedPlacesNumber>
                </VisitedPlacesNumberContainer>
            </VisitedPlacesScreenContainer>
        </Full>
    );
};
