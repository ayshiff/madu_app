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
    images: string[];
    greenscore: number;
}

export enum PoiTypes {
    LoadPoi = '[POI] LOAD',
    LoadPoiSuccess = '[POI] LOAD_SUCCESS',
    LoadPoiFail = '[POI] LOAD_FAIL',
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
    loadPoiById: (payload: string) =>
        ({ type: PoiTypes.LoadPoiById, payload } as const),
    loadPoiByIdSuccess: (payload: IPointOfInterest) =>
        ({ type: PoiTypes.LoadPoiByIdSuccess, payload } as const),
    loadPoiByIdFail: (error: AjaxError) =>
        ({ type: PoiTypes.LoadPoiByIdFail, error } as const)
};

// We can then type all of our actions with a single line
export type PoiActions = ActionTypes<typeof poiActions>;
