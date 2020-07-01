import { registerReducer, defaultState } from './register.reducer';
import {
    registerContentResponseMock,
    companyDomainResponseMock
} from '../epics/__mocks__/register.mock';
import { RegisterActions, RegisterTypes } from '../actions/register.actions';

describe('Register Reducer', () => {
    it('should return initial state', () => {
        const action = { type: 'NO_ACTION' };
        const newState = registerReducer(defaultState, action as any);
        expect(newState).toEqual(defaultState);
    });

    it('should register a new user', () => {
        const action: RegisterActions = {
            type: RegisterTypes.RegisterSuccess,
            response: registerContentResponseMock
        };
        const newState = registerReducer(
            defaultState,
            action as RegisterActions
        );
        expect(newState).toEqual({
            ...defaultState,
            isRegistered: true
        });
    });

    it('should fetch a company domain', () => {
        const action: RegisterActions = {
            type: RegisterTypes.FetchCompanySuccess,
            response: companyDomainResponseMock
        };
        const newState = registerReducer(
            defaultState,
            action as RegisterActions
        );
        expect(newState).toEqual({
            ...defaultState,
            company: action.response
        });
    });

    it('should update user data', () => {
        const action: RegisterActions = {
            type: RegisterTypes.SetUserData,
            data: {
                workplace: 'other'
            }
        };
        const newState = registerReducer(
            defaultState,
            action as RegisterActions
        );
        expect(newState).toEqual({
            ...defaultState,
            workplace: action.data.workplace
        });
    });
});
