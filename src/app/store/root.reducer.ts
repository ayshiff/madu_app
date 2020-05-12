import { combineReducers, Reducer } from 'redux';
import { exampleReducer } from './example.reducer';

export interface AppStore {
    root: ReturnType<typeof exampleReducer>;
}

export const rootReducer: Reducer<AppStore> = combineReducers({
    root: exampleReducer
});
