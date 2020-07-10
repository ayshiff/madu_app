import { ImageTypes, ImageActions } from '../actions/image.actions';

export const defaultState: ImageState = {
    data: {}
};

export type ImageState = {
    data: IndexedObject<any>;
};

export type IndexedObject<T> = {
    [key: string]: T;
};

export const imageReducer = (
    imageState: ImageState = defaultState,
    action: ImageActions
): ImageState => {
    switch (action.type) {
        case ImageTypes.LoadImageSuccess:
            return {
                ...imageState,
                [action.payload.id]: action.payload.data
            };
        default:
            return imageState;
    }
};
