import { AjaxError } from 'rxjs/ajax';
import { ICompanyDomainResponse } from 'madu/store/register.reducer';
import { ActionTypes } from '../core/actions.type';

export enum RegisterTypes {
    SetUserData = '[REGISTER] SET_USER_DATA',
    Register = '[REGISTER] REGISTER',
    RegisterSuccess = '[REGISTER] REGISTER_SUCCESS',
    RegisterFail = '[REGISTER] REGISTER_FAIL',
    ResetRegister = '[REGISTER] RESET',
    FetchCompany = '[REGISTER] FETCH_COMPANY',
    FetchCompanySuccess = '[REGISTER] FETCH_COMPANY_SUCCESS',
    FetchCompanyFail = '[REGISTER] FETCH_COMPANY_FAIL'
}

export interface IUserData {
    email?: string;
    password?: string;
    firstname?: string;
    lastname?: string;
    workplace?: string;
    department?: string;
    image?: string;
    companyPosition?: string;
    company?: ICompanyDomainResponse;
}

interface department {
    name: string;
    points: number;
}

export type IregisterContentResponse = {
    roles: string[];
    email: string;
    firstname: string;
    lastname: string;
    workplace: string;
    department: string;
    companyPosition: string;
    challenges: any[];
    visits: any[];
    id: string;
    points: number;
    company_id: string;
    job: string;
};

// Our object that produce our action creators
export const registerActions = {
    setUserData: (data: IUserData) =>
        ({ type: RegisterTypes.SetUserData, data } as const),
    register: (payload: IUserData) =>
        ({ type: RegisterTypes.Register, payload } as const),
    registerSuccess: (response: IregisterContentResponse) =>
        ({ type: RegisterTypes.RegisterSuccess, response } as const),
    registerFail: (error: AjaxError) =>
        ({ type: RegisterTypes.RegisterFail, error } as const),
    resetRegister: () => ({ type: RegisterTypes.ResetRegister } as const),
    fetchCompany: ({ company }: { company: string }) =>
        ({ type: RegisterTypes.FetchCompany, payload: { company } } as const),
    fetchCompanySuccess: (response: ICompanyDomainResponse) =>
        ({ type: RegisterTypes.FetchCompanySuccess, response } as const),
    fetchCompanyFail: (error: AjaxError) =>
        ({ type: RegisterTypes.FetchCompanyFail, error } as const)
};

// We can then type all of our actions with a single line
export type RegisterActions = ActionTypes<typeof registerActions>;
