/* eslint-disable react/prop-types */
import * as React from 'react';
import { View, ViewStyle, TouchableOpacity } from 'react-native';

import { spacing } from 'madu/theme';
import { Text } from 'madu/components/atoms/text/text';
import { Icon } from 'madu/components/atoms/icon/icon';

import { HeaderProps } from './header.props';

// static styles
const ROOT: ViewStyle = {
    flexDirection: 'row',
    paddingHorizontal: spacing[4],
    alignItems: 'center',
    paddingTop: spacing[5],
    paddingBottom: spacing[5],
    justifyContent: 'flex-start',
    margin: 10
};
const LEFT: ViewStyle = { width: 32 };
const RIGHT: ViewStyle = { width: 32 };

/**
 * Header that appears on many screens. Will hold navigation buttons and screen title.
 */
export const Header: React.FunctionComponent<HeaderProps> = (props) => {
    const {
        onLeftPress,
        onRightPress,
        rightIcon,
        leftIcon,
        headerText,
        style
    } = props;
    const header = headerText || '';

    return (
        <View style={{ marginBottom: 40 }}>
            <View style={{ ...ROOT, ...style }}>
                {leftIcon ? (
                    <TouchableOpacity onPress={onLeftPress}>
                        <Icon icon={leftIcon} />
                    </TouchableOpacity>
                ) : (
                    <View style={LEFT} />
                )}
                {rightIcon ? (
                    <TouchableOpacity onPress={onRightPress}>
                        <Icon icon={rightIcon} />
                    </TouchableOpacity>
                ) : (
                    <View style={RIGHT} />
                )}
            </View>
            <View>
                <Text textAlign="left" textSize={30}>
                    {header}
                </Text>
            </View>
        </View>
    );
};
