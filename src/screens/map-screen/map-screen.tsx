import * as React from 'react';
import { View, ViewStyle } from 'react-native';
import { connect } from 'react-redux';
import { poiActions, IPointOfInterest } from 'madu/actions/poi.actions';
import { Map } from 'madu/components/organisms/map/map';
import { IProfile } from 'madu/actions/profile.actions';

const FULL: ViewStyle = { flex: 1, backgroundColor: 'white' };

export interface MapScreenProps {
    loadContent: () => string;
    content: string;
    navigation: any;
    points: IPointOfInterest[];
    profile: IProfile;
    loadPoi: () => void;
}

export const MapComponent: React.FunctionComponent<MapScreenProps> = ({
    navigation,
    points,
    loadPoi,
    profile
}: MapScreenProps) => {
    React.useEffect(() => {
        loadPoi();
    }, [loadPoi]);
    return (
        <View style={FULL}>
            <Map profile={profile} points={points} navigation={navigation} />
        </View>
    );
};

const mapStateToProps = (state: any) => ({
    points: state.poi.list,
    profile: state.profile
});

const mapDispatchToProps = (dispatch: any) => ({
    loadPoi: () => dispatch(poiActions.loadPoi())
});

export const MapScreen = connect(
    mapStateToProps,
    mapDispatchToProps
)(MapComponent);
