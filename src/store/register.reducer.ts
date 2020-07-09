import { RegisterActions, RegisterTypes } from '../actions/register.actions';

export const defaultState: IRegisterState = {
    email: '',
    password: '',
    firstName: '',
    lastname: '',
    workplace: '',
    companyPosition: '',
    image: '',
    department: '',
    companyId: ''
};

type Department = {
    name: string;
    points: number;
};

export type ICompanyDomainResponse = {
    workplaces: string[];
    name: string;
    domainName: string;
    departments: Department[];
    id: string;
};

export type IRegisterState = {
    email: string;
    password: string;
    companyId: string;
    firstName: string;
    lastname: string;
    workplace: string;
    department: string;
    companyPosition: string;
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
        case RegisterTypes.ResetRegister:
            return defaultState;
        default:
            return registerState;
    }
};
