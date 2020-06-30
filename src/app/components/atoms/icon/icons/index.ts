/* eslint-disable global-require */
export const icons = {
    home: require('./home.png'),
    settings: require('./settings.png'),
    back: require('./back.png'),
    map: require('./map.png'),
    content: require('./content.png'),
    profile: require('./profile.png'),
    explorer: require('./explorer.png'),
    close: require('./close.png'),
    phone: require('./phone.png'),
    pin: require('./pin.png'),
    website: require('./website.png')
};

export type IconTypes = keyof typeof icons;
