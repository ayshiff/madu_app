import { AjaxError } from 'rxjs/ajax';
import { ActionTypes } from '../core/actions.type';

export enum ProfileTypes {
    Profile = '[PROFILE] PROFILE',
    ProfileSuccess = '[PROFILE] PROFILE_SUCCESS',
    ProfileFail = '[PROFILE] PROFILE_FAIL',
    EditProfile = '[PROFILE] EDIT_PROFILE',
    EditProfileSuccess = '[PROFILE] EDIT_PROFILE_SUCCESS',
    EditProfileFail = '[PROFILE] EDIT_PROFILE_FAIL',
    AddPicture = '[PROFILE] ADD_PICTURE',
    AddPictureSuccess = '[PROFILE] ADD_PICTURE_SUCCESS',
    AddPictureFail = '[PROFILE] ADD_PICTURE_FAIL'
}

type Visit = {
    id: string;
    name: string;
    category: string;
    description: string;
    number: number;
};

type Challenge = {
    id: string;
    title: string;
    category: string;
    date: string;
    photo: string;
    points: number;
};

type Department = {
    name: string;
    points: number;
};

type Address = {
    value: string;
    lat: number;
    lng: number;
};

type Company = {
    address: Address;
    workplaces: string[];
    name: string;
    domainName: string;
    employees: string;
    departments: Department[];
    id: string;
    status: string;
};

export type EditProfilePayload = {
    email: string;
    firstname: string;
    lastname: string;
    companyPosition: string;
    workplace: string;
    department: string;
};

export type IProfile = {
    roles: string[];
    challenges: Challenge[];
    visits: Visit[];
    creationDate: '2020-07-06T00:00:00.000';
    email: 'webp2020@hetic.net';
    firstname: 'Eric';
    lastname: 'Priou';
    workplace: 'Montreuil';
    department: 'Web';
    companyPosition: 'Intervenant';
    id: '6ef3f8d4-24ce-40b3-aed6-006c742515bd';
    points: 0;
    photo: '6693a60d-3e17-487a-b24e-86eff10b5c99';
    company: Company;
};

export const profileActions = {
    profile: () => ({ type: ProfileTypes.Profile } as const),
    profileSuccess: (payload: IProfile) =>
        ({ type: ProfileTypes.ProfileSuccess, payload } as const),
    profileFail: (error: AjaxError) =>
        ({ type: ProfileTypes.ProfileFail, error } as const),
    editProfile: (payload: EditProfilePayload) =>
        ({ type: ProfileTypes.EditProfile, payload } as const),
    editProfileSuccess: (payload: IProfile) =>
        ({ type: ProfileTypes.EditProfileSuccess, payload } as const),
    editProfileFail: (error: AjaxError) =>
        ({ type: ProfileTypes.EditProfileFail, error } as const),
    addPicture: (payload: any) =>
        ({ type: ProfileTypes.AddPicture, payload } as const),
    addPictureSuccess: (payload: IProfile) =>
        ({ type: ProfileTypes.AddPictureSuccess, payload } as const),
    addPictureFail: (error: AjaxError) =>
        ({ type: ProfileTypes.AddPictureFail, error } as const)
};

export type ProfileActions = ActionTypes<typeof profileActions>;
