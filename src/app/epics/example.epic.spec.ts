import { TestScheduler } from 'rxjs/testing';
import { exampleActions } from '../actions/example.actions';
import { exampleContentResponseMock } from './__mocks__/example.mock';
import { exampleEpics } from './example.epic';

describe('example epic', () => {
    let testScheduler: TestScheduler;

    beforeEach(() => {
        testScheduler = new TestScheduler((actual, expected) => {
            expect(actual).toEqual(expected);
        });
    });

    it('should fetch content data', () => {
        const marbles = {
            i: '-i',
            r: '--r',
            o: '---o'
        };

        const values = {
            i: exampleActions.setContent(),
            r: { response: exampleContentResponseMock },
            o: exampleActions.setContentSuccess(exampleContentResponseMock)
        };

        testScheduler.run(({ hot, cold, expectObservable }) => {
            const action$ = hot(marbles.i, values) as any;
            const dependencies = {
                ajax: ({ url, method }: { url: string; method: string }) =>
                    cold(marbles.r, values)
            };
            const state$ = null as any;
            const output$ = exampleEpics(action$, state$, dependencies);
            expectObservable(output$).toBe(marbles.o, values);
        });
    });
});
