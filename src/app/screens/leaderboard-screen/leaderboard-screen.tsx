import * as React from 'react';
import { View, ViewStyle, Text, TextStyle, Image, ImageStyle } from 'react-native';
import { color } from '../../theme/color';

const FULL: ViewStyle = { flex: 1, backgroundColor: color.white };

const HEADER_CONTAINER: ViewStyle = {
    height: 225,
    backgroundColor: 'rgba(138, 180, 255, 0.6)',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30
};

const HEADER_TEXT_CONTAINER: ViewStyle = {
    marginTop: 66,
    marginLeft: 21
}

const HEADER_TITLE: TextStyle = {
    fontSize: 24,
    fontWeight: "bold",
    color: '#153733'
}

const HEADER_SUBTITLE: TextStyle = {
    fontSize: 14,
    color: 'rgba(21, 55, 51, 0.6)'
}

const HEADER_TIMER: TextStyle = {
    fontSize: 36,
    color: '#FFFFFF'
}

const LEADERBOARD_CONTAINER: ViewStyle = {
    marginTop: 32,
    width: '100%',
    flexDirection: "row",
    justifyContent: "space-around"
}

const LEADERBOARD_PROFILE: ViewStyle = {
    flexDirection: "row"
}

const LEADERBOARD_RANK_CONTAINER: ViewStyle = {
    marginTop: 7,
    marginRight: 11
}

const LEADERBOARD_RANK: TextStyle = {

}

const LEADERBOARD_POINTS_CONTAINER: ViewStyle = {
    flexDirection: "row",
    marginTop: 10
}

const LEADERBOARD_INFORMATION: ViewStyle = {
    flexDirection: "row"
}

const LEADERBOARD_UP: ImageStyle = {  
    width: 11,
    height: 11
}

const LEADERBOARD_PROFILE_NAME: TextStyle = {
    marginTop: 4,
    fontSize: 14,
    fontWeight: "bold"
}

const LEADERBOARD_PROFILE_DEPARTMENT: TextStyle = {
    fontSize: 12
}

const LEADERBOARD_PROFILE_PIC: ImageStyle = {
    width: 48,
    height: 48,
    marginRight: 11
}

const LEADERBOARD_CROWN: ImageStyle = {
    width: 14,
    height: 10,
    marginTop: 4,
    marginRight: 5
}

export interface LeaderboardScreenProps {
    loadContent: () => string;
    content: string;
    navigation: any;
}

export const LeaderboardScreen = ({ navigation }: LeaderboardScreenProps) => {
    return (
        <View style={FULL}>
                <View style={HEADER_CONTAINER}>
                    <View style={HEADER_TEXT_CONTAINER}>
                        <Text style={HEADER_TITLE}>Classement Entreprise</Text>
                        <Text style={HEADER_SUBTITLE}>Renouvelé chaque semaine</Text>
                        <Text style={HEADER_TIMER}>5j 20h 49mn</Text>
                    </View>
                </View>
                <View style={LEADERBOARD_CONTAINER}>    
                        <View style={LEADERBOARD_INFORMATION}>              
                            <View style={LEADERBOARD_RANK_CONTAINER}>
                                <Text style={LEADERBOARD_RANK}>1</Text>
                                <Image
                                    style={LEADERBOARD_UP}
                                    source={require('../../../../assets/up.png')}
                                />
                            </View>                
                        <View style={LEADERBOARD_PROFILE}>
                            <Image
                                    style={LEADERBOARD_PROFILE_PIC}
                                    source={require('../../../../assets/profile-pic.png')}
                                />
                                <View>
                                    <Text style={LEADERBOARD_PROFILE_NAME}>Elodie Five</Text>
                                    <Text style={LEADERBOARD_PROFILE_DEPARTMENT}>Communication</Text>
                                </View>
                        </View>
                        </View>
                        <View style={LEADERBOARD_POINTS_CONTAINER}>
                            <Image
                            style={LEADERBOARD_CROWN}
                            source={require('../../../../assets/crown.png')}
                            />
                            <Text>320</Text>
                        </View>
                </View>             
        </View>
    );
};
