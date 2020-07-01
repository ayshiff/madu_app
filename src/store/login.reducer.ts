import { LoginActions, LoginTypes } from '../actions/login.actions';

export const defaultState: ILoginState = {};

export type ILoginState = {
    accessToken?: string;
};

export const loginReducer = (
    loginState: ILoginState = defaultState,
    action: LoginActions
): ILoginState => {
    switch (action.type) {
        case LoginTypes.LoginSuccess:
            return {
                accessToken: action.response.access_token
            };
        default:
            return loginState;
    }
};
