import { IPointOfInterest, PoiTypes, PoiActions } from '../actions/poi.actions';
import { indexer } from './utils';
import { IndexedObject } from './image.reducer';

export const defaultState: IPoiState = {
    list: {}
};

export type IPoiState = {
    list: IndexedObject<IPointOfInterest>;
};

export const poiReducer = (
    poiState: IPoiState = defaultState,
    action: PoiActions
): IPoiState => {
    switch (action.type) {
        case PoiTypes.LoadPoiSuccess:
            return {
                list: indexer(action.payload)
            };
        case PoiTypes.VisitPoiSuccess:
        case PoiTypes.LikePoiSuccess:
            return {
                list: { ...poiState.list, [action.payload.id]: action.payload }
            };
        default:
            return poiState;
    }
};
