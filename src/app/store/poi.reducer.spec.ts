import { poiReducer, defaultState } from './poi.reducer';
import { PoiTypes, PoiActions } from '../actions/poi.actions';

import { pointOfInterestMock } from '../epics/__mocks__/poi.mock';

describe('Poi Reducer', () => {
    it('should return initial state', () => {
        const action = { type: 'NO_ACTION' };
        const newState = poiReducer(defaultState, action as any);
        expect(newState).toEqual(defaultState);
    });

    it('should load poi', () => {
        const action: PoiActions = {
            type: PoiTypes.LoadPoiSuccess,
            payload: [pointOfInterestMock]
        };
        const newState = poiReducer(defaultState, action as PoiActions);
        expect(newState).toEqual({
            ...defaultState,
            list: action.payload
        });
    });
});
