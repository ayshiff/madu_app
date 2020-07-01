/* eslint-disable react/prop-types */
import * as React from 'react';
import { View, ViewStyle, TextStyle, TouchableOpacity } from 'react-native';
import { HeaderProps } from './header.props';
import { Text } from '../../atoms/text/text';
import { Icon } from '../../atoms/icon/icon';
import { spacing } from '../../../theme';

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
const TITLE: TextStyle = { textAlign: 'left', fontSize: 30 };
const TITLE_MIDDLE: ViewStyle = { flex: 1, justifyContent: 'center' };
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
        style,
        titleStyle
    } = props;
    const header = headerText || '';

    return (
        <View>
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
            <View style={TITLE_MIDDLE}>
                <Text style={{ ...TITLE, ...titleStyle }} text={header} />
            </View>
        </View>
    );
};
