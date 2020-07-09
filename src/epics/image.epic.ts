import { of, Observable } from 'rxjs';
import { Epic, ofType, combineEpics } from 'redux-observable';
import { concatMap, mergeMap, catchError } from 'rxjs/operators';
import { AjaxResponse, AjaxError } from 'rxjs/ajax';
import { BACKEND_SERVICE_URL } from 'madu/const';
import {
    ImageTypes,
    ImageActions,
    imageActions
} from 'madu/actions/image.actions';
import type { dependencies } from '../app.store';

export const loadImage: Epic = (
    action$: Observable<ImageActions>,
    state$: Observable<any>,
    { ajax }: typeof dependencies
): Observable<ImageActions> => {
    return action$.pipe(
        ofType(ImageTypes.LoadImage),
        concatMap((action: any) => {
            const { id } = action;
            return ajax({
                url: `${BACKEND_SERVICE_URL}/images/${id}`,
                method: 'GET'
            }).pipe(
                mergeMap((data: AjaxResponse) => {
                    return of(imageActions.imageSuccess(data.response));
                }),
                catchError((error: AjaxError) => {
                    return of(imageActions.imageFail(error));
                })
            );
        })
    );
};

export const imageEpics = combineEpics(loadImage);
