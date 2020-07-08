import { IPointOfInterest, PoiTypes, PoiActions } from '../actions/poi.actions';

export const defaultState: IPoiState = {
    list: []
};

export type IPoiState = {
    list: IPointOfInterest[];
};

export const poiReducer = (
    poiState: IPoiState = defaultState,
    action: PoiActions
): IPoiState => {
    switch (action.type) {
        case PoiTypes.LoadPoiSuccess:
            return {
                list: action.payload
            };
        default:
            return poiState;
    }
};
