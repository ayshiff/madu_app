import * as React from 'react';
import { TouchableOpacity } from 'react-native';

interface IconButtonProps {
    text: string;
    icon: string;
}

const IconButton = (props: IconButtonProps) => {
    const { text, icon } = props;

    return (
        <TouchableOpacity>
            <p>{text}</p>
            <p>{icon}</p>
        </TouchableOpacity>
    );
};

export default IconButton;
