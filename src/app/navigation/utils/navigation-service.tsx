/* eslint-disable no-restricted-syntax */
/* eslint-disable guard-for-in */
import React from 'react';
import {
    PartialState,
    NavigationState,
    NavigationContainerRef
} from '@react-navigation/native';

export const RootNavigation: { [key: string]: any } = {
    navigate(name: string) {
        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        name;
    },
    goBack() {},
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    resetRoot(state?: PartialState<NavigationState> | NavigationState) {},
    getRootState(): NavigationState {
        return {} as any;
    }
};

export const setRootNavigation = (
    ref: React.RefObject<NavigationContainerRef>
) => {
    for (const method in RootNavigation) {
        RootNavigation[method] = (...args: any) => {
            if (ref.current) {
                return (ref.current as any)[method](...args);
            }
        };
    }
};
