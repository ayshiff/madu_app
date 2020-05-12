import * as React from 'react';
import { View, ViewStyle, TextStyle, Text } from 'react-native';
import { connect } from 'react-redux';
import { Button, Screen, Header } from '../../components';
import { color, spacing } from '../../theme';
import { exampleActions } from '../../actions/example.actions';

const FULL: ViewStyle = { flex: 1 };
const TEXT: TextStyle = {
    color: color.palette.black,
    fontFamily: 'Montserrat'
};

const BOLD: TextStyle = { fontWeight: 'bold' };

const CONTAINER: ViewStyle = {
    backgroundColor: color.transparent,
    paddingHorizontal: spacing[4]
};

const HEADER: TextStyle = {
    paddingTop: spacing[3],
    paddingBottom: spacing[4] + spacing[1],
    paddingHorizontal: 0
};
const HEADER_TITLE: TextStyle = {
    ...TEXT,
    ...BOLD,
    fontSize: 12,
    lineHeight: 15,
    textAlign: 'center',
    letterSpacing: 1.5
};
const OTHER: ViewStyle = {
    paddingVertical: spacing[4],
    paddingHorizontal: spacing[4],
    backgroundColor: '#5D2555'
};

const OTHER_TEXT: TextStyle = {
    ...BOLD,
    fontSize: 13,
    letterSpacing: 2
};

export interface OtherScreenProps {
    loadContent: () => string;
    content: string;
    navigation: any;
}

export const Other: React.FunctionComponent<OtherScreenProps> = (props) => {
    const goBack = React.useMemo(() => () => props.navigation.goBack(), [
        props.navigation
    ]);
    return (
        <View style={FULL}>
            <Screen
                style={CONTAINER}
                preset="scroll"
                backgroundColor={color.transparent}
            >
                <Header
                    headerText="Other Screen"
                    style={HEADER}
                    titleStyle={HEADER_TITLE}
                />
                <View>
                    <Button
                        style={OTHER}
                        textStyle={OTHER_TEXT}
                        text="Go Back"
                        onPress={goBack}
                    />
                </View>
            </Screen>
        </View>
    );
};

const mapStateToProps = (state: any) => ({
    content: state.root.content
});

const mapDispatchToProps = (dispatch: any) => ({
    loadContent: () => dispatch(exampleActions.setContent())
});

export const OtherScreen = connect(mapStateToProps, mapDispatchToProps)(Other);
