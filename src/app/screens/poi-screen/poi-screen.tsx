import * as React from 'react';
import { TouchableOpacity, Dimensions, View } from 'react-native';
import styled from 'styled-components/native';
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
    text-align: right;
`;

const ActionContainer = styled.View`
    flex: 1;
    flex-direction: row;
    align-items: flex-end;
    justify-content: flex-end;
`;

const Middle = styled.View``;

export interface DetailScreenProps {
    loadContent: () => string;
    content: string;
    navigation: any;
}

export const PoiScreen = ({ navigation }: DetailScreenProps) => {
    const navigateToSuccess = () => navigation.navigate('poi-success');
    return (
        <Container>
            <View>
                <Wallpaper source={mockCover} />
                <Close onPress={() => navigation.goBack()}>
                    <Icon style={StyledIcon} icon="close" />
                </Close>
                <ActionContainer>
                    <ActionButton
                        text="J'y suis"
                        onPress={() => navigateToSuccess()}
                    />
                </ActionContainer>
            </View>
            <Middle>
                <Text preset="header">Kapunka</Text>
                <Text preset="secondary">Restaurant Thai</Text>
                <Text preset="default">
                    Lorem ipsum amet, consectetur adipiscing elit. Pretium
                    lacus, risus facilisi mauris sed egestas elit, nunc amet.
                    Maleda met cursus tortor senectus aliquam, eu.
                </Text>
            </Middle>
            <Footer>
                {/* Address */}
                <Contact>
                    <IconLink icon="pin" />
                    <Text preset="default">
                        51 Rue Saint-Sauveur, 75002 Paris France
                    </Text>
                </Contact>
                {/* Web */}
                <Contact>
                    <IconLink icon="website" />
                    <Text preset="default">https://kapunka.com</Text>
                </Contact>
                {/* Phone */}
                <Contact>
                    <IconLink icon="phone" />
                    <Text preset="default">04 50 53 54 28</Text>
                </Contact>
            </Footer>
        </Container>
    );
};
