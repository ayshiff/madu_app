import {
    RegisterActions,
    RegisterTypes,
    ICompanyDomainResponse
} from '../actions/register.actions';

export const defaultState: IRegisterState = {
    email: '',
    password: '',
    name: '',
    lastname: '',
    workplace: '',
    workDivision: '',
    image: ''
};

export type IRegisterState = {
    email: string;
    password: string;
    name: string;
    lastname: string;
    workplace: string;
    workDivision: string;
    image: string;
    isRegistered?: boolean;
    company?: ICompanyDomainResponse;
};

export const registerReducer = (
    registerState: IRegisterState = defaultState,
    action: RegisterActions
): IRegisterState => {
    switch (action.type) {
        case RegisterTypes.SetUserData:
            return {
                ...registerState,
                ...action.data
            };
        case RegisterTypes.RegisterSuccess:
            return {
                ...registerState,
                isRegistered: true
            };
        case RegisterTypes.FetchCompanySuccess:
            return {
                ...registerState,
                company: action.response
            };
        default:
            return registerState;
    }
};
