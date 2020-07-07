import * as React from 'react';
import { View, ViewStyle } from 'react-native';
import { connect } from 'react-redux';
import { poiActions, IPointOfInterest } from 'madu/actions/poi.actions';
import { Map } from 'madu/components/organisms/map/map';
import { color } from 'madu/theme/color';

const FULL: ViewStyle = { flex: 1, backgroundColor: 'white' };

export interface MapScreenProps {
    loadContent: () => string;
    content: string;
    navigation: any;
    points: IPointOfInterest[];
    loadPoi: () => void;
}

export const MapComponent: React.FunctionComponent<MapScreenProps> = ({
    navigation,
    points,
    loadPoi
}: MapScreenProps) => {
    React.useEffect(() => {
        loadPoi();
    }, [loadPoi]);
    return (
        <View style={FULL}>
            <Map points={points} navigation={navigation} />
        </View>
    );
};

const mapStateToProps = (state: any) => ({
    points: state.poi.list
});

const mapDispatchToProps = (dispatch: any) => ({
    loadPoi: () => dispatch(poiActions.loadPoi())
});

export const MapScreen = connect(
    mapStateToProps,
    mapDispatchToProps
)(MapComponent);
