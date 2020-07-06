import { loginReducer, defaultState } from './login.reducer';
import { LoginActions, LoginTypes } from '../actions/login.actions';
import { loginResponseMock } from '../epics/__mocks__/login.mock';

describe('Login Reducer', () => {
    it('should return initial state', () => {
        const action = { type: 'NO_ACTION' };
        const newState = loginReducer(defaultState, action as any);
        expect(newState).toEqual(defaultState);
    });

    it('should login a user', () => {
        const action: LoginActions = {
            type: LoginTypes.LoginSuccess,
            access_token: loginResponseMock.access_token
        };
        const newState = loginReducer(defaultState, action as LoginActions);
        expect(newState).toEqual({
            ...defaultState,
            accessToken: action.access_token
        });
    });
});
