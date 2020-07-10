import * as React from 'react';
import styled from 'styled-components/native';
import { loginActions } from 'madu/actions/login.actions';
import { connect } from 'react-redux';
import { useState } from 'react';
import {
    EditProfilePayload,
    IProfile,
    profileActions
} from 'madu/actions/profile.actions';
import { Screen } from '../..';

const Full = styled.View`
    flex: 1;
    background-color: #fff5eb;
`;

const Header = styled.View`
    flex-direction: row;
    justify-content: space-between;
    margin-left: 21px;
    margin-right: 21px;
    margin-top: 15px;
    margin-bottom: 24px;
`;

const ProfilContainer = styled.View`
    margin-left: 22px;
`;

const ProfilPic = styled.Image`
    align-self: center;
    margin-top: 20px;
    margin-bottom: 28px;
`;

const ProfilTitle = styled.Text`
    font-weight: bold;
    font-size: 24px;
    line-height: 23px;
    color: #153733;
`;

const Save = styled.TouchableOpacity``;

const SaveText = styled.Text`
    font-weight: bold;
    font-size: 16px;
    line-height: 22px;
    color: #f39272;
`;

const InputContainer = styled.View``;

const InputName = styled.Text`
    font-weight: bold;
    font-size: 15px;
    line-height: 20px;
    color: #162d4b;
    margin-left: 22px;
    margin-bottom: 5px;
`;
const ProfilInput = styled.TextInput`
    border-radius: 6px;
    border: 1px solid #fae3c8;
    background: #ffffff;
    width: 330px;
    height: 40px;
    align-self: center;
    margin-bottom: 8px;
`;

const ChallengeButton = styled.TouchableOpacity`
    width: 329px;
    height: 48px;
    border-radius: 40px;
    background: #ee6538;
    justify-content: center;
    align-items: center;
    align-self: center;
    margin-top: 10px;
    margin-bottom: 40px;
`;

const ChallengeButtonText = styled.Text`
    color: #ffffff;
    font-weight: bold;
    font-size: 16px;
`;

export interface ProfileSettingsScreenProps {
    logout: () => string;
    content: string;
    navigation: any;
    update: (payload: EditProfilePayload) => string;
    userData: IProfile;
}

export const ProfileSettings = ({
    navigation,
    logout,
    userData,
    update
}: ProfileSettingsScreenProps) => {
    const [firstname, setFirstname] = useState<string>(userData.firstname);
    const [lastname, setLastname] = useState<string>(userData.lastname);
    const [companyPosition, setCompanyPosition] = useState<string>(
        userData.companyPosition
    );
    const [department, setDepartment] = useState<string>(userData.department);
    const [email, setEmail] = useState<string>(userData.email);
    const [workplace, setWorkplace] = useState<string>(userData.workplace);

    return (
        <Full>
            <Screen preset="scroll" style={{ backgroundColor: '#FFF5EB' }}>
                <Header>
                    <Image source={require('../../../assets/arrow-left.png')} />
                    <Save
                        onPress={() =>
                            update({
                                firstname,
                                lastname,
                                companyPosition,
                                department,
                                email,
                                workplace
                            })
                        }
                    >
                        <SaveText>Enregistrer</SaveText>
                    </Save>
                </Header>
                <ProfilContainer>
                    <ProfilTitle>Profil</ProfilTitle>
                    <ProfilPic source={require('../../../assets/filled.png')} />
                </ProfilContainer>
                <InputContainer>
                    <InputName>Prénom Nom</InputName>
                    <ProfilInput
                        value={`${firstname} ${lastname}`}
                        onChangeText={(el: string) => {
                            const data = el.split(' ');
                            setFirstname(data[0]);
                            setLastname(data[0]);
                        }}
                    />
                    <InputName>Poste</InputName>
                    <ProfilInput
                        value={companyPosition}
                        onChangeText={(el: string) => setCompanyPosition(el)}
                    />
                    <InputName>Département</InputName>
                    <ProfilInput
                        value={department}
                        onChangeText={(el: string) => setDepartment(el)}
                    />
                    <InputName>Adresse mail professionnelle</InputName>
                    <ProfilInput
                        value={email}
                        onChangeText={(el: string) => setEmail(el)}
                    />
                    <InputName>Lieu de travail</InputName>
                    <ProfilInput
                        value={workplace}
                        onChangeText={(el: string) => setWorkplace(el)}
                    />
                </InputContainer>
                <ChallengeButton
                    onPress={() => {
                        logout();
                        navigation.navigate('welcome');
                    }}
                >
                    <ChallengeButtonText>Deconnexion</ChallengeButtonText>
                </ChallengeButton>
            </Screen>
        </Full>
    );
};

const mapStateToProps = (state: any) => ({
    logout: state.poi.list,
    userData: state.profile
});

const mapDispatchToProps = (dispatch: any) => ({
    logout: () => dispatch(loginActions.logout()),
    update: (payload: EditProfilePayload) =>
        dispatch(profileActions.editProfile(payload))
});

export const ProfileSettingsScreen = connect(
    mapStateToProps,
    mapDispatchToProps
)(ProfileSettings);
