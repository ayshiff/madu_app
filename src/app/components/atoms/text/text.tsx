import * as React from 'react';
import { Text as ReactNativeText } from 'react-native';
import { mergeAll, flatten } from 'ramda';
import { presets } from './text.presets';
import { TextProps } from './text.props';

/**
 * For your text displaying needs.
 *
 * This component is a HOC over the built-in React Native one.
 */
export function Text(props: TextProps) {
    // grab the props
    const {
        preset = 'default',
        tx,
        txOptions,
        text,
        children,
        style: styleOverride,
        ...rest
    } = props;

    // figure out which content to use
    const i18nText = tx;
    const content = i18nText || text || children;

    const style = mergeAll(
        flatten([(presets[preset] as any) || presets.default, styleOverride])
    );

    return (
        <ReactNativeText {...rest} style={style}>
            {content}
        </ReactNativeText>
    );
}
