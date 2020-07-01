import { TestScheduler } from 'rxjs/testing';
import { loginActions } from '../actions/login.actions';
import { loginEpics } from './login.epic';
import { loginResponseMock } from './__mocks__/login.mock';

describe('Login epic', () => {
    let testScheduler: TestScheduler;

    beforeEach(() => {
        testScheduler = new TestScheduler((actual, expected) => {
            expect(actual).toEqual(expected);
        });
    });

    it('should login a user', () => {
        const marbles = {
            i: '-i',
            r: '--r',
            o: '---o'
        };

        const payload = {
            email: 'string@hetic.net',
            password: 'password'
        };

        const values = {
            i: loginActions.login(payload),
            r: { response: loginResponseMock },
            o: loginActions.loginSuccess(loginResponseMock)
        };

        testScheduler.run(({ hot, cold, expectObservable }) => {
            const action$ = hot(marbles.i, values) as any;
            const dependencies = {
                ajax: () => cold(marbles.r, values)
            };
            const state$ = null as any;
            const output$ = loginEpics(action$, state$, dependencies);
            expectObservable(output$).toBe(marbles.o, values);
        });
    });
});
