import React, { useState } from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    StyleSheet,
    ImageSourcePropType
} from 'react-native';

type dropdown = {
    image?: ImageSourcePropType;
    title: string;
    component: JSX.Element;
};

export const DropdownMenu = ({ image, title, component }: dropdown) => {
    const [isOpen, setIsOpen] = useState(false);

    const contextualDropDownStyles = styles(isOpen);

    const openOrClosePanel = () => {
        if (isOpen) {
            closePanel();
        } else {
            openPanel();
        }
    };

    const openPanel = () => {
        setIsOpen(true);
    };

    const closePanel = () => {
        setIsOpen(false);
    };

    return (
        <View style={{ marginTop: 18 }}>
            <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity
                    activeOpacity={1}
                    onPress={openOrClosePanel}
                    style={{ flex: 1 }}
                >
                    <View style={contextualDropDownStyles.selectableDropdown}>
                        <View
                            style={{
                                flexDirection: 'row',
                                alignItems: 'center'
                            }}
                        >
                            {image && <Image source={image} />}
                            <View>
                                <Text style={contextualDropDownStyles.title}>
                                    {title}
                                </Text>
                            </View>
                        </View>
                        <Image
                            source={require('madu/assets/dropdown_arrow.png')}
                            style={{
                                width: 6,
                                height: 4,
                                marginLeft: 8,
                                tintColor: '#000'
                            }}
                        />
                    </View>
                </TouchableOpacity>
            </View>
            {isOpen && component}
        </View>
    );
};

const styles = (isOpen: boolean) =>
    StyleSheet.create({
        selectableDropdown: StyleSheet.flatten([
            {
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingHorizontal: 14,
                paddingVertical: 14,
                backgroundColor: '#fff'
            },
            isOpen
                ? {
                      borderTopLeftRadius: 8,
                      borderTopRightRadius: 8,
                      borderBottomWidth: 1,
                      borderBottomColor: '#9F9F9F'
                  }
                : {
                      borderRadius: 8
                  }
        ]),

        title: {
            fontSize: 16
        }
    });
