import { AjaxError } from 'rxjs/ajax';
import { ActionTypes } from '../core/actions.type';

interface IDay {
    from: string | null;
    to: string | null;
}

interface Address {
    value: string;
    lat: number;
    lng: number;
}

export interface IPointOfInterest {
    id: string;
    name: string;
    poiType: string[];
    phone?: string;
    address: Address;
    email: string;
    content: string;
    category: string;
    socialNetwork?: string;
    foodPreference: string[];
    takeAway: boolean;
    wheelchair: boolean;
    openingTime: {
        monday: IDay[];
        tuesday: IDay[];
        wednesday: IDay[];
        thursday: IDay[];
        friday: IDay[];
        saturday: IDay[];
        sunday: IDay[];
    };
    priceRange: string;
    description: string;
    website?: string;
    status?: string;
    visits: number;
    likes: any[];
    images: string[];
    greenscore: number;
}

export enum PoiTypes {
    LoadPoi = '[POI] LOAD',
    LoadPoiSuccess = '[POI] LOAD_SUCCESS',
    LoadPoiFail = '[POI] LOAD_FAIL',
    LikePoi = '[POI] LIKE',
    LikePoiSuccess = '[POI] LIKE_SUCCESS',
    LikePoiFail = '[POI] LIKE_FAIL',
    VisitPoi = '[POI] VISIT',
    VisitPoiSuccess = '[POI] VISIT_SUCCESS',
    VisitPoiFail = '[POI] VISIT_FAIL',
    LoadPoiById = '[POI] LOAD_BY_ID',
    LoadPoiByIdSuccess = '[POI] LOAD_BY_ID_SUCCESS',
    LoadPoiByIdFail = '[POI] LOAD_BY_ID_FAIL'
}

export interface IUserData {
    email: string;
    password: string;
}

export type IPoiResponse = {
    access_token: string;
};

// Our object that produce our action creators
export const poiActions = {
    loadPoi: () => ({ type: PoiTypes.LoadPoi } as const),
    loadPoiSuccess: (payload: IPointOfInterest[]) =>
        ({ type: PoiTypes.LoadPoiSuccess, payload } as const),
    loadPoiFail: (error: AjaxError) =>
        ({ type: PoiTypes.LoadPoiFail, error } as const),
    likePoi: (poiId: string) =>
        ({ type: PoiTypes.LikePoi, payload: { poiId } } as const),
    likePoiSuccess: (payload: IPointOfInterest) =>
        ({ type: PoiTypes.LikePoiSuccess, payload } as const),
    likePoiFail: (error: AjaxError) =>
        ({ type: PoiTypes.LikePoiFail, error } as const),
    visitPoi: (poiId: string) =>
        ({ type: PoiTypes.VisitPoi, payload: { poiId } } as const),
    visitPoiSuccess: (payload: IPointOfInterest) =>
        ({ type: PoiTypes.VisitPoiSuccess, payload } as const),
    visitPoiFail: (error: AjaxError) =>
        ({ type: PoiTypes.VisitPoiFail, error } as const),
    loadPoiById: (payload: string) =>
        ({ type: PoiTypes.LoadPoiById, payload } as const),
    loadPoiByIdSuccess: (payload: IPointOfInterest) =>
        ({ type: PoiTypes.LoadPoiByIdSuccess, payload } as const),
    loadPoiByIdFail: (error: AjaxError) =>
        ({ type: PoiTypes.LoadPoiByIdFail, error } as const)
};

// We can then type all of our actions with a single line
export type PoiActions = ActionTypes<typeof poiActions>;
