import * as React from 'react';
import { TouchableOpacity, Dimensions, View } from 'react-native';
import styled from 'styled-components/native';
import { useState } from 'react';
import { color } from '../../theme/color';
import { Text } from '../../components/atoms/text/text';
import { Icon } from '../../components/atoms/icon/icon';
import { Button } from '../../components/atoms/button/button';

const mockCover = require('../../../assets/mock_cover.png');

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
    height: 150px;
    margin: 20px;
`;

const Wallpaper = styled.Image`
    width: ${Dimensions.get('window').width};
    resize-mode: cover;
`;

const ActionButton = styled(Button)`
    margin-top: -25px;
    width: 170px;
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

const ActionButtonPlus = styled.View`
    background: #ffa3be;
    border-radius: 25px;
    justify-content: center;
    align-items: center;
    height: 90%;
    width: 55px;
`;

const TagText = styled(Text)`
    color: #febfd3;
`;

const TagList = styled.View`
    flex-direction: row;
    flex-wrap: wrap;
`;

const Community = styled.View`
    margin-right: 20px;
`;

const PriceContainer = styled.View`
    flex-direction: row;
`;

const Header = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

const Middle = styled.View`
    margin-top: 20px;
`;

export interface DetailScreenProps {
    loadContent: () => string;
    content: string;
    navigation: any;
    route: any;
}

export const PoiScreen = ({ navigation, route }: DetailScreenProps) => {
    const navigateToSuccess = () => navigation.navigate('poi-success');
    const [counter, setCounter] = useState(0);

    const point = route.params;
    return (
        <Container>
            <View>
                <Wallpaper source={mockCover} />
                <Close onPress={() => navigation.goBack()}>
                    <Icon style={StyledIcon} icon="close" />
                </Close>
                <ActionContainer>
                    <ActionButton
                        onPress={() => {
                            navigateToSuccess();
                            setCounter((count) => count + 1);
                        }}
                    >
                        <Text>J'y suis</Text>
                        <ActionButtonPlus>
                            <Text>+ {counter}</Text>
                        </ActionButtonPlus>
                    </ActionButton>
                </ActionContainer>
            </View>
            <Middle>
                <Header>
                    <View>
                        <Text preset="header">{point.name}</Text>
                        <Text preset="default">{point.category}</Text>
                    </View>
                    <Community>
                        <Text preset="fieldLabel">28 j'aime</Text>
                        <Text preset="fieldLabel">67 visites</Text>
                    </Community>
                </Header>
                <PriceContainer>
                    <Text preset="fieldLabel" style={{ color: '#137E73' }}>
                        Ouvert
                    </Text>
                    <Text preset="fieldLabel">{point.priceRange}</Text>
                </PriceContainer>
                <TagList>
                    {point.poiType.map((el: string) => (
                        <Tag>
                            <TagText>{el}</TagText>
                        </Tag>
                    ))}
                </TagList>
                <Text preset="default">{point.description}</Text>
            </Middle>
            <Footer>
                {/* Address */}
                <Contact>
                    <IconLink icon="pin" />
                    <Text preset="default">{point.address.value}</Text>
                </Contact>
                {/* Web */}
                <Contact>
                    <IconLink icon="website" />
                    <Text preset="default">{point.website}</Text>
                </Contact>
                {/* Phone */}
                <Contact>
                    <IconLink icon="phone" />
                    <Text preset="default">{point.phone}</Text>
                </Contact>
            </Footer>
        </Container>
    );
};
