import { AjaxError } from 'rxjs/ajax';
import { ActionTypes } from '../core/actions.type';

export enum RegisterTypes {
    SetUserData = '[REGISTER] SET_USER_DATA',
    Register = '[REGISTER] REGISTER',
    RegisterSuccess = '[REGISTER] REGISTER_SUCCESS',
    RegisterFail = '[REGISTER] REGISTER_FAIL',
    FetchCompany = '[REGISTER] FETCH_COMPANY',
    FetchCompanySuccess = '[REGISTER] FETCH_COMPANY_SUCCESS',
    FetchCompanyFail = '[REGISTER] FETCH_COMPANY_FAIL'
}

export interface IUserData {
    email?: string;
    password?: string;
    name?: string;
    lastname?: string;
    workplace?: string;
    workDivision?: string;
    image?: string;
}

export type ICompanyDomainResponse = {
    address: {
        value: string;
        lat: number;
        lng: number;
    };
    companyName: string;
    domainName: string;
    workplace: string[];
    department: string[];
    employees: string;
    name: string;
    lastName: string;
    email: string;
    id: string;
    status: string;
};

export type IregisterContentResponse = {
    roles: string[];
    email: string;
    firstname: string;
    lastname: string;
    workplace: string;
    department: string;
    id: string;
    company_id: string;
};

// Our object that produce our action creators
export const registerActions = {
    setUserData: (data: IUserData) =>
        ({ type: RegisterTypes.SetUserData, data } as const),
    register: (data: IUserData) =>
        ({ type: RegisterTypes.Register, data } as const),
    registerSuccess: (response: IregisterContentResponse) =>
        ({ type: RegisterTypes.RegisterSuccess, response } as const),
    registerFail: (error: AjaxError) =>
        ({ type: RegisterTypes.RegisterFail, error } as const),
    fetchCompany: ({ company }: { company: string }) =>
        ({ type: RegisterTypes.FetchCompany, payload: { company } } as const),
    fetchCompanySuccess: (response: ICompanyDomainResponse) =>
        ({ type: RegisterTypes.FetchCompanySuccess, response } as const),
    fetchCompanyFail: (error: AjaxError) =>
        ({ type: RegisterTypes.FetchCompanyFail, error } as const)
};

// We can then type all of our actions with a single line
export type RegisterActions = ActionTypes<typeof registerActions>;
