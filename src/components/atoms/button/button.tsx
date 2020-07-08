import React, { ReactNode } from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';

export type ButtonProps = {
    onPress: () => void;
    children?: any;
    title?: string;
    iconName?: string;
    iconColor?: string;
    borderColor?: string;
    textColor?: string;
    type?: 'SECONDARY';
    bottom?: number;
    paddingHorizontal?: number;
    paddingVertical?: number;
    disabled?: boolean;
    backgroundColor?: string;
    width?: number;
};

type ButtonWrapperProps = {
    children: ReactNode;
};

const ButtonContainer = ({ children }: any) => (
    <View
        style={{
            paddingHorizontal: 8,
            flex: 1
        }}
    >
        {children}
    </View>
);

export const ButtonWrapper = React.memo((props: ButtonWrapperProps) => {
    return (
        <View
            style={{
                flex: 1,
                justifyContent: 'space-between',
                flexDirection: 'row',
                marginHorizontal: -8
            }}
        >
            {React.Children.map(props.children, (child) => {
                return child && <ButtonContainer>{child}</ButtonContainer>;
            })}
        </View>
    );
});

const buttonStyles = (props: ButtonProps) =>
    StyleSheet.create({
        button: StyleSheet.flatten([
            {
                justifyContent: 'center',
                alignItems: 'flex-end',
                borderRadius: 40,
                borderWidth: 1,
                alignSelf: 'stretch',
                borderColor: props.borderColor || '#EE6538',
                marginBottom: props.bottom || 0,
                paddingHorizontal: props.paddingHorizontal || 15,
                paddingVertical: props.paddingVertical || 15,
                backgroundColor: props.backgroundColor
                    ? props.backgroundColor
                    : '#EE6538',
                flexDirection: 'row'
            },
            props.type === 'SECONDARY'
                ? {
                      backgroundColor: '#C4C4C4',
                      borderColor: 'transparent',
                      borderWidth: 1
                  }
                : null,
            props.disabled
                ? {
                      opacity: 0.5
                  }
                : null
        ]),
        buttonText: StyleSheet.flatten([
            {
                fontSize: 14,
                color: props.textColor || 'white',
                marginLeft: props.iconName ? 10 : 0
            },
            props.type === 'SECONDARY'
                ? {
                      color: 'white'
                  }
                : null
        ]),
        icon: StyleSheet.flatten([
            {
                fontSize: 16,
                marginBottom: -2,
                color: props.iconColor || 'white'
            },
            props.type === 'SECONDARY'
                ? {
                      color: 'white'
                  }
                : null
        ])
    });

export const Button = React.memo((props: ButtonProps) => {
    const contextualButtonStyles = buttonStyles(props);
    return (
        <TouchableOpacity onPress={props.onPress} disabled={props.disabled}>
            <View style={contextualButtonStyles.button}>
                {props.title ? (
                    <Text style={contextualButtonStyles.buttonText}>
                        {props.title}
                    </Text>
                ) : (
                    props.children
                )}
            </View>
        </TouchableOpacity>
    );
});
