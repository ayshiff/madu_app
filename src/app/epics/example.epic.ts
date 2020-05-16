import { of, Observable } from 'rxjs';
import { Epic, ofType, combineEpics } from 'redux-observable';
import { concatMap, mergeMap, catchError } from 'rxjs/operators';
import { AjaxResponse, AjaxError } from 'rxjs/ajax';
import type { dependencies } from '../app.store';
import {
    ExampleTypes,
    ExampleActions,
    exampleActions
} from '../actions/example.actions';

const MOCK_URL = 'http://www.mocky.io/v2/5eba6a622f00004f4c3c37d2';

export const loadExampleContent: Epic = (
    action$: Observable<ExampleActions>,
    state$: Observable<any>,
    { ajax }: typeof dependencies
): Observable<ExampleActions> => {
    return action$.pipe(
        ofType(ExampleTypes.SetContent),
        concatMap(() => {
            return ajax({
                url: MOCK_URL,
                method: 'GET'
            }).pipe(
                mergeMap((data: AjaxResponse) => {
                    return of(exampleActions.setContentSuccess(data.response));
                }),
                catchError((error: AjaxError) => {
                    return of(exampleActions.setContentFail(error));
                })
            );
        })
    );
};

export const exampleEpics = combineEpics(loadExampleContent);
