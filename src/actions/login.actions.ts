import { AjaxError } from "rxjs/ajax";
import { ActionTypes } from "../core/actions.type";

export enum LoginTypes {
  Login = "[LOGIN] LOGIN",
  LoginSuccess = "[LOGIN] LOGIN_SUCCESS",
  LoginFail = "[LOGIN] LOGIN_FAIL",
}

export interface IUserData {
  email: string;
  password: string;
}

export type ILoginResponse = {
  access_token: string;
};

// Our object that produce our action creators
export const loginActions = {
  login: (payload: IUserData) => ({ type: LoginTypes.Login, payload } as const),
  loginSuccess: (response: ILoginResponse) =>
    ({ type: LoginTypes.LoginSuccess, response } as const),
  loginFail: (error: AjaxError) =>
    ({ type: LoginTypes.LoginFail, error } as const),
};

// We can then type all of our actions with a single line
export type LoginActions = ActionTypes<typeof loginActions>;
