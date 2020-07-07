import { TestScheduler } from 'rxjs/testing';
import { registerActions } from '../actions/register.actions';
import { registerEpics } from './register.epic';
import {
    registerContentResponseMock,
    companyDomainResponseMock
} from './__mocks__/register.mock';

describe('Register epic', () => {
    let testScheduler: TestScheduler;

    beforeEach(() => {
        testScheduler = new TestScheduler((actual, expected) => {
            expect(actual).toEqual(expected);
        });
    });

    it('register a user', () => {
        const marbles = {
            i: '-i',
            r: '--r',
            o: '---o'
        };

        const payload = {
            email: 'corentin.croizat@hetic.net',
            firstname: 'corentin',
            lastname: 'croizat',
            workplace: 'Progrès',
            department: 'first',
            password: 'password'
        };

        const values = {
            i: registerActions.register(payload),
            r: { response: registerContentResponseMock },
            o: registerActions.registerSuccess(registerContentResponseMock)
        };

        testScheduler.run(({ hot, cold, expectObservable }) => {
            const action$ = hot(marbles.i, values) as any;
            const dependencies = {
                ajax: () => cold(marbles.r, values)
            };
            const state$ = null as any;
            const output$ = registerEpics(action$, state$, dependencies);
            expectObservable(output$).toBe(marbles.o, values);
        });
    });

    it('fetch the company domain', () => {
        const marbles = {
            i: '-i',
            r: '--r',
            o: '---o'
        };

        const payload = {
            company: 'hetic.net'
        };

        const values = {
            i: registerActions.fetchCompany(payload),
            r: { response: companyDomainResponseMock },
            o: registerActions.fetchCompanySuccess(companyDomainResponseMock)
        };

        testScheduler.run(({ hot, cold, expectObservable }) => {
            const action$ = hot(marbles.i, values) as any;
            const dependencies = {
                ajax: () => cold(marbles.r, values)
            };
            const state$ = null as any;
            const output$ = registerEpics(action$, state$, dependencies);
            expectObservable(output$).toBe(marbles.o, values);
        });
    });
});
