import * as React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { Icon } from '../icon/icon';
import { IconTypes } from '../icon/icons';

interface IconButtonProps {
    text: string;
    icon: IconTypes;
}

const IconButton = (props: IconButtonProps) => {
    const { text, icon } = props;

    return (
        <TouchableOpacity>
            <Text>{text}</Text>
            <Icon icon={icon} />
        </TouchableOpacity>
    );
};

export default IconButton;
