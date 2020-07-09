import * as React from 'react';
import { TouchableOpacity, Dimensions, View } from 'react-native';
import styled from 'styled-components/native';
import { useState } from 'react';
import { color } from 'madu/theme/color';
import { OldText } from 'madu/components/atoms/old-text/old-text';
import { Icon } from 'madu/components/atoms/icon/icon';
import { OldButton } from 'madu/components/atoms/old-button/old-button';
import { connect } from 'react-redux';
import { poiActions, IPointOfInterest } from 'madu/actions/poi.actions';

const mockCover = require('madu/assets/mock_cover.png');

/** Styled components */

const Container = styled.View`
    flex: 1;
    background-color: ${color.background};
`;

const StyledIcon = {
    width: 40,
    height: 40
};

const IconLink = styled(Icon)`
    width: 20px;
    height: 20px;
`;

const Contact = styled.View`
    flex: 1;
    flex-direction: row;
    align-items: center;
`;

const Close = styled(TouchableOpacity)`
    position: absolute;
    top: 15px;
    right: 15px;
`;

const Footer = styled.View`
    position: absolute;
    bottom: 0;
    height: 110px;
    margin: 20px;
`;

const Wallpaper = styled.Image`
    width: ${Dimensions.get('window').width}px;
    resize-mode: cover;
    border-bottom-left-radius: 30px;
    border-bottom-right-radius: 30px;
`;

const ActionOldButton = styled(OldButton)`
    margin-top: -25px;
    width: 170px;
    background: #ee6538;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

const ActionContainer = styled.View`
    flex: 1;
    flex-direction: row;
    align-items: flex-end;
    justify-content: flex-end;
`;

const Tag = styled.View`
    background: #ffffff;
    border: 1px solid #febfd3;
    border-radius: 20px;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin-left: 10px;
`;

const ActionOldButtonPlus = styled.View`
    background: #f39272;
    border-radius: 25px;
    justify-content: center;
    align-items: center;
    height: 90%;
    width: 55px;
`;

const TagText = styled(OldText)`
    color: #fe8eb1;
`;

export const OpenStatus = styled(OldText)`
    color: #137e73;
    margin-top: 0;
    font-size: 16px;
`;

export const PriceRange = styled(OldText)`
    color: #9e9e9e;
    margin-top: 0;
    font-size: 16px;
`;

const Description = styled(OldText)`
    margin-top: 40px;
    color: #2f4a70;
`;

const Visit = styled(OldText)`
    color: #9e9e9e;
    text-align: right;
`;

const Likes = styled(OldText)`
    color: #9e9e9e;
`;

export const Category = styled(OldText)`
    margin-top: 0;
`;

const TagList = styled.View`
    flex-direction: row;
    flex-wrap: wrap;
`;

const Community = styled.TouchableOpacity`
    margin-right: 20px;
`;

export const PriceContainer = styled.View`
    flex-direction: row;
`;

const Header = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

const Middle = styled.View`
    margin-top: 25px;
`;

const Like = styled.View`
    flex-direction: row;
    justify-content: center;
    align-items: center;
    text-align: center;
`;

export interface DetailScreenProps {
    loadContent: () => string;
    content: string;
    navigation: any;
    points: any;
    profile: any;
    route: any;
    visitPoi: (arg: string) => void;
    likePoi: (arg: string) => void;
}

export const Poi = ({
    navigation,
    route,
    visitPoi,
    likePoi,
    points,
    profile
}: DetailScreenProps) => {
    const navigateToSuccess = () => navigation.navigate('poi-success', profile);

    const pointId = route.params;

    const [point, setPoint] = React.useState<IPointOfInterest | null>(null);

    const extracted = points[pointId];

    React.useEffect(() => {
        setPoint(points[pointId]);
    }, [extracted, pointId, points]);

    return (
        <Container>
            {point && (
                <>
                    <View>
                        <Wallpaper source={mockCover} />
                        <Close onPress={() => navigation.goBack()}>
                            <Icon style={StyledIcon} icon="close" />
                        </Close>
                        <ActionContainer>
                            <ActionOldButton
                                onPress={() => {
                                    visitPoi(point.id);
                                    navigateToSuccess();
                                }}
                            >
                                <OldText>J'y suis</OldText>
                                {point.visits ? (
                                    <ActionOldButtonPlus>
                                        <OldText>{point.visits}</OldText>
                                    </ActionOldButtonPlus>
                                ) : null}
                            </ActionOldButton>
                        </ActionContainer>
                    </View>
                    <Middle>
                        <Header>
                            <View>
                                <OldText preset="header">{point.name}</OldText>
                                <Category preset="default">
                                    {point.description}
                                </Category>
                            </View>
                            <Community onPress={() => likePoi(point.id)}>
                                <Like>
                                    <IconLink icon="like2" />
                                    <Likes preset="fieldLabel">
                                        {point.likes.length} j'aime
                                    </Likes>
                                </Like>
                                <Visit preset="fieldLabel">
                                    {point.visits || 0} visites
                                </Visit>
                            </Community>
                        </Header>
                        <PriceContainer>
                            <OpenStatus preset="fieldLabel">Ouvert</OpenStatus>
                            <PriceRange preset="fieldLabel">
                                {point.priceRange}
                            </PriceRange>
                        </PriceContainer>
                        <TagList>
                            {point.poiType.map((poiType: string) => (
                                <Tag key={poiType}>
                                    <TagText>{poiType}</TagText>
                                </Tag>
                            ))}
                        </TagList>
                        <Description preset="default">
                            {point.content}
                        </Description>
                    </Middle>
                    <Footer>
                        {/* Address */}
                        <Contact>
                            <IconLink icon="pin" />
                            <OldText preset="default">
                                {point.address.value}
                            </OldText>
                        </Contact>
                        {/* Web */}
                        <Contact>
                            <IconLink icon="website" />
                            <OldText
                                style={{ color: '#EE6538' }}
                                preset="default"
                            >
                                {point.website}
                            </OldText>
                        </Contact>
                        {/* Phone */}
                        <Contact>
                            <IconLink icon="phone" />
                            <OldText
                                style={{ color: '#EE6538' }}
                                preset="default"
                            >
                                {point.phone}
                            </OldText>
                        </Contact>
                    </Footer>
                </>
            )}
        </Container>
    );
};

const mapStateToProps = (state: any) => ({
    points: state.poi.list,
    profile: state.profile
});

const mapDispatchToProps = (dispatch: any) => ({
    likePoi: (poiId: string) => dispatch(poiActions.likePoi(poiId)),
    visitPoi: (poiId: string) => dispatch(poiActions.visitPoi(poiId))
});

export const PoiScreen = connect(mapStateToProps, mapDispatchToProps)(Poi);
