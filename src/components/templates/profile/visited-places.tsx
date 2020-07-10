import * as React from 'react';
import { View, Text } from 'react-native';
import styled from 'styled-components/native';
import { connect } from 'react-redux';

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
    border-radius: 24px;
`;

export interface VisitedPlacesScreenProps {
    navigation: any;
    visits: any[];
    poi: any;
}

const VisitedPlacesNumber = styled.Text`
    color: #fe8eb1;
`;

export const VisitedPlaces = ({
    navigation,
    visits,
    poi
}: VisitedPlacesScreenProps) => {
    return (
        <Full>
            {visits &&
                visits.map((visit) => (
                    <VisitedPlacesScreenContainer key={visit.id}>
                        <VisitedPlacesInformationContainer>
                            <VisitedPlacesInformation>
                                <VisitedPlacesPic
                                    source={{ uri: poi[visit.id].images[0] }}
                                />
                                <View>
                                    <VisitedPlacesName>
                                        {visit.name}
                                    </VisitedPlacesName>
                                    <VisitedPlacesType>
                                        {visit.description}
                                    </VisitedPlacesType>
                                </View>
                            </VisitedPlacesInformation>
                        </VisitedPlacesInformationContainer>
                        <VisitedPlacesNumberContainer>
                            <VisitedPlacesNumber>
                                {poi[visit.id].visits} Visites
                            </VisitedPlacesNumber>
                        </VisitedPlacesNumberContainer>
                    </VisitedPlacesScreenContainer>
                ))}
        </Full>
    );
};

const mapStateToProps = (state: any) => ({
    poi: state.poi.list
});

const mapDispatchToProps = () => ({});

export const VisitedPlacesScreen = connect(
    mapStateToProps,
    mapDispatchToProps
)(VisitedPlaces);
