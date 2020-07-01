import * as React from 'react';
import { View, ViewStyle, TextStyle, Text } from 'react-native';
import { connect } from 'react-redux';
import { useState } from 'react';

export interface ChallengeSuccessStepScreenProps {
    navigation: any;
}

const CHALLENGE_SUCCESS_CONTAINER: ViewStyle = {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
}

const POINTS_TAG: ViewStyle = {
    borderRadius: 28,
    height: 25,
    width: 80,
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 14,
    paddingRight: 14,
    backgroundColor: '#E3FFE8'
};

const POINTS_TEXT: TextStyle = {
    color: '#70B32D'
};

const POINT_CONTAINER: ViewStyle = {
    flex: 1,
    flexDirection: "row-reverse",
    marginTop: 35,
    marginRight: 25
}

const ChallengeSuccessStep = (props: ChallengeSuccessStepScreenProps) => {
    const { navigation } = props;

    return (
        <View>
            <View style={POINT_CONTAINER}>
                <View style={POINTS_TAG}>
                    <Text style={POINTS_TEXT}>2567🌱</Text>
                </View>
            </View>
                <View style={CHALLENGE_SUCCESS_CONTAINER}>
                    <Text>GG</Text>
                </View>
        </View>
    );
};

const mapStateToProps = () => ({});

const mapDispatchToProps = () => ({});

export const ChallengeSuccessStepScreen = connect(
    mapStateToProps,
    mapDispatchToProps
)(ChallengeSuccessStep);
