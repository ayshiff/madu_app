import * as React from 'react';
import { View, ViewStyle, TextStyle, Text } from 'react-native';
import { connect } from 'react-redux';
import { useState } from 'react';

export interface ChallengePictureStepScreenProps {
    navigation: any;
}

const ChallengePictureStep = (props: ChallengePictureStepScreenProps) => {
    const { navigation } = props;

    return (
        <View>
            <Text>GG</Text>
        </View>
    );
};

const mapStateToProps = () => ({});

const mapDispatchToProps = () => ({});

export const ChallengePictureStepScreen = connect(
    mapStateToProps,
    mapDispatchToProps
)(ChallengePictureStep);
