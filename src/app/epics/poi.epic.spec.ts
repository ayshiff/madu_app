import { TestScheduler } from 'rxjs/testing';
import { StateObservable } from 'redux-observable';
import { Subject } from 'rxjs';
import { poiActions } from '../actions/poi.actions';
import { poiEpics } from './poi.epic';
import { pointOfInterestMock } from './__mocks__/poi.mock';

describe('Poi epic', () => {
    let testScheduler: TestScheduler;

    beforeEach(() => {
        testScheduler = new TestScheduler((actual, expected) => {
            expect(actual).toEqual(expected);
        });
    });

    it('load list of poi', () => {
        const marbles = {
            i: '-i',
            r: '--r',
            o: '---o'
        };

        const values = {
            i: poiActions.loadPoi(),
            r: { response: [pointOfInterestMock] },
            o: poiActions.loadPoiSuccess([pointOfInterestMock])
        };

        testScheduler.run(({ hot, cold, expectObservable }) => {
            const action$ = hot(marbles.i, values) as any;
            const dependencies = {
                ajax: () => cold(marbles.r, values)
            };
            const state$ = new StateObservable(new Subject(), {
                login: {
                    accessToken: 'test'
                }
            });
            const output$ = poiEpics(action$, state$, dependencies);
            expectObservable(output$).toBe(marbles.o, values);
        });
    });
});
