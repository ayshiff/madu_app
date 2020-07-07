import * as React from 'react';
import {
    KeyboardAvoidingView,
    ScrollView,
    StatusBar,
    View
} from 'react-native';
import { useSafeArea } from 'react-native-safe-area-context';
import SafeAreaView from 'react-native-safe-area-view';
import { ScreenProps } from './screen.props';
import { isNonScrolling, offsets, presets } from './screen.presets';

const ScreenWithoutScrolling = (props: ScreenProps) => {
    const insets = useSafeArea();
    const preset = presets.fixed;
    const style = props.style || {};
    const backgroundStyle = props.backgroundColor
        ? { backgroundColor: props.backgroundColor }
        : {};
    const insetStyle = { paddingTop: props.unsafe ? 0 : insets.top };

    return (
        <KeyboardAvoidingView
            style={[preset.outer, backgroundStyle]}
            keyboardVerticalOffset={offsets[props.keyboardOffset || 'none']}
        >
            <StatusBar barStyle={'dark-content'} />
            <View style={[preset.inner, style, insetStyle]}>
                {props.children}
            </View>
        </KeyboardAvoidingView>
    );
};

const ScreenWithScrolling = (props: ScreenProps) => {
    const insets = useSafeArea();
    const preset = presets.scroll;
    const style = props.style || {};
    const backgroundStyle = props.backgroundColor
        ? { backgroundColor: props.backgroundColor }
        : {};
    const insetStyle = { paddingTop: props.unsafe ? 0 : insets.top };

    return (
        <KeyboardAvoidingView
            style={[preset.outer, backgroundStyle]}
            keyboardVerticalOffset={offsets[props.keyboardOffset || 'none']}
        >
            <StatusBar barStyle={props.statusBar || 'light-content'} />
            <SafeAreaView style={[preset.outer, backgroundStyle, insetStyle]}>
                <ScrollView
                    style={[preset.outer, backgroundStyle]}
                    contentContainerStyle={[preset.inner, style]}
                >
                    {props.children}
                </ScrollView>
            </SafeAreaView>
        </KeyboardAvoidingView>
    );
};

/**
 * The starting component on every screen in the app.
 *
 * @param props The screen props
 */
export const Screen = (props: ScreenProps) => {
    if (isNonScrolling(props.preset as any)) {
        return <ScreenWithoutScrolling {...props} />;
    }
    return <ScreenWithScrolling {...props} />;
};
