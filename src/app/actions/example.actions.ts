import { AjaxError } from 'rxjs/ajax';
import { ActionTypes } from '../core/actions.type';
import { IexampleContentResponseMock } from '../epics/__mocks__/example.mock';

export enum ExampleTypes {
    SetContent = '[EXAMPLE] SET_CONTENT',
    SetContentSuccess = '[EXAMPLE] SET_CONTENT_SUCCESS',
    SetContentFail = '[EXAMPLE] SET_CONTENT_FAIL'
}

// Our object that produce our action creators
export const exampleActions = {
    setContent: () => ({ type: ExampleTypes.SetContent } as const),
    setContentSuccess: (response: IexampleContentResponseMock) =>
        ({ type: ExampleTypes.SetContentSuccess, response } as const),
    setContentFail: (error: AjaxError) =>
        ({ type: ExampleTypes.SetContentFail, error } as const)
};

// We can then type all of our actions with a single line
export type ExampleActions = ActionTypes<typeof exampleActions>;
