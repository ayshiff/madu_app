import * as React from 'react';
import { Picker, PickerProps } from 'react-native';
import { Text } from '../text/text';

interface ItemsProps {
    label: string;
    value: string;
}

interface PickerPropsExtended extends PickerProps {
    items: ItemsProps[];
    placeholder?: string;
    labelTx?: string;
    label?: string;
}

/**
 * For your text displaying needs.
 *
 * This component is a HOC over the built-in React Native one.
 */
const StyledPicker = (props: PickerPropsExtended) => {
    const {
        items,
        selectedValue,
        placeholder,
        labelTx,
        label,
        ...rest
    } = props;

    return (
        <>
            {label && <Text preset="fieldLabel" tx={labelTx} text={label} />}
            <Picker
                selectedValue={selectedValue}
                style={{ height: 50, alignSelf: 'stretch' }}
                {...rest}
            >
                {placeholder && <Picker.Item label={placeholder} value="0" />}
                {items.map((el) => (
                    <Picker.Item
                        key={`${el.label}-${el.value}`}
                        label={el.label}
                        value={el.value}
                    />
                ))}
            </Picker>
        </>
    );
};

export default StyledPicker;
