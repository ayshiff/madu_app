import { exampleReducer, IExampleState } from './example.reducer';
import { ExampleActions, ExampleTypes } from '../actions/example.actions';
import { exampleContentResponseMock } from '../epics/__mocks__/example.mock';

const defaultState: IExampleState = {
    content: ''
};

describe('Example Reducer', () => {
    it('should return initial state', () => {
        const action = { type: 'NO_ACTION' };
        const newState = exampleReducer(defaultState, action as any);
        expect(newState).toEqual(defaultState);
    });

    it('should fetch example content data', () => {
        const action: ExampleActions = {
            type: ExampleTypes.SetContentSuccess,
            response: exampleContentResponseMock
        };
        const newState = exampleReducer(defaultState, action);
        expect(newState).toEqual({
            ...defaultState,
            content: action.response.data
        });
    });
});
