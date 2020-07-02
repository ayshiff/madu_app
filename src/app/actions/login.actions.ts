import { AjaxError } from 'rxjs/ajax';
import { ActionTypes } from '../core/actions.type';

export enum LoginTypes {
    Login = '[LOGIN] LOGIN',
    LoginSuccess = '[LOGIN] LOGIN_SUCCESS',
    LoginFail = '[LOGIN] LOGIN_FAIL',
    Logout = '[LOGIN] LOGOUT'
}

export interface IUserData {
    email: string;
    password: string;
}

// Our object that produce our action creators
export const loginActions = {
    login: (payload: IUserData) =>
        ({ type: LoginTypes.Login, payload } as const),
    // eslint-disable-next-line @typescript-eslint/camelcase
    loginSuccess: (access_token: string) =>
        ({ type: LoginTypes.LoginSuccess, access_token } as const),
    loginFail: (error: AjaxError) =>
        ({ type: LoginTypes.LoginFail, error } as const),
    logout: () => ({ type: LoginTypes.Logout } as const)
};

// We can then type all of our actions with a single line
export type LoginActions = ActionTypes<typeof loginActions>;
