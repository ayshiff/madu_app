import * as React from 'react';
import { View, ViewStyle, ImageStyle, TouchableOpacity } from 'react-native';
import { color } from '../../theme/color';
import { Text } from '../../components/atoms/text/text';
import { Icon } from '../../components/atoms/icon/icon';
// import mockCover from '../../../../assets/mock_cover.png;

const FULL: ViewStyle = { flex: 1, backgroundColor: color.background };

const ICON: ImageStyle = {
    width: 50,
    height: 50
};

export interface DetailScreenProps {
    loadContent: () => string;
    content: string;
    navigation: any;
}

export const DetailScreen = ({ navigation }: DetailScreenProps) => {
    return (
        <View style={FULL}>
            {/* <Image style={style} source={mockCover} /> */}
            {/* Cover Image */}
            <TouchableOpacity
                style={{
                    width: 50,
                    height: 50
                }}
                onPress={() => navigation.goBack()}
            >
                <Icon icon="close" style={ICON} />
            </TouchableOpacity>
            {/* <Image style={style} source={} /> */}
            <Text preset="header">Title</Text>
            <Text preset="secondary">SubTitle</Text>

            <Text preset="default">Description</Text>
        </View>
    );
};

// {/* Address */}
// <View>
//     <Icon icon={"" as IconTypes} style={ICON} />
//     <Text preset="default">Description</Text>
// </View>

// {/* Web */}
// <View>
//     <Icon icon={"" as IconTypes} style={ICON} />
//     <Text preset="default">Description</Text>
// </View>

// {/* Phone */}
// <View>
//     <Icon icon={"" as IconTypes} style={ICON} />
//     <Text preset="default">Description</Text>
// </View>
