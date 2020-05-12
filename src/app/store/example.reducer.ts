import { ExampleActions, ExampleTypes } from '../actions/example.actions';

const defaultState: IExampleState = {
    content: ''
};

export type IExampleState = {
    content: string;
};

export const exampleReducer = (
    exampleState: IExampleState = defaultState,
    action: ExampleActions
): IExampleState => {
    switch (action.type) {
        case ExampleTypes.SetContentSuccess:
            const {
                response: { data }
            } = action;
            return {
                ...exampleState,
                content: data
            };
        default:
            return exampleState;
    }
};
