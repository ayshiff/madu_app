import {
    ProfileActions,
    ProfileTypes,
    IProfile
} from '../actions/profile.actions';

export const defaultState: IProfileState = null;

export type IProfileState = IProfile | null;

export const profileReducer = (
    profileState: IProfileState = defaultState,
    action: ProfileActions
): IProfileState => {
    switch (action.type) {
        case ProfileTypes.ProfileSuccess:
        case ProfileTypes.EditProfileSuccess:
        case ProfileTypes.AddPictureSuccess:
            return action.payload;
        default:
            return profileState;
    }
};
