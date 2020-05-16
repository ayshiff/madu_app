/* eslint-disable global-require */
export const icons = {
    home: require('./home.png'),
    settings: require('./settings.png'),
    back: require('./back.png')
};

export type IconTypes = keyof typeof icons;
