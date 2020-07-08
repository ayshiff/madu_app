import { AjaxError } from 'rxjs/ajax';
import { ActionTypes } from '../core/actions.type';

export enum ImageTypes {
    LoadImage = '[IMAGE] LOAD_IMAGE',
    LoadImageSuccess = '[IMAGE] LOAD_IMAGE_SUCCESS',
    LoadImageFail = '[IMAGE] LOAD_IMAGE_FAIL'
}

export type IImageResponse = {
    access_token: string;
};

export interface IUserData {
    email: string;
    password: string;
}

type ImagePayload = {
    id: string;
    data: any;
};

export const imageActions = {
    image: (id: string) => ({ type: ImageTypes.LoadImage, id } as const),
    imageSuccess: (payload: ImagePayload) =>
        ({ type: ImageTypes.LoadImageSuccess, payload } as const),
    imageFail: (error: AjaxError) =>
        ({ type: ImageTypes.LoadImageFail, error } as const)
};

export type ImageActions = ActionTypes<typeof imageActions>;
