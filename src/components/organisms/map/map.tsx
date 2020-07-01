import React from 'react';
import MapView from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    mapStyle: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height
    }
});
// eslint-disable-next-line react/prefer-stateless-function
export class Map extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <MapView style={styles.mapStyle} />
            </View>
        );
    }
}
